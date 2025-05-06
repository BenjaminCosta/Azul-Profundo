import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NauiSection() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Encabezado con imagen de fondo estándar */}
      <section className="pt-32 pb-20 relative text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=1000')",
          }}
        >
          <div className="w-full h-full bg-ocean-dark opacity-30"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Somos parte de la Asociación NAUI
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            En Azul Profundo certificamos a nuestros alumnos con los estándares internacionales de NAUI, una de las organizaciones de buceo más reconocidas del mundo.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="bg-gradient-to-b from-blue-100 to-white py-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-gray-800 space-y-6 text-lg leading-relaxed">
            <p>
              NAUI (National Association of Underwater Instructors) es una organización sin fines de lucro con más de 60 años de trayectoria, dedicada a la formación de buzos con los más altos estándares de seguridad y profesionalismo.
            </p>

            <p>
              Desde cursos básicos hasta niveles profesionales, NAUI garantiza una enseñanza completa que combina teoría, práctica y respeto por el entorno marino. Ser buzo NAUI es sinónimo de calidad, responsabilidad y pasión por el mundo submarino.
            </p>

            <p>
              Como centro afiliado, en Azul Profundo adoptamos su enfoque personalizado y su compromiso con la excelencia para que vivas una experiencia única en cada inmersión.
            </p>

            <p>
              Obtené tu certificación internacional con nosotros y abrí las puertas a nuevas aventuras, viajes de buceo por el mundo y oportunidades laborales en centros de buceo reconocidos.
            </p>

            <div className="mt-12 flex justify-center">
              <img
                src="/imagenes/naui2.jpg"
                alt="NAUI Diving"
                className="rounded-xl shadow-xl max-w-3xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
