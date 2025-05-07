import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=1000')",
          }}
        >
          <div className="w-full h-full bg-ocean-dark opacity-40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conoce al equipo detrás de Azul Profundo, una escuela de buceo dedicada a formar buceadores responsables y apasionados.
          </p>
        </div>
      </section>

      {/* Descripción */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Historia</h2>
          <p className="text-gray-600 text-lg mb-8">
            <strong>Con una trayectoria de más de 30 años formando buzos</strong>, nos caracterizamos por nuestro profesionalismo y calidez en la enseñanza de esta hermosa actividad.
            El objetivo de nuestros <strong>cursos personalizados</strong> es que te conviertas y sigas evolucionando como buzo seguro que se divierte bajo el agua.
            Con nosotros encontrarás profesionales altamente capacitados con una vocación clara por enseñar a bucear y disfrutar de experiencias hermosas bajo el agua.
          </p>

          {/* Métricas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { value: "+1000", label: "Alumnos certificados" },
              { value: "+500", label: "Inmersiones guiadas" },
              { value: "+30", label: "Años de experiencia" },
              { value: "+20", label: "Destinos visitados" },
            ].map((item, idx) => (
              <div key={idx} className="bg-ocean-50 p-6 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-gray-800">{item.value}</h4>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Equipo */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {[
              {
                name: "Eduardo Cosentino",
                role: "Director General",
                img: "/imagenes/edu.avif",
                quote:
                  "La fascinación con la serie Caza submarina y las historias del Comandante Cousteau hicieron que me apasionara por el buceo formando parte esencial en mi vida",
              },
              {
                name: "Juan Cosentino",
                role: "Coordinador de Cursos",
                img: "/imagenes/juan.jpg",
                quote:
                  "Descubrí esta actividad gracias a mi padre, quien me inculcó la dedicación y el amor por el buceo prácticamente desde mi niñez",
              },
            ].map((person, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{person.name}</h4>
                      <p className="text-ocean font-medium mb-3">{person.role}</p>
                      <p className="text-gray-600 italic">"{person.quote}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cursos */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestros Cursos</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <img
              src="/GOPR3470-01.jpeg"
              alt="Cursos de buceo"
              className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
            />
            <p className="text-gray-600 text-lg">
              Nuestra gran cantidad de cursos que ofrecemos se caracterizan por el <strong>profesionalismo</strong> y la <strong>pasión</strong> con la que hacemos esta actividad.
              Actualmente nos enfocamos en <strong>cursos personalizados</strong> donde el ritmo de las clases y la disponibilidad horaria lo decide el alumno.
            </p>
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

      <Footer />
    </div>
  );
}
