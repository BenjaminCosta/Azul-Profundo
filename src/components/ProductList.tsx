import { Product } from '../types/product';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  products: Product[];
  className?: string;
}

export const ProductList = ({ products, className = '' }: ProductListProps) => {
  if (products.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-gray-500">No se encontraron productos</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};