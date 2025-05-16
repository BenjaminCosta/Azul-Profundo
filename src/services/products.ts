import { supabase } from './supabase';
import { Product } from '../types/product';

// Obtener todos los productos activos
export const getProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (error) throw new Error(error.message);
  return data || [];
};

// Obtener producto por ID
export const getProductById = async (id: string): Promise<Product | null> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return null;
  return data;
};

// Crear nuevo producto
export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  const { data, error } = await supabase
    .from('products')
    .insert({ ...product, is_active: true })
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
};

// Actualizar producto existente
export const updateProduct = async (
  id: string,
  updates: Partial<Product>
): Promise<Product> => {
  const { data, error } = await supabase
    .from('products')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
};

// Eliminar producto PERMANENTEMENTE
export const deleteProduct = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);

  if (error) throw new Error(error.message);
};

// Agregar estos métodos
export const getInactiveProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', false);
  if (error) throw error;
  return data;
};

export const toggleProductStatus = async (id: string, isActive: boolean) => {
  const { error } = await supabase
    .from('products')
    .update({ is_active: isActive, updated_at: new Date().toISOString() })
    .eq('id', id);
  if (error) throw error;
};

// Subir imagen al bucket
export const uploadProductImage = async (file: File): Promise<string> => {
  const fileName = `${Date.now()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from('product-images')
    .upload(fileName, file);

  if (error) throw new Error(error.message);

  const { data: publicUrlData } = supabase
    .storage
    .from('product-images')
    .getPublicUrl(fileName);

  return publicUrlData.publicUrl;
};
