import { Link } from "react-router-dom";

export default function AprendeABucear() {
  return (
    <>
      {/* Nuestro Equipo */}
      <section className="py-32 px-6 sm:px-20 text-center bg-white"
      >
        <h2 className="text-5xl font-extrabold text-ocean-dark mb-4">Nuestra Escuela</h2>

        <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-12">
          Desde hace más de 30 años en <strong className="text-gray-800">Azul Profundo</strong> formamos buceadores con pasión y compromiso.
          <span className="text-ocean-dark"> Sumergite en una experiencia única</span> de la mano de <span className="text-ocean-dark">instructores certificados</span> y viví el mundo submarino como nunca antes...
          <Link to="/nosotros">
  <p className=" text-ocean-dark  font-semibold hover:text-ocean-light transition-all duration-300">
    Leer más...
  </p>
</Link>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-6">
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
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-ocean-dark"
            >
              <div className="p-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img
                    src={instructor.img}
                    alt={instructor.name}
                    className="w-32 h-32 rounded-full object-cover ring-4 ring-ocean-dark"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-gray-800">{instructor.name}</h4>
                    <p className="text-ocean-dark font-semibold mb-2">{instructor.role}</p>
                    <p className="text-gray-800 italic">"{instructor.quote}"</p>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      
    </>
  );
}
