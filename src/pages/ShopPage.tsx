import { useProducts } from "@/hooks/useProducts";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { toast } from 'sonner';
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
  }, []);

  // Filter and sort products
  const filteredProducts = products
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

  if (error) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto p-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
          >
            Error al cargar productos
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button onClick={() => refetch()} variant="default">
              Reintentar
            </Button>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Navbar />
      
      {/* Animated Hero Section */}
      <motion.div 
        className="relative h-[600px] md:h-[500px] w-full bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: backgrounds[currentBg],
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-blue-800/30"></div>
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Equipamiento Profesional
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 max-w-2xl mx-auto mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Todo lo que necesitas para tus aventuras submarinas
          </motion.p>
          
          <motion.div 
            className="max-w-md w-full"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Input
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/90 backdrop-blur-sm border-blue-300 focus-visible:ring-blue-400"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
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
        </motion.div>

        {loading ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={i} 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Skeleton className="h-60 w-full rounded-xl bg-blue-100" />
                <Skeleton className="h-6 w-3/4 bg-blue-100" />
                <Skeleton className="h-4 w-full bg-blue-100" />
                <Skeleton className="h-10 w-1/2 bg-blue-100" />
              </motion.div>
            ))}
          </motion.div>
        ) : filteredProducts.length === 0 ? (
          <motion.div 
            className="text-center py-16 bg-blue-50 rounded-xl border border-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="max-w-md mx-auto">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  y: [0, -10, 0]
                }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <svg className="mx-auto h-16 w-16 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="mt-4 text-xl font-medium text-blue-900">No se encontraron productos</h3>
              <p className="mt-2 text-blue-600 mb-6">
                {searchTerm ? 
                  `No hay resultados para "${searchTerm}"` : 
                  "Prueba ajustando los filtros de búsqueda"}
              </p>
              <motion.div whileHover={{ scale: 1.05 }}>
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
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <AnimatePresence>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  layout
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </main>
<motion.section 
  className="py-16 bg-cover bg-center relative overflow-hidden"
  style={{ backgroundImage: 'url(/imagenes/bg3.jpg)' }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
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
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      
      <Link to="/contacto"
       className="bg-gradient-to-l from-ocean-dark to-ocean-light text-white hover:from-ocean-dark to-ocean font-bold text-lg px-6 py-4 rounded-xl shadow-xl backdrop-blur-md">
       
      
        Contactar a un especialista
      </Link>
    </motion.div>
  </div>
</motion.section>


      <Footer />
    </div>
  );
};

export default ShopPage;