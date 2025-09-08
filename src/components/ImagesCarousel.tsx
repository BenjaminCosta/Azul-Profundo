import { useState, useEffect } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence, useReducedMotion } from "framer-motion";

const divingImages = [
  {
    id: 1,
    image: "/imagenes/carousel7.jpg",
    title: "Exploración de Naufragios",
    description: "Descubrí fascinantes pecios históricos y su ecosistema único"
  },
  {
    id: 2,
    image: "/imagenes/carousel10.jpg",
    title: "Buceo Técnico",
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
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsAutoPlaying(false);
    }
  }, [shouldReduceMotion]);

  useEffect(() => {
    let interval;
    if (isAutoPlaying && !shouldReduceMotion) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % divingImages.length);
      }, 7000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) return;
    let percent = 0;
    const progressInterval = setInterval(() => {
      percent += 1.43;
      if (percent > 100) percent = 0;
      setProgress(percent);
    }, 100);
    return () => clearInterval(progressInterval);
  }, [currentIndex, shouldReduceMotion]);

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative w-full h-[80vh] overflow-hidden bg-black font-display">
        <AnimatePresence mode="wait">
          <m.div
            key={divingImages[currentIndex].id}
            initial={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: shouldReduceMotion ? { duration: 0 } : { duration: 1, ease: "easeInOut" }
            }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -40, scale: 0.95 }}
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
                  <m.h3
                    initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: shouldReduceMotion ? { duration: 0 } : { delay: 1, duration: 0.6 } }}
                    className="text-3xl md:text-5xl font-bold mb-4 text-ocean-light drop-shadow-[0_10px_14px_rgba(0,0,0,0.9)]"
                  >
                    {divingImages[currentIndex].title}
                  </m.h3>
                  <m.p
                    initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: shouldReduceMotion ? { duration: 0 } : { delay: 2, duration: 0.6 } }}
                    className="text-lg md:text-xl max-w-xl mx-auto text-gray-100 drop-shadow-[0_6x_8px_rgba(0,0,0,0.6)]"
                  >
                    {divingImages[currentIndex].description}
                  </m.p>
                </div>
              </div>
            </div>
          </m.div>
        </AnimatePresence>

      </section>
    </LazyMotion>
  );
}
