import { toggleProductStatus, getInactiveProducts } from '../../services/products';
import { useEffect, useState } from 'react';
import { Product } from '../../types/product';

export const InactiveProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = async () => {
    const data = await getInactiveProducts();
    setProducts(data);
  };

  const handleReactivate = async (id: string) => {
    await toggleProductStatus(id, true);
    loadProducts(); // Recargar lista
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="mt-8 p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">📦 Productos Desactivados</h3>
      {products.length === 0 ? (
        <p className="text-gray-500">No hay productos desactivados</p>
      ) : (
        <ul className="space-y-3">
          {products.map(product => (
            <li key={product.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span>{product.name}</span>
              <button
                onClick={() => handleReactivate(product.id)}
                className="px-3 py-1 bg-green-100 text-green-800 rounded hover:bg-green-200"
              >
                Reactivar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};