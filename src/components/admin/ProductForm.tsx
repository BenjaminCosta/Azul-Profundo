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
    price: initialData?.price || 0,
    image_url: initialData?.image_url || '',
    mercadolibre_link: initialData?.mercadolibre_link || '',
    category: initialData?.category || 'equipment',
    featured: initialData?.featured || false,
    is_active: initialData?.is_active ?? true,
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageFile(file);

    if (file) {
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
    setIsSubmitting(true);
    try {
      await onSubmit(formData, imageFile || undefined);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Descripción</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Precio</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min="0"
          step="0.01"
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Categoría</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        >
          <option value="equipment">Equipamiento</option>
          <option value="accessory">Accesorios</option>
          <option value="service">Servicios</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Enlace Mercado Libre</label>
        <input
          type="url"
          name="mercadolibre_link"
          value={formData.mercadolibre_link}
          onChange={handleChange}
          placeholder="https://www.mercadolibre.com.ar/..."
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Imagen</label>
        {(imagePreview || formData.image_url) && (
          <img 
            src={imagePreview || formData.image_url} 
            alt="Vista previa" 
            className="mt-2 h-24 object-cover rounded"
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-700">Destacado</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="is_active"
            checked={formData.is_active}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-700">Activo</label>
        </div>
      </div>

      <div className="flex justify-end space-x-2 mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-50"
        >
          {isSubmitting ? 'Guardando...' : 'Guardar'}
        </button>
      </div>
    </form>
  );
};
