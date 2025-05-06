import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Encabezado con fondo de imagen y overlay azul */}
      <section className="pt-32 pb-20 relative text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=1000')", // Puedes reemplazar esta URL por tu propia imagen
          }}
          
        ><div className="w-full h-full bg-ocean-dark opacity-30"></div></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conoce al equipo detrás de Azul Profundo, una escuela de buceo dedicada a formar buceadores responsables y apasionados.
          </p>
        </div>
      </section>

      {/* Sección de descripción y métricas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Descripción de la escuela */}
          <p className="text-gray-600 mb-12 text-lg">
            Azul Profundo es una escuela de buceo con más de 10 años de experiencia, comprometida con la formación de buceadores responsables. Nuestro equipo de instructores certificados ofrece cursos para todos los niveles, con equipos modernos y altos estándares de seguridad.
          </p>

          {/* Métricas destacadas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { value: "+1000", label: "Alumnos certificados" },
              { value: "+500", label: "Inmersiones guiadas" },
              { value: "+10", label: "Años de experiencia" },
              { value: "+20", label: "Destinos visitados" },
            ].map((item, idx) => (
              <div key={idx} className="bg-ocean-50 p-6 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-gray-800">{item.value}</h4>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Título de equipo */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nuestro Equipo</h2>

          {/* Tarjetas del equipo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {[
              {
                name: "Eduardo Cosentino",
                role: "Director General",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256",
                quote: "La fascinación con la serie Caza Submarina y las historias del Comandante Cousteau hicieron que me apasionara por el buceo, formando parte esencial en mi vida.",
              },
              {
                name: "Juan Cosentino",
                role: "Coordinador de Cursos",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256",
                quote: "Descubrí esta actividad gracias a mi padre, quien me inculcó la dedicación y el amor por el buceo prácticamente desde mi niñez.",
              },
            ].map((instructor, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <img
                      src={instructor.img}
                      alt={instructor.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{instructor.name}</h4>
                      <p className="text-ocean font-medium mb-3">{instructor.role}</p>
                      <p className="text-gray-600 italic">"{instructor.quote}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Misión */}
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
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
