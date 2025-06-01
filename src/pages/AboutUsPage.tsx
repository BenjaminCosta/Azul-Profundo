import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  GraduationCap,  // Para "Excelencia en Formación"
  ShieldCheck,    // Para "Equipo de Calidad"
  MapPin,         // Para "Experiencias Únicas"
  // ... otros iconos que ya tengas importados
} from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section Mejorada */}
      <section className="pt-44 pb-24 relative text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/imagenes/hero2.jpg')",
          }}
        >
          <div className="w-full h-full bg bg-gradient-to-t from-ocean-dark/30 to-cyan-200/30"></div>
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
              <h2 className="text-3xl font-bold text-ocean mb-4">Sobre Nosotros</h2>
              <div className="w-20 h-1 bg-ocean mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
                En nuestro <strong>centro de buceo</strong>, te invitamos a descubrir el <strong>mundo submarino</strong> de manera segura y llena de aventura. Con un enfoque <strong>cercano y profesional</strong>, nuestros <strong>cursos personalizados</strong> te acompañarán en cada paso para que te conviertas en un <strong>buzo confiado</strong> y disfrutes al máximo cada inmersión.
                <br /><br />
                Contamos con un <strong>equipo de instructores apasionados</strong> y con <strong>amplia experiencia</strong> para guiarte y compartir con vos <strong>experiencias increíbles</strong> bajo el agua. ¡Prepárate para vivir <strong>momentos inolvidables</strong> y convertirte en un verdadero <strong>explorador acuático</strong>!
              </p>
              <img 
                src="/imagenes/nosotros4.jpg" 
                alt="Historia de Azul Profundo" 
                className="rounded-xl shadow-lg w-full h-auto border-4 border-white"
              />
            </div>

           
          </div>

           {/* Métricas destacadas */}
           <div className="bg-ocean-50 rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">En Números</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "1000+", label: "Alumnos certificados", desc: "Desde principiantes hasta divemaster" },
                  { value: "500+", label: "Inmersiones guiadas", desc: "En los mejores destinos del mundo" },
                  { value: "30+", label: "Años de experiencia", desc: "Formando buceadores desde 1991" },
                  { value: "20+", label: "Destinos explorados", desc: "Alrededor del mundo" },
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-4">
                    <p className="text-4xl font-bold text-ocean mb-2">{item.value}</p>
                    <h4 className="font-semibold text-gray-800 mb-1">{item.label}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
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
                className="rounded-xl shadow-lg w-full h-auto border-4 border-white"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Enseñanza Personalizada</h3>
                <p className="text-gray-600 mb-6">
                  En Azul Profundo creemos que cada alumno es único. Nuestros <strong>cursos personalizados</strong> se adaptan a tus necesidades, ritmo de aprendizaje y disponibilidad horaria.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">Seguridad Primero</h3>
                <p className="text-gray-600 mb-6">
                  Mantenemos los más altos <strong>estándares de seguridad</strong> en cada curso y salida de buceo.inculcando a nuestros alumnos a priorizar siempre la seguridad en sus inmersiones. Nuestro equipo de profesionales está certificado en primeros auxilios y asistencia en el agua.
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
              {/* Eduardo Cosentino */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <img
                      src="/imagenes/edu2.avif"
                      alt="Eduardo Cosentino"
                      className="w-44 h-44 rounded-full object-cover mx-auto sm:mx-0 border-4 border-ocean-100 shadow-md"
                    />
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-bold text-gray-800">Eduardo Cosentino</h3>
                      <p className="text-ocean font-medium mb-3">Director General</p>
                      <p className="text-gray-600 text-sm mb-4">Fundador del Centro de Buceo Azul Profundo con más de 40 años de experiencia en buceo.</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-3">Credenciales:</h4>
                    <ul className="text-sm text-gray-600 space-y-2 columns-2">
                      <li>Instructor NAUI</li>
                      <li>Instructor FAAS-CMAS</li>
                      <li>Instructor de Nitrox</li>
                      <li>Buzo 2° categoría PNA</li>
                      <li>Buzo Intro to Tec NAUI</li>
                      <li>Buzo Técnicas Descompresivas</li>
                      <li>Buzo Trimix NAUI</li>
                      <li>Primeros auxilios DAN</li>
                      <li>Proveedor de Oxígeno DAN</li>
                      <li>Especialista en Vida Marina</li>
                      <li>Medicina Hiperbárica</li>
                      <li>Arqueología Subacuática</li>
                      <li>Timonel de yate</li>
                    </ul>
                  </div>
                </div>
              </div>
              

              {/* Juan Cosentino */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <img
                      src="/imagenes/juan2.avif"
                      alt="Juan Cosentino"
                      className="w-44 h-44 rounded-full object-cover mx-auto sm:mx-0 border-4 border-ocean-100 shadow-md"
                    />
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-bold text-gray-800">Juan Cosentino</h3>
                      <p className="text-ocean font-medium mb-3">Coordinador de Cursos</p>
                      <p className="text-gray-600 text-sm mb-4">Apasionado por la docencia y el buceo desde los 12 años.</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-3">Credenciales:</h4>
                    <ul className="text-sm text-gray-600 space-y-2 columns-2">
                      <li>Instructor Técnico NAUI</li>
                      <li>Instructor Recreativo NAUI</li>
                      <li>Instructor FAAS-CMAS</li>
                      <li>Instructor SSI/SN.SI</li>
                      <li>Instructor de Nitrox</li>
                      <li>Instructor Stress & Rescate</li>
                      <li>Instructor Primeros Auxilios</li>
                      <li>Instructor Proveedor Oxígeno</li>
                      <li>Buzo Técnicas Descompresivas</li>
                      <li>Buzo Trimix NAUI</li>
                      <li>Buzo Rebreather Prism II</li>
                      <li>Medicina Hiperbárica</li>
                      <li>Arqueología Subacuática</li>
                      <li>Timonel de yate</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          


          {/* Sección Compromiso - Versión Final */}
<div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200">
  <div className="flex flex-col lg:flex-row h-full">
    {/* Contenido de texto - Izquierda */}
    <div className="w-full lg:w-1/2 p-10 lg:p-12 flex flex-col justify-center">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-ocean-dark mb-4 relative pb-3">
          Nuestro Compromiso
          <span className="absolute bottom-0 left-0 w-24 h-[3px] bg-ocean-light rounded-full"></span>
        </h2>
        <p className="text-gray-700">Lo que nos diferencia y nos impulsa cada día</p>
      </div>
      
      <div className="space-y-6">
        {[
          {
            title: "Excelencia en Formación",
            content: "Programas educativos actualizados con los últimos estándares internacionales.",
            icon: <GraduationCap className="h-6 w-6" />
          },
          {
            title: "Equipo de Calidad",
            content: "Utilizamos equipos de primera línea, mantenidos con los más altos estándares.",
            icon: <ShieldCheck className="h-6 w-6" />
          },
          {
            title: "Experiencias Únicas",
            content: "Viajes y expediciones a los mejores destinos de buceo del mundo.",
            icon: <MapPin className="h-6 w-6" />
          }
        ].map((item, idx) => (
          <div 
            key={idx} 
            className="flex items-start p-4 hover:bg-ocean-light/5 rounded-lg transition-colors"
          >
            <div className="bg-ocean-light/10 p-2.5 rounded-lg mr-4 text-ocean-dark">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1.5">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Imagen - Derecha */}
    <div className="w-full lg:w-1/2 h-64 lg:h-auto flex">
      <img 
        src="/imagenes/compromiso.jpg" 
        alt="Nuestro compromiso con el buceo"
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
    </div>
  </div>
</div>
        </div>
      </section>

      <Footer />
    </div>
  );
}