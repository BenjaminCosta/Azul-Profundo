import { createClient } from '@supabase/supabase-js';

// Verificación mejorada de variables de entorno
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(`
    Missing Supabase credentials. Please check your .env file.
    Required variables:
    - VITE_SUPABASE_URL
    - VITE_SUPABASE_KEY
  `);
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Opcional: Verificación de conexión (solo para desarrollo)
if (import.meta.env.DEV) {
  supabase.auth.getSession().then(({ data }) => {
    console.log('Conexión a Supabase exitosa:', data.session !== null);
  }).catch(error => {
    console.error('Error conectando a Supabase:', error);
  });
}