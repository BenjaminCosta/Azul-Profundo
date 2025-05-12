import { useState, useEffect } from 'react';

// Credenciales hardcodeadas (en producción usa variables de entorno)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123', // Cambia esto en producción
  role: 'admin' as const
};

// Clave para el localStorage
const AUTH_KEY = 'dev-diving-auth';

export const useAuth = () => {
  const [user, setUser] = useState<{
    username: string;
    role: 'admin' | 'editor';
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Efecto para cargar la sesión al iniciar
  useEffect(() => {
    const loadSession = () => {
      setLoading(true);
      try {
        const savedUser = localStorage.getItem(AUTH_KEY);
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (err) {
        console.error('Error loading session:', err);
      } finally {
        setLoading(false);
      }
    };

    loadSession();
  }, []);

  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulamos un retraso de red
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (username === ADMIN_CREDENTIALS.username && 
          password === ADMIN_CREDENTIALS.password) {
        const userData = {
          username: ADMIN_CREDENTIALS.username,
          role: ADMIN_CREDENTIALS.role
        };
        setUser(userData);
        localStorage.setItem(AUTH_KEY, JSON.stringify(userData));
        return true;
      }
      
      throw new Error('Credenciales incorrectas');
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error de autenticación'));
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_KEY);
  };

  // Función específica para desarrollo
  const devLogin = async () => {
    return login(ADMIN_CREDENTIALS.username, ADMIN_CREDENTIALS.password);
  };

  return {
    user,
    loading,
    error,
    login,
    logout,
    devLogin, // <-- Nueva función exportada
    isAuthenticated: !!user
  };
};