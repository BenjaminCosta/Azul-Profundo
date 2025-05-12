import { useState, useEffect } from 'react';
import { 
  createProduct, 
  updateProduct, 
  deleteProduct, 
  getProducts,
  getInactiveProducts,
  uploadProductImage 
} from '../../services/products';
import { Product } from '../../types/product';
import { ProductForm } from './ProductForm';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export const ProductManager = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [inactiveProducts, setInactiveProducts] = useState<Product[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showInactive, setShowInactive] = useState(false);

  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const activeProducts = await getProducts();
      setProducts(activeProducts);
      const inactiveProds = await getInactiveProducts();
      setInactiveProducts(inactiveProds);
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

      if (file) {
        imageUrl = await uploadProductImage(file);
      }

      const productToSave = {
        ...productData,
        image_url: imageUrl
      };

      if (currentProduct && currentProduct.id) {
        const updatedProduct = await updateProduct(currentProduct.id, productToSave);
        setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
      } else {
        const newProduct = await createProduct(productToSave);
        setProducts([newProduct, ...products]);
      }
      setCurrentProduct(null);
      await loadProducts(); // Recargar ambos listados
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
              await loadProducts();
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
      await loadProducts(); // Recargar ambos listados
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cambiar estado');
    }
  };

  if (isLoading) return <div className="text-center py-8">Cargando productos...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

  const renderProductsTable = (productsList: Product[], isActive: boolean) => (
    <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Imagen</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destacado</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {productsList.map((product) => (
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
                <div className="text-sm text-gray-500">{product.description.substring(0, 50)}...</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                ${product.price.toLocaleString('es-AR')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  product.featured ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {product.featured ? 'Destacado' : 'Normal'}
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
                  onClick={() => toggleProductStatus(product.id, !isActive)}
                  className={`${
                    isActive 
                      ? 'text-yellow-600 hover:text-yellow-900' 
                      : 'text-green-600 hover:text-green-900'
                  }`}
                >
                  {isActive ? 'Desactivar' : 'Activar'}
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
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gestión de Productos</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => setShowInactive(!showInactive)}
            className={`px-4 py-2 rounded-md transition-colors ${
              showInactive 
                ? 'bg-gray-600 text-white hover:bg-gray-700' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {showInactive ? '⬅️ Volver a activos' : '📦 Ver inactivos'}
          </button>
          <button
            onClick={() => setCurrentProduct({
              name: '',
              description: '',
              price: 0,
              image_url: '',
              mercadolibre_link: '',
              featured: false,
              is_active: true
            })}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            + Nuevo Producto
          </button>
        </div>
      </div>

      {currentProduct ? (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">
            {currentProduct.id ? 'Editar Producto' : 'Crear Nuevo Producto'}
          </h3>
          <ProductForm
            initialData={currentProduct}
            onSubmit={handleSubmit}
            onCancel={() => setCurrentProduct(null)}
          />
        </div>
      ) : showInactive ? (
        <>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Productos Desactivados</h3>
          {inactiveProducts.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <p className="text-gray-500">No hay productos desactivados</p>
            </div>
          ) : (
            renderProductsTable(inactiveProducts, false)
          )}
        </>
      ) : (
        <>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Productos Activos</h3>
          {products.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <p className="text-gray-500">No hay productos activos</p>
              <button 
                onClick={() => setCurrentProduct({
                  name: '',
                  description: '',
                  price: 0,
                  image_url: '',
                  mercadolibre_link: '',
                  featured: false,
                  is_active: true
                })}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Crear primer producto
              </button>
            </div>
          ) : (
            renderProductsTable(products, true)
          )}
        </>
      )}
    </div>
  );
};