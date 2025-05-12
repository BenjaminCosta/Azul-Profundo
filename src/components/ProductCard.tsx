import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  className?: string;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard = ({ 
  product,
  className = '',
  onAddToCart 
}: ProductCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] ${className}`}>
      <div className="relative">
        <img 
          src={product.image_url} 
          alt={product.name}
          className="w-full h-48 object-cover"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/placeholder-product.jpg';
          }}
        />
        {product.featured && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
            Destacado
          </span>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <span className={`text-xs px-2 py-1 rounded ${
            product.category === 'course' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {product.category === 'course' ? 'Curso' : 'Equipo'}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${product.price.toLocaleString('es-AR')}</span>
          {product. mercadolibre_link ? (
            <a 
              href={product. mercadolibre_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded transition-colors flex items-center gap-1"
            >
              <span>Comprar en</span>
              <MercadoLibreIcon className="h-4 w-4" />
            </a>
          ) : (
            <button 
              onClick={() => onAddToCart?.(product)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
              disabled={!onAddToCart}
            >
              Comprar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Componente para el ícono de Mercado Libre (puedes ponerlo en otro archivo si prefieres)
const MercadoLibreIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.895 17.611a.932.932 0 0 1-.941.92H6.982a.932.932 0 0 1-.941-.92v-8.9l5.925 3.62 5.93-3.62v8.9z"/>
  </svg>
);