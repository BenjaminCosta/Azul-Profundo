import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { LoginForm } from '../components/admin/LoginForm';
import { ProductManager } from '../components/admin/ProductManager';
import { ProductForm } from '../components/admin/ProductForm'; // Aseguramos la importación

const AdminPage = () => {
  const { user, logout, loading, error } = useAuth();

  // Debugging
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && !user) {
      const devUser = localStorage.getItem('dev-user');
      if (devUser) {
        console.log('Usuario de desarrollo detectado');
        // Aquí podrías actualizar manualmente el estado si lo necesitás
      }
    }
  }, [user]);

  useEffect(() => {
    console.log('Estado de autenticación:', { user, loading, error });
  }, [user, loading, error]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <span className="ml-3">Verificando autenticación...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error.message || 'Error de autenticación'}</p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Recargar página
        </button>
      </div>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <header className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Panel de {user.role === 'admin' ? 'Administración' : 'Editor'}</h1>
          <p className="text-gray-600">Conectado como: {user.username}</p>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2 text-sm text-red-600 hover:text-red-800 px-3 py-2 border border-red-200 rounded transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Cerrar sesión
        </button>
      </header>

      {user.role === 'admin' ? (
        <ProductManager />
      ) : (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-yellow-700 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Solo los administradores pueden gestionar productos.
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
