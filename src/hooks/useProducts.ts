import { getProducts } from '@/services/products';
import { Product } from '@/types/product';
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/services/supabase'; // Importación añadida

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async (category?: string) => {
    setLoading(true);
    try {
      let query = supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (category) {
        query = query.eq('category', category);
      }

      const { data, error: queryError } = await query; // Renombrado para evitar conflicto

      if (queryError) throw queryError;
      setProducts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar productos');
    } finally {
      setLoading(false);
    }
  }, []);

  const getFeaturedProducts = useCallback(() => {
    return products.filter(product => product.featured);
  }, [products]);

  const getProductsByCategory = useCallback((category: string) => {
    return products.filter(product => product.category === category);
  }, [products]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
    getFeaturedProducts,
    getProductsByCategory
  };
};