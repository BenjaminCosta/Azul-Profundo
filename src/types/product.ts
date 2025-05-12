export interface Product {
  id?: string;  // Añade el ? para hacerlo opcional
  name: string;
  description: string;
  price: number;
  image_url: string;
  mercadolibre_link: string;
  category: ProductCategory;
  featured?: boolean;
  is_active: boolean;
}

export type ProductCategory = 'course' | 'equipment';
export interface User {
  username: string; // Eliminamos id y created_at al ser autenticación simple
  role: 'admin' | 'editor';
}