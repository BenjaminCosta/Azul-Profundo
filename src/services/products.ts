import { supabase } from './supabase';
import { Product } from '../types/product';

export const getProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
};

export const getProductById = async (id: string): Promise<Product | null> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return null;
  return data;
};

export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  const { data, error } = await supabase
    .from('products')
    .insert({
      ...product,
      is_active: true
    })
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateProduct = async (id: string, updates: Partial<Product>): Promise<Product> => {
  const { data, error } = await supabase
    .from('products')
    .update({
      ...updates,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteProduct = async (id: string): Promise<void> => {
  // En lugar de borrar, marcamos como inactivo
  const { error } = await supabase
    .from('products')
    .update({ 
      is_active: false,
      updated_at: new Date().toISOString()
    })
    .eq('id', id);

  if (error) throw error;
};

export const uploadProductImage = async (file: File): Promise<string> => {
  const fileName = `${Date.now()}-${file.name}`;
  const { data, error } = await supabase
    .storage
    .from('product-images')
    .upload(fileName, file);

  if (error) throw error;

  const { data: { publicUrl } } = supabase
    .storage
    .from('product-images')
    .getPublicUrl(fileName);

  return publicUrl;
};