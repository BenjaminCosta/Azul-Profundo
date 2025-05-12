import { ProductList } from "@/components/ProductList";
import { useProducts } from "@/hooks/useProducts";
import { ProductCategory } from "@/types/product";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ShopPage = () => {
  const { products, loading, error, refetch } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");
  const [sortOption, setSortOption] = useState("featured");

  // Filtrar y ordenar productos
  const filteredProducts = products
    .filter(product => 
      activeCategory === "all" || product.category === activeCategory
    )
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "name") return a.name.localeCompare(b.name);
      return a.featured ? -1 : 1; // featured primero
    });

  if (error) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto p-4 text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            Error al cargar productos: 
          </div>
          <Button onClick={() => refetch()} variant="default">
            Reintentar
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section con gradiente oceánico */}
      <div className="bg-gradient-to-b from-blue-950/60 via-blue-500/50 to-ocean-light/40">
        <div className="container mx-auto px-4 pt-40 pb-16 md:pt-40 md:pb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Tienda de Buceo Azul Profundo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Equipa tus aventuras submarinas con los mejores productos profesionales
          </p>
          <div className="max-w-md mx-auto">
            <Input
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {activeCategory === "all" ? "Todos los productos" : 
               activeCategory === "equipment" ? "Equipo de Buceo" : "Cursos Certificados"}
            </h2>
            <p className="text-gray-500">
              {filteredProducts.length} {filteredProducts.length === 1 ? "producto" : "productos"} disponibles
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <Select
              value={activeCategory}
              onValueChange={(value) => setActiveCategory(value as ProductCategory | "all")}
            >
              <SelectTrigger className="min-w-[180px]">
                <SelectValue placeholder="Filtrar por categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                <SelectItem value="equipment">Equipo</SelectItem>
                <SelectItem value="course">Cursos</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={sortOption}
              onValueChange={setSortOption}
            >
              <SelectTrigger className="min-w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Destacados</SelectItem>
                <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
                <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
                <SelectItem value="name">Nombre (A-Z)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-10 w-1/2" />
              </div>
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <div className="max-w-md mx-auto">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No se encontraron productos</h3>
              <p className="mt-1 text-gray-500 mb-4">
                {searchTerm ? 
                  `No hay resultados para "${searchTerm}"` : 
                  "Prueba ajustando los filtros de búsqueda"}
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                  refetch();
                }}
              >
                Limpiar filtros
              </Button>
            </div>
          </div>
        ) : (
          <ProductList 
            products={filteredProducts} 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ShopPage;