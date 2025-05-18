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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % divingImages.length);
      }, 7000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    let percent = 0;
    const progressInterval = setInterval(() => {
      percent += 1.43;
      if (percent > 100) percent = 0;
      setProgress(percent);
    }, 100);
    return () => clearInterval(progressInterval);
  }, [currentIndex]);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-black font-display">
      <AnimatePresence mode="wait">
        <motion.div
          key={divingImages[currentIndex].id}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="w-full h-full bg-cover bg-center scale-[1.05]"
            style={{ backgroundImage: `url(${divingImages[currentIndex].image})` }}
          >
            {/* Sombra inferior realista */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            {/* Overlay + textos */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="text-center text-ocean-light max-w-2xl px-4 z-20">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="text-3xl md:text-5xl font-bold mb-4 text-ocean-light drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]"
                >
                  {divingImages[currentIndex].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.6 }}
                  className="text-lg md:text-xl max-w-xl mx-auto text-gray-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
                >
                  {divingImages[currentIndex].description}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
