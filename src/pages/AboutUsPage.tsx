
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20 bg-gradient-to-b from-ocean-dark to-ocean">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conoce al equipo detrás de Azul Profundo, una escuela de buceo dedicada a formar buceadores responsables y apasionados.
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-12 text-lg">
              Azul Profundo es una escuela de buceo dedicada a formar buceadores responsables y apasionados. Con más de 10 años de experiencia, nuestro equipo de instructores certificados te guiará en cada paso de tu aventura submarina.
              Ofrecemos cursos para todos los niveles, desde principiantes hasta profesionales, utilizando equipos de última generación y siguiendo los más altos estándares de seguridad.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
              <div className="bg-ocean-50 p-6 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-gray-800">+1000</h4>
                <p className="text-gray-600">Alumnos certificados</p>
              </div>
              <div className="bg-ocean-50 p-6 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-gray-800">+500</h4>
                <p className="text-gray-600">Inmersiones guiadas</p>
              </div>
              <div className="bg-ocean-50 p-6 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-gray-800">+10</h4>
                <p className="text-gray-600">Años de experiencia</p>
              </div>
              <div className="bg-ocean-50 p-6 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-gray-800">+20</h4>
                <p className="text-gray-600">Destinos visitados</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nuestro Equipo</h2>
            
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

            <div className="mt-12 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h3>
              <p className="text-gray-600 mb-4">
                En Azul Profundo nos dedicamos a compartir nuestra pasión por el mundo submarino, formando buceadores conscientes, seguros y respetuosos del entorno marino.
              </p>
              <p className="text-gray-600">
                Creemos que el buceo es mucho más que un deporte, es una forma de conectar con la naturaleza y descubrir un universo completamente nuevo que merece ser protegido y respetado.
              </p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
