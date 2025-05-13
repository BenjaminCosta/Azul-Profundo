import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AprendeABucear() {
  return (
    <>
      {/* Nuestro Equipo */}
      <section className="py-24 px-6 sm:px-20 text-center bg-white">
        <h2 className="text-4xl font-extrabold text-ocean-dark mb-4">Nuestra Escuela</h2>

        <p className="text-lg text-gray-800 max-w-3xl mx-auto mb-12">
          Desde hace más de 30 años en <strong className="text-gray-800">Azul Profundo</strong> formamos buceadores con pasión y compromiso.
          <span className="text-ocean-dark"> Sumergite en una experiencia única</span> de la mano de <span className="text-ocean-dark">instructores certificados</span> y viví el mundo submarino como nunca antes...
          <Link to="/empresa">
  <p className=" text-ocean-dark  font-semibold hover:text-ocean-light transition-all duration-300">
    Leer más
  </p>
</Link>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {[
            {
              name: "Eduardo Cosentino",
              role: "Director General",
              img: "/imagenes/edu.avif",
              quote:
                "La fascinación con la serie Caza Submarina y las historias del Comandante Cousteau hicieron que me apasionara por el buceo, formando parte esencial en mi vida.",
            },
            {
              name: "Juan Cosentino",
              role: "Coordinador de Cursos",
              img: "/imagenes/juan.jpg",
              quote:
                "Descubrí esta actividad gracias a mi padre, quien me inculcó la dedicación y el amor por el buceo prácticamente desde mi niñez.",
            },
          ].map((instructor, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-ocean-dark"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img
                    src={instructor.img}
                    alt={instructor.name}
                    className="w-32 h-32 rounded-full object-cover ring-4 ring-ocean-dark"
                  />
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-gray-800">{instructor.name}</h4>
                    <p className="text-ocean-dark font-semibold mb-2">{instructor.role}</p>
                    <p className="text-gray-800 italic">"{instructor.quote}"</p>
                    
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Aprendé a Bucear */}
      <section
        id="aprende"
        className="py-24 px-6 relative text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=1000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/80 to-ocean-light/50 z-0"></div>

        <motion.div
          className="relative z-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Aprendé a Bucear</h2>
          <div className="font-medium text-lg">
            <p className="mb-4">
              En Azul Profundo formamos buceadores con pasión y compromiso. Sumergite en una experiencia única de la mano de instructores certificados y viví el mundo submarino como nunca antes.
            </p>
            <p className="mb-4">
              Cursos para todos los niveles, salidas a destinos increíbles y equipamiento profesional.
            </p>
            <p className="mb-8">
              Conectá con una comunidad de buceadores y descubrí nuevas oportunidades bajo el agua. ¡Tu aventura comienza acá!
            </p>
          </div>

          <Link to="/nosotros">
            <Button className="bg-transparent text-white font-bold py-4 px-8 text-lg border-2 border-white rounded-none hover:bg-ocean-dark hover:text-white transition-colors">
              Ver más
            </Button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
