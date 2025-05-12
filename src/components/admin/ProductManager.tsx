import { useState, useEffect } from 'react';
import { 
  createProduct, 
  updateProduct, 
  deleteProduct, 
  getProducts,
  uploadProductImage 
} from '../../services/products';
import { Product } from '../../types/product';
import { ProductForm } from './ProductForm';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { supabase } from '../../services/supabase';

export const ProductManager = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar productos');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async (productData: Omit<Product, 'id'>, file?: File) => {
    try {
      let imageUrl = productData.image_url;

      // Subir nueva imagen si existe
      if (file) {
        imageUrl = await uploadProductImage(file);
      }

      const productToSave = {
        ...productData,
        image_url: imageUrl
      };

      if (currentProduct && currentProduct.id) {
        // Actualizar producto existente
        const updatedProduct = await updateProduct(currentProduct.id, productToSave);
        setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
      } else {
        // Crear nuevo producto
        const newProduct = await createProduct(productToSave);
        setProducts([newProduct, ...products]);
      }
      setCurrentProduct(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al guardar el producto');
    }
  };

  const handleDelete = async (id: string) => {
    confirmAlert({
      title: 'Confirmar eliminación',
      message: '¿Estás seguro de que quieres eliminar este producto?',
      buttons: [
        {
          label: 'Sí',
          onClick: async () => {
            try {
              await deleteProduct(id);
              setProducts(products.filter(p => p.id !== id));
            } catch (err) {
              setError(err instanceof Error ? err.message : 'Error al eliminar el producto');
            }
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };

  const toggleProductStatus = async (id: string, isActive: boolean) => {
    try {
      await updateProduct(id, { is_active: isActive });
      loadProducts(); // Recargar productos para reflejar el cambio
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cambiar estado');
    }
  };

  if (isLoading) return <div className="text-center py-8">Cargando productos...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gestión de Productos</h2>
        <button
          onClick={() => setCurrentProduct({
            name: '',
            description: '',
            price: 0,
            image_url: '',
            mercadolibre_link: '',
            category: 'equipment',
            featured: false,
            is_active: true
          })}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          + Nuevo Producto
        </button>
      </div>

      {currentProduct ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ProductForm
            initialData={currentProduct}
            onSubmit={handleSubmit}
            onCancel={() => setCurrentProduct(null)}
          />
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Imagen</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {product.image_url && (
                      <img 
                        src={product.image_url} 
                        alt={product.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium">{product.name}</div>
                    <div className="text-sm text-gray-500">{product.category === 'course' ? 'Curso' : 'Equipo'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ${product.price.toLocaleString('es-AR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span 
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        product.is_active 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {product.is_active ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => setCurrentProduct(product)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => toggleProductStatus(product.id, !product.is_active)}
                      className={`${
                        product.is_active 
                          ? 'text-yellow-600 hover:text-yellow-900' 
                          : 'text-green-600 hover:text-green-900'
                      }`}
                    >
                      {product.is_active ? 'Desactivar' : 'Activar'}
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};