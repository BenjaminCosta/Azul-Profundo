import { useState, ChangeEvent } from 'react';
import { Product } from '../../types/product';

interface ProductFormProps {
  initialData?: Partial<Product>;
  onSubmit: (product: Omit<Product, 'id'>, file?: File) => Promise<void>;
  onCancel: () => void;
}

export const ProductForm = ({ initialData, onSubmit, onCancel }: ProductFormProps) => {
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    name: initialData?.name || '',
    description: initialData?.description || '',
    price: initialData?.price || undefined,
    image_url: initialData?.image_url || '',
    mercadolibre_link: initialData?.mercadolibre_link || '',
    featured: initialData?.featured || false,
    is_active: initialData?.is_active ?? true,
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [inputMode, setInputMode] = useState<'upload' | 'url'>('upload');
  const [imageError, setImageError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'image_url' && inputMode === 'url') {
      setImageError(null);
      if (value) {
        // Verificación básica de URL
        if (!value.match(/^https?:\/\/.+\/.+\.(jpg|jpeg|png|gif|webp)(\?.+)?$/i)) {
          setImageError('La URL debe ser directa a una imagen (jpg, png, etc.)');
        } else {
          setImagePreview(value);
        }
      } else {
        setImagePreview(null);
      }
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageFile(file);
    setImageError(null);

    if (file) {
      // Verificar tipo de archivo
      if (!file.type.match('image.*')) {
        setImageError('Por favor sube un archivo de imagen válido');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name) {
      alert('El nombre es requerido');
      return;
    }

    if (!formData.price || isNaN(Number(formData.price))) {
      alert('Por favor ingresa un precio válido');
      return;
    }

    if (inputMode === 'url' && !formData.image_url) {
      alert('Por favor ingresa una URL de imagen válida');
      return;
    }

    if (inputMode === 'upload' && !imageFile && !formData.image_url) {
      alert('Por favor sube una imagen o ingresa una URL');
      return;
    }

    setIsSubmitting(true);
    try {
      const productToUpdate = {
        ...formData,
        price: Number(formData.price)
      };
      
      await onSubmit(
        productToUpdate, 
        inputMode === 'upload' ? imageFile || undefined : undefined
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del Producto*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            placeholder="Ej: Camiseta de algodón"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Descripción*</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            placeholder="Describe el producto en detalle..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Precio*</label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              name="price"
              value={formData.price ?? ''}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
              className="block w-full rounded-md border-gray-300 pl-7 focus:border-blue-500 focus:ring-blue-500 p-2 border"
              placeholder="0.00"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Enlace Mercado Libre</label>
          <input
            type="url"
            name="mercadolibre_link"
            value={formData.mercadolibre_link}
            onChange={handleChange}
            placeholder="https://www.mercadolibre.com.ar/..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Imagen del Producto*</label>
          
          <div className="flex space-x-4 mb-3">
            <button
              type="button"
              onClick={() => {
                setInputMode('upload');
                setImageError(null);
              }}
              className={`px-3 py-1 text-sm rounded-md ${inputMode === 'upload' ? 'bg-blue-100 text-blue-800 border-blue-300 border' : 'bg-gray-100 text-gray-800'}`}
            >
              Subir imagen
            </button>
            <button
              type="button"
              onClick={() => {
                setInputMode('url');
                setImageError(null);
              }}
              className={`px-3 py-1 text-sm rounded-md ${inputMode === 'url' ? 'bg-blue-100 text-blue-800 border-blue-300 border' : 'bg-gray-100 text-gray-800'}`}
            >
              Usar URL
            </button>
          </div>

          {imageError && (
            <p className="text-red-500 text-sm mb-2">{imageError}</p>
          )}

          {(imagePreview || formData.image_url) && (
            <div className="mb-3">
              <p className="text-sm text-gray-500 mb-1">Vista previa:</p>
              <img 
                src={imagePreview || formData.image_url} 
                alt="Vista previa" 
                className="h-32 w-32 object-contain rounded-md border border-gray-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  setImageError('No se pudo cargar la imagen. Verifica la URL.');
                }}
              />
            </div>
          )}

          {inputMode === 'upload' ? (
            <div className="flex items-center">
              <label className="cursor-pointer w-full">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </label>
            </div>
          ) : (
            <div>
              <input
                type="url"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
                placeholder="https://ejemplo.com/imagen.jpg"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              />
              <p className="mt-1 text-xs text-gray-500">
                Ingresa la URL completa directa a la imagen (ej: https://...jpg/png)
              </p>
            </div>
          )}
        </div>

        <div className="sm:col-span-2 flex space-x-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="ml-2 block text-sm text-gray-700">Producto Destacado</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="is_active"
              checked={formData.is_active}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="ml-2 block text-sm text-gray-700">Producto Activo</label>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Guardando...
            </>
          ) : 'Guardar Producto'}
        </button>
      </div>
    </form>
  );
};