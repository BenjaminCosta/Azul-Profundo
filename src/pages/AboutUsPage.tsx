import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section Mejorada */}
      <section className="pt-32 pb-24 relative text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=1000')",
          }}
        >
          <div className="w-full h-full bg-ocean-dark/40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Conoce Azul Profundo
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium drop-shadow-md">
            Más de 30 años formando buceadores responsables y apasionados por el mundo submarino
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Nuestra Historia */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ocean mb-4">Nuestra Historia</h2>
              <div className="w-20 h-1 bg-ocean mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-gray-600 text-lg mb-6">
                  Fundada en 1992, <strong>Azul Profundo</strong> nació del sueño de compartir la pasión por el buceo con el mundo. Lo que comenzó como un pequeño centro de buceo en la costa argentina, hoy se ha convertido en una de las escuelas más reconocidas del país.
                </p>
                <p className="text-gray-600 text-lg">
                  Durante más de <strong>tres décadas</strong>, hemos formado a miles de buceadores, siempre manteniendo nuestros valores fundamentales: <strong>seguridad, profesionalismo y respeto</strong> por el medio ambiente marino.
                </p>
              </div>
              <img 
                src="/imagenes/nosotros2.avif" 
                alt="Historia de Azul Profundo" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>

            {/* Métricas destacadas */}
            <div className="bg-ocean-50 rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">En Números</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "1000+", label: "Alumnos certificados", desc: "Desde principiantes hasta instructores" },
                  { value: "500+", label: "Inmersiones guiadas", desc: "En los mejores destinos del mundo" },
                  { value: "30+", label: "Años de experiencia", desc: "Formando buceadores desde 1992" },
                  { value: "20+", label: "Destinos explorados", desc: "De Caribe a Polinesia" },
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-4">
                    <p className="text-4xl font-bold text-ocean mb-2">{item.value}</p>
                    <h4 className="font-semibold text-gray-800 mb-1">{item.label}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Nuestro Equipo */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ocean mb-4">Nuestro Equipo</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Conoce a los profesionales que hacen de Azul Profundo una experiencia única
              </p>
              <div className="w-20 h-1 bg-ocean mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Eduardo Cosentino",
                  role: "Director General",
                  img: "/imagenes/edu.avif",
                  bio: "Instructor Trainer con más de 30 años de experiencia. Especialista en buceo técnico y exploración.",
                  quote: "La fascinación con la serie Caza submarina y las historias del Comandante Cousteau hicieron que me apasionara por el buceo formando parte esencial en mi vida",
                },
                {
                  name: "Juan Cosentino",
                  role: "Coordinador de Cursos",
                  img: "/imagenes/juan.jpg",
                  bio: "Instructor NAUI con más de 30 años formando buceadores. Especialista en fotografía submarina.",
                  quote: "Descubrí esta actividad gracias a mi padre, quien me inculcó la dedicación y el amor por el buceo prácticamente desde mi niñez",
                },
              ].map((person, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <img
                        src={person.img}
                        alt={person.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto sm:mx-0"
                      />
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl font-bold text-gray-800">{person.name}</h3>
                        <p className="text-ocean font-medium mb-3">{person.role}</p>
                        <p className="text-gray-600 text-sm mb-4">{person.bio}</p>
                        <p className="text-gray-500 italic">"{person.quote}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nuestra Filosofía */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ocean mb-4">Nuestra Filosofía</h2>
              <div className="w-20 h-1 bg-ocean mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src="/imagenes/nosotros3.jpg"
                alt="Filosofía Azul Profundo"
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Enseñanza Personalizada</h3>
                <p className="text-gray-600 mb-6">
                  En Azul Profundo creemos que cada alumno es único. Nuestros <strong>cursos personalizados</strong> se adaptan a tus necesidades, ritmo de aprendizaje y disponibilidad horaria.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">Seguridad Primero</h3>
                <p className="text-gray-600 mb-6">
                  Mantenemos los más altos <strong>estándares de seguridad</strong> en cada curso y salida de buceo. Nuestro equipo está certificado en primeros auxilios y rescate acuático.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">Conservación Marina</h3>
                <p className="text-gray-600 mb-6">
                  Promovemos el <strong>buceo responsable</strong> y participamos activamente en proyectos de conservación de los ecosistemas marinos.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">Comunidad Azul</h3>
                <p className="text-gray-600 mb-6">
                  Formamos una <strong>comunidad apasionada por el mar</strong>. Organizamos encuentros, charlas y salidas para conectar con otros buzos y compartir experiencias.
                </p>

              </div>
            </div>

          </div>

          {/* Compromiso */}
          <div className="bg-ocean-50 rounded-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-ocean mb-4">Nuestro Compromiso</h2>
              <div className="w-20 h-1 bg-ocean mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Excelencia en Formación",
                  content: "Programas educativos actualizados con los últimos estándares internacionales."
                },
                {
                  title: "Equipo de Calidad",
                  content: "Utilizamos equipos de primera línea, mantenidos con los más altos estándares."
                },
                {
                  title: "Experiencias Únicas",
                  content: "Viajes y expediciones a los mejores destinos de buceo del mundo."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}