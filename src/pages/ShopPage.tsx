import { useProducts } from "@/hooks/useProducts";
import { useState, useEffect, useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Link } from "react-router-dom";

// Background images

const ShopPage = () => {
  const { products, loading, error, refetch } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("featured");
  const [currentBg, setCurrentBg] = useState(0);

  const backgrounds = [
    `linear-gradient(to bottom, rgba(7, 44, 84, 0), rgba(7, 44, 84, 0.2)), url("/imagenes/bg5.jpg")`,
  ];

  // Rotate background images every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products
      .filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortOption === "price-asc") return a.price - b.price;
        if (sortOption === "price-desc") return b.price - a.price;
        if (sortOption === "name") return a.name.localeCompare(b.name);
        return a.featured ? -1 : 1; // featured first
      });
  }, [products, searchTerm, sortOption]);

  if (error) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto p-4 text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            Error al cargar productos
          </div>
          <div className="transition-transform transform-gpu hover:scale-105">
            <Button onClick={() => refetch()} variant="default">
              Reintentar
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
        <Navbar />

        {/* Hero Section */}
        <div
          className="relative h-[600px] md:h-[500px] w-full bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: backgrounds[currentBg],
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-blue-800/30"></div>

          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Equipamiento Profesional
            </h1>

            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Todo lo que necesitas para tus aventuras submarinas
            </p>

            <div className="max-w-md w-full">
              <Input
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/90 backdrop-blur-sm border-blue-300 focus-visible:ring-blue-400"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-ocean-dark">
                Nuestros Productos
              </h2>
              <p className="text-ocean-dark">
                {filteredProducts.length} {filteredProducts.length === 1 ? "producto encontrado" : "productos encontrados"}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Select
                value={sortOption}
                onValueChange={setSortOption}
              >
                <SelectTrigger className="min-w-[180px] bg-white border-blue-300 focus:ring-blue-400">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent className="bg-white border-blue-300">
                  <SelectItem value="featured">Destacados</SelectItem>
                  <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
                  <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
                  <SelectItem value="name">Nombre (A-Z)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-60 w-full rounded-xl bg-blue-100" />
                  <Skeleton className="h-6 w-3/4 bg-blue-100" />
                  <Skeleton className="h-4 w-full bg-blue-100" />
                  <Skeleton className="h-10 w-1/2 bg-blue-100" />
                </div>
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-blue-50 rounded-xl border border-blue-200">
              <div className="max-w-md mx-auto">
                <div className="animate-bounce">
                  <svg className="mx-auto h-16 w-16 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-medium text-blue-900">No se encontraron productos</h3>
                <p className="mt-2 text-blue-600 mb-6">
                  {searchTerm ? `No hay resultados para "${searchTerm}"` : "Prueba ajustando los filtros de búsqueda"}
                </p>
                <div className="transition-transform transform-gpu hover:scale-105">
                  <Button
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-50"
                    onClick={() => {
                      setSearchTerm("");
                      refetch();
                    }}
                  >
                    Limpiar filtros
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="transition-transform transform-gpu hover:-translate-y-1">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
      </main>
      <section
        className="py-16 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: 'url(/imagenes/bg3.jpg)' }}
      >
        {/* Capa de Glassmorphism */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/70 to-ocean-light/60 "></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            ¿Necesitas asesoramiento?
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8 backdrop-blur-sm bg-white/10 rounded-xl p-4">
            Nuestros expertos en buceo pueden ayudarte a elegir el equipo perfecto para tus necesidades.
          </p>
          <div className="transition-transform transform-gpu hover:scale-105 active:scale-95">
            <Link to="/contacto" className="bg-gradient-to-l from-ocean-dark to-ocean-light text-white hover:from-ocean-dark to-ocean font-bold text-lg px-6 py-4 rounded-xl shadow-xl backdrop-blur-md">
              Contactar a un especialista
            </Link>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default ShopPage;