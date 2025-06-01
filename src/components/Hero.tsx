import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-hero-pattern bg-cover bg-center"
        style={{
          backgroundImage: "url('/imagenes/tiburon.jpeg')",
          y: yBg
        }}
      />
      
      <style>{`
        .text-ocean-light {
          color: #33C3F0;
        }
        .bg-ocean {
          background-color: #0EA5E9;
        }
        .hover\\:bg-ocean-dark:hover {
          background-color: #0284c7;
        }
        .bg-wave-pattern {
          background-image: linear-gradient(
            to right,
            rgba(14, 165, 233, 0.2) 0%,
            rgba(14, 165, 233, 0) 50%,
            rgba(14, 165, 233, 0.2) 100%
          );
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-wave {
          animation: wave 15s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes wave {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 0%; }
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30"></div>
      <div className="absolute inset-0 bg-wave-pattern bg-repeat-x animate-wave"></div>
      
      {/* Galería de imágenes desordenadas al lado derecho */}
      <div className="absolute right-4 md:right-8 top-1/3 z-10 w-1/4 max-w-xs hidden sm:block">
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative h-64"
        >
          {/* Imagen 1 */}
          <motion.div
            className="absolute right-0 -top-8 w-40 h-48 rounded-lg overflow-hidden border-4 border-white shadow-xl"
            whileHover={{ zIndex: 50, scale: 1.05 }}
          >
            <img 
              src="/imagenes/bg1.jpg" 
              alt="Buceo 1" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Imagen 2 */}
          <motion.div
            className="absolute right-32 top-4 w-60 h-32 rounded-lg overflow-hidden border-4 border-white shadow-xl"
            whileHover={{ zIndex: 50, scale: 1.05 }}
          >
            <img 
              src="/imagenes/foca.jpg" 
              alt="Buceo 2" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Imagen 3 */}
          <motion.div
            className="absolute right-16 top-32 w-36 h-40 rounded-lg overflow-hidden border-4 border-white shadow-xl -rotate-3"
            whileHover={{ zIndex: 50, scale: 1.05 }}
          >
            <img 
              src="/imagenes/tortuga.jpeg" 
              alt="Buceo 3" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-float">
            Explora los mares con <span className="text-ocean-light">expertos en buceo</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Descubre un nuevo mundo bajo el agua con instructores profesionales y certificados.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/cursos">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-ocean hover:bg-ocean-dark text-white font-bold py-4 px-8 text-lg shadow-lg">
                  Nuestros Cursos
                </Button>
              </motion.div>
            </Link>
            <Link to="/contacto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-ocean font-bold py-4 px-8 text-lg shadow-lg"
                >
                  Contáctanos
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}