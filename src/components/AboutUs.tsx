
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sobre Nosotros</h2>
          <div className="w-20 h-1 bg-ocean mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Tu aventura submarina comienza aquí</h3>
            <p className="text-gray-600 mb-4">
              Azul Profundo es una escuela de buceo dedicada a formar buceadores responsables y apasionados. Con más de 10 años de experiencia, nuestro equipo de instructores certificados te guiará en cada paso de tu aventura submarina.
            </p>
            <p className="text-gray-600 mb-6">
              Ofrecemos cursos para todos los niveles, desde principiantes hasta profesionales, utilizando equipos de última generación y siguiendo los más altos estándares de seguridad.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-ocean-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800">+1000</h4>
                <p className="text-gray-600">Alumnos certificados</p>
              </div>
              <div className="bg-ocean-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800">+500</h4>
                <p className="text-gray-600">Inmersiones guiadas</p>
              </div>
              <div className="bg-ocean-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800">+10</h4>
                <p className="text-gray-600">Años de experiencia</p>
              </div>
              <div className="bg-ocean-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800">+20</h4>
                <p className="text-gray-600">Destinos visitados</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="" 
                alt="Instructor de buceo" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-sand rounded-lg -z-10"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-ocean-50 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Nuestro Equipo</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Instructor 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256" 
                  alt="Eduardo Cosentino" 
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-800">Eduardo Cosentino</h4>
                  <p className="text-ocean font-medium mb-3">Director General</p>
                  <p className="text-gray-600 italic">
                    "La fascinación con la serie Caza Submarina y las historias del Comandante Cousteau hicieron que me apasionara por el buceo, formando parte esencial en mi vida."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Instructor 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256" 
                  alt="Juan Cosentino" 
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-800">Juan Cosentino</h4>
                  <p className="text-ocean font-medium mb-3">Coordinador de Cursos</p>
                  <p className="text-gray-600 italic">
                    "Descubrí esta actividad gracias a mi padre, quien me inculcó la dedicación y el amor por el buceo prácticamente desde mi niñez."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
