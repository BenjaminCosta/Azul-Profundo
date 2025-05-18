import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const coursesData = [
  {
    id: "open-water-diver",
    title: "Open Water Diver",
    tagline: "Tu pasaporte al mundo submarino",
    highlight: "Certificación internacional en solo 4 días",
    description: "Aprende con instructores profesionales y descubre la magia del buceo en un entorno seguro y divertido.",
    benefits: [
      "Clases teóricas y prácticas",
      "Equipo incluido",
      "Certificación PADI/SSI",
      "Grupos reducidos"
    ],
    image: "/imagenes/open3.jpg"
  },
  {
    id: "advanced-diver",
    title: "Advanced Diver",
    tagline: "Lleva tu aventura más profunda",
    highlight: "Amplía tus límites hasta 30 metros",
    description: "Domina técnicas avanzadas y especialízate en navegación, buceo nocturno y más.",
    benefits: [
      "5 especialidades incluidas",
      "Experiencia en diferentes entornos",
      "Instructores expertos",
      "Flexibilidad horaria"
    ],
    image: "/imagenes/avanzado3.jpg"
  },
  {
    id: "rescue-diver",
    title: "Rescue Diver",
    tagline: "Conviértete en un héroe submarino",
    highlight: "El curso más transformador",
    description: "Desarrolla habilidades para prevenir y manejar situaciones de emergencia bajo el agua.",
    benefits: [
      "Técnicas de rescate reales",
      "Simulaciones prácticas",
      "Primeros auxilios incluidos",
      "Mejora tu confianza"
    ],
    image: "/imagenes/rescue.jpg"
  },
  {
    id: "all-courses",
    title: "Explora Todos Nuestros Cursos",
    tagline: "Tu viaje acuático comienza aquí",
    highlight: "Desde principiantes hasta profesionales",
    description: "Tenemos el programa perfecto para cada nivel y aspiración.",
    benefits: [
      "Cursos recreativos y profesionales",
      "Instructores certificados",
      "Salidas mensuales de buceo",
      "Modalidad intensiva y regular"
    ],
    cta: "Descubre tu próximo desafío",
    image: "/imagenes/todoscursos.avif"
  }
];

export default function CoursesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % coursesData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % coursesData.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + coursesData.length) % coursesData.length);

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Transforma tu relación con el océano</h2>
          <p className="text-lg text-ocean-dark max-w-2xl mx-auto">
          Desde tus primeras experiencias bajo el agua hasta convertirte en buceador profesional, tenemos el curso para cada etapa de tu aventura submarina.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="relative w-full">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {coursesData.map((course, index) => (
                <div key={course.id} className="min-w-full flex flex-col lg:flex-row items-stretch gap-8 px-2">
                  <div className="w-full lg:w-1/2 h-72 lg:h-auto relative overflow-hidden rounded-3xl shadow-xl">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover absolute inset-0 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-medium text-base">
                        {course.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 p-6 flex flex-col bg-white rounded-3xl shadow-xl">
                    <div className="flex-grow">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mb-3">
                        {course.id === "all-courses" ? "Todos los niveles" : "Popular"}
                      </span>

                      <h3 className="text-2xl font-bold text-gray-800 mb-1">
                        {course.title}
                      </h3>

                      <p className="text-ocean-dark font-medium text-base mb-3">
                        {course.highlight}
                      </p>

                      <p className="text-gray-600 mb-4">
                        {course.description}
                      </p>

                      {course.benefits && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Qué incluye:</h4>
                          <ul className="grid grid-cols-2 gap-2">
                            {course.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-blue-500 mr-2">✓</span>
                                <span className="text-gray-600 text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="pt-3">
                      {course.id === "all-courses" ? (
                        <Link to="/cursos">
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-5 text-base">
                            {course.cta}
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </Link>
                      ) : (
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link to={`/cursos/${course.id}`} className="flex-grow">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-5 text-base">
                              Ver detalles completos
                            </Button>
                          </Link>
                          <Link to="/contacto" className="flex-grow">
                            <Button variant="outline" className="w-full px-6 py-5 text-base border-blue-600 text-blue-600 hover:bg-blue-50">
                              Consultar disponibilidad
                            </Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
              aria-label="Curso anterior"
            >
              <ChevronLeft className="text-gray-700 h-6 w-6" />
            </button>

            <button
              onClick={nextSlide}
              className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
              aria-label="Siguiente curso"
            >
              <ChevronRight className="text-gray-700 h-6 w-6" />
            </button>
          </div>

          <div className="flex lg:hidden justify-center mt-6 gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50"
              aria-label="Curso anterior"
            >
              <ChevronLeft className="text-gray-700 h-6 w-6" />
            </button>

            <div className="flex items-center gap-1">
              {coursesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300 w-3'}`}
                  aria-label={`Ir al curso ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50"
              aria-label="Siguiente curso"
            >
              <ChevronRight className="text-gray-700 h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
