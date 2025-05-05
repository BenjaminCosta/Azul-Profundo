
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 bg-wave-pattern bg-repeat-x animate-wave"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <div className="max-w-2xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-float">
  Explora los mares con <span className="text-ocean-light">expertos en buceo</span>
</h1>
<p className="text-lg md:text-xl mb-8">
  Tu escuela de buceo preferida. Descubre un nuevo mundo bajo el agua con instructores profesionales y certificados.
</p>

          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-ocean hover:bg-ocean-dark text-white font-bold py-4 px-8 text-lg"
              onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Nuestros Cursos
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-ocean font-bold py-4 px-8 text-lg"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
