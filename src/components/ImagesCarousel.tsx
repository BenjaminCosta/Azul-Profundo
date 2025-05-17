import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const divingImages = [
  {
    id: 1,
    image: "/imagenes/carousel7.jpg",
    title: "Exploración de Naufragios",
    description: "Descubrí fascinantes pecios históricos y su ecosistema único"
  },
  {
    id: 2,
    image: "/imagenes/carousel2.jpg",
    title: "Buceo Técnico Profesional",
    description: "Cursos avanzados para explorar límites submarinos con seguridad"
  },
  {
    id: 3,
    image: "imagenes/coral.jpg",
    title: "Biodiversidad Submarina",
    description: "Maravillate con los coloridos ecosistemas de arrecifes"
  },
  {
    id: 4,
    image: "/imagenes/carousel4.jpg",
    title: "Encuentros con Gigantes",
    description: "Viví la emoción de nadar con el majestuoso tiburón ballena"
  }
];

export default function DivingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % divingImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + divingImages.length) % divingImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % divingImages.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-ocean-dark">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={divingImages[currentIndex].id}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? '100%' : '-100%' }}
          animate={{ opacity: 1, x: '0%' }}
          exit={{ opacity: 0, x: direction > 0 ? '-100%' : '100%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${divingImages[currentIndex].image})`,
              backgroundPosition: 'center 30%'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/80 to-black/10 flex items-center justify-center">
              <div className="text-center text-white max-w-2xl px-4">
                <motion.h3 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold mb-3 text-ocean-light drop-shadow-lg"
                >
                  {divingImages[currentIndex].title}
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-lg md:text-xl font-medium max-w-lg mx-auto text-gray-100"
                >
                  {divingImages[currentIndex].description}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controles de navegación */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-ocean/10 hover:bg-white/10 p-3 rounded-full z-10 transition-all shadow-lg hover:shadow-xl"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={20} className="text-white/20" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-ocean/10 hover:bg-white/10 p-3 rounded-full z-10 transition-all shadow-lg hover:shadow-xl"
        aria-label="Slide siguiente"
      >
        <ChevronRight size={20} className="text-white/30" />
      </button>

    </section>
  );
}