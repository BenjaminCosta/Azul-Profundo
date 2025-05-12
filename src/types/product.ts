export interface Product {
  id?: string;  // Añade el ? para hacerlo opcional
  name: string;
  description: string;
  price: number;
  image_url: string;
  mercadolibre_link: string;
  featured?: boolean;
  is_active: boolean;
}
