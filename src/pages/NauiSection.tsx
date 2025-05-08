import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NauiSection() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/imagenes/hero2.avif')",
          }}
        >
          <div className="w-full h-full bg-ocean-dark opacity-40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-white">
              Somos Centro Certificador NAUI
            </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            En Azul Profundo certificamos con los <strong>estándares internacionales</strong> de NAUI, 
            una de las organizaciones de buceo más <strong>prestigiosas del mundo</strong>.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="bg-white py-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-gray-800 space-y-8 text-lg leading-relaxed">
            {/* Sección Sobre NAUI con imagen a la derecha */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-ocean border-b-2 border-ocean pb-2">
                  Sobre NAUI
                </h2>
                <div className="space-y-4">
                  <p>
                    <strong>NAUI (National Association of Underwater Instructors)</strong> es una organización 
                    sin fines de lucro con más de <strong>60 años de trayectoria</strong>, dedicada a la formación 
                    de buzos con los más altos estándares de <strong>seguridad y profesionalismo</strong>.
                  </p>
                  <p>
                    Desde cursos básicos hasta niveles profesionales, NAUI garantiza una enseñanza completa 
                    que combina teoría, práctica y respeto por el entorno marino. Ser buzo NAUI es sinónimo 
                    de <strong>calidad, responsabilidad y pasión</strong> por el mundo submarino.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/imagenes/avanzado.jpg"
                  alt="Buzo NAUI"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Texto continuado */}
            <div className="space-y-6 mt-10">
              <h2 className="text-3xl font-bold mb-4 text-ocean border-b-2 border-ocean pb-2">
                Reconocimiento Global
              </h2>
              <p>
                En más de <strong>100 países</strong>, NAUI forma parte de la comunidad global de buceo con 
                certificaciones ampliamente reconocidas. Sus manuales, metodologías y materiales 
                de estudio son actualizados constantemente para reflejar las <strong>mejores prácticas</strong> 
                y avances en el sector.
              </p>
              
              <p>
                Como centro afiliado, en Azul Profundo adoptamos su enfoque personalizado y su 
                compromiso con la excelencia para que vivas una <strong>experiencia única</strong> en cada 
                inmersión. Nuestro equipo de instructores certificados NAUI te acompaña paso a 
                paso, cuidando cada detalle de tu aprendizaje.
              </p>
            </div>

            {/* Beneficios */}
            <div className="mt-12 bg-ocean-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-ocean border-b-2 border-ocean pb-2">
                Ventajas de Certificarte con NAUI
              </h2>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <span className="text-ocean mr-2 font-bold">✓</span>
                  <span><strong>Certificación internacional</strong> reconocida mundialmente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ocean mr-2 font-bold">✓</span>
                  <span><strong>Estándares de seguridad</strong> de primer nivel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ocean mr-2 font-bold">✓</span>
                  <span>Formación en <strong>conservación marina</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-ocean mr-2 font-bold">✓</span>
                  <span>Acceso a <strong>red global</strong> de centros de buceo</span>
                </li>
              </ul>
            </div>

            {/* Imagen naui4.jpg al final */}
            <div className="flex justify-center mt-12 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/imagenes/naui4.jpg"
                alt="Certificación NAUI"
                className="w-3x1 h-auto object-cover"
              />
            </div>

            {/* Cierre */}
            <div className="mt-12 text-center">
              <h2 className="text-3xl font-bold mb-6 text-ocean border-b-2 border-ocean pb-2 inline-block">
                Tu Aventura Submarina Comienza Aquí
              </h2>
              <p className="text-xl mt-6">
                Obtené tu certificación internacional con nosotros y abrí las puertas a nuevas 
                aventuras, viajes de buceo por el mundo y oportunidades laborales en centros 
                de buceo reconocidos.
              </p>
              <p className="text-xl mt-4 font-medium text-ocean">
                Ya sea que busques bucear por placer o construir una carrera en el mundo submarino, 
                <strong> NAUI y Azul Profundo son tu mejor elección</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}