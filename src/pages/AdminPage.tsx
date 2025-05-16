import { ProductManager } from '../components/admin/ProductManager';

const AdminPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      <header className="mb-10">
        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Panel de Administración
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Gestión completa de productos y catálogo
          </p>
          
        </div>
      </header>

      <div className="bg-white shadow-sm rounded-lg p-1">
        <ProductManager />
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Administración de Productos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default AdminPage;