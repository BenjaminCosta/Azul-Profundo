import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[105vh] overflow-hidden">
      <div
        className="absolute inset-0 md:bg-fixed bg-hero-pattern bg-cover bg-center"
        style={{ backgroundImage: "url('/imagenes/tiburon.jpeg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Explora los mares con <span className="text-ocean-light">expertos en buceo</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
            Descubrí un nuevo mundo bajo el agua con instructores profesionales y apasionados.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/cursos" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-ocean hover:bg-ocean-dark text-white font-bold py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg shadow-lg transition-transform transform-gpu hover:scale-105 active:scale-95">
                Nuestros Cursos
              </Button>
            </Link>
            <Link to="/contacto" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-ocean font-bold py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg shadow-lg transition-transform transform-gpu hover:scale-105 active:scale-95"
              >
                Contáctanos
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Galería de imágenes - Solo visible en lg y arriba */}
      <div className="hidden lg:block absolute right-4 lg:right-8 top-1/3 z-10 w-1/4 max-w-xs">
        <div className="relative h-64">
          {/* Imagen 1 */}
          <div className="absolute right-0 -top-8 xl:right-0 xl:-top-20 w-32 h-40 xl:w-56 xl:h-80 rounded-lg overflow-hidden border-4 border-white shadow-xl transform-gpu transition-transform hover:scale-105">
            <img src="/imagenes/barco.jpeg" alt="Buceo 1" className="w-full h-full object-cover" loading="lazy" />
          </div>
          {/* Imagen 2 */}
          <div className="absolute right-32 top-4 xl:right-44 xl:top-0 w-44 h-24 xl:w-80 xl:h-44 rounded-lg overflow-hidden border-4 border-white shadow-xl transform-gpu transition-transform hover:scale-105">
            <img src="/imagenes/foca.jpg" alt="Buceo 2" className="w-full h-full object-cover" loading="lazy" />
          </div>
          {/* Imagen 3 */}
          <div className="absolute right-16 top-32 xl:right-24 xl:top-40 w-28 h-32 xl:w-56 xl:h-52 rounded-lg overflow-hidden border-4 border-white shadow-xl -rotate-3 transform-gpu transition-transform hover:scale-105">
            <img src="/imagenes/carousel9.jpg" alt="Buceo 3" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}