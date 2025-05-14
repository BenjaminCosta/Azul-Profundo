import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30"></div>
      <div className="absolute inset-0 bg-wave-pattern bg-repeat-x animate-wave"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <div className="max-w-2xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-float">
            Explora los mares con <span className="text-ocean-light">expertos en buceo</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Descubre un nuevo mundo bajo el agua con instructores profesionales y certificados.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/cursos">
              <Button 
                className="bg-ocean hover:bg-ocean-dark text-white font-bold py-4 px-8 text-lg"
              >
                Nuestros Cursos
              </Button>
            </Link>
            <Link to="/contacto">
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-ocean font-bold py-4 px-8 text-lg"
              >
                Contáctanos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
