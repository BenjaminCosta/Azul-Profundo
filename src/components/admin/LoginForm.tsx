import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, devLogin, error } = useAuth(); // <-- Ahora tenemos devLogin
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) {
      navigate('/admin');
    }
  };

  const handleDevLogin = async () => {
    const success = await devLogin();
    if (success) {
      navigate('/admin');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Acceso Administrador</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
          {error.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ... tus campos de formulario existentes ... */}
        
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-md text-white font-medium bg-blue-600 hover:bg-blue-700"
        >
          Ingresar
        </button>

        {/* Botón de desarrollo */}
        {process.env.NODE_ENV === 'development' && (
          <button
            type="button"
            onClick={handleDevLogin}
            className="w-full py-2 px-4 rounded-md text-white font-medium bg-gray-600 hover:bg-gray-700 mt-4"
          >
            Acceso Rápido (Modo Desarrollo)
          </button>
        )}
      </form>
    </div>
  );
};