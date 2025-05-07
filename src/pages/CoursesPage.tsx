
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const allCourses = [
  {
    id: "open-water-diver",
    title: "Open Water Diver",
    description: "Curso inicial para comenzar tu aventura de buceo. Aprende las habilidades básicas del buceo.",
    duration: "4-5 días",
    level: "Principiante",
    image: "/imagenes/open.avif"
  },
  {
    id: "advanced-diver",
    title: "Advanced Diver",
    description: "Perfecciona tus habilidades y gana experiencia con 5 inmersiones de especialidad diferentes.",
    duration: "2-3 días",
    level: "Intermedio",
    image: "/imagenes/avanzado2.jpg"
  },
  {
    id: "rescue-diver",
    title: "Rescue Diver",
    description: "Aprende a prevenir y gestionar problemas en el agua y a realizar rescates de buceadores.",
    duration: "4 días",
    level: "Avanzado",
    image: "/imagenes/rescue.jpg"
  },
  {
    id: "master-diver",
    title: "Master Diver",
    description: "Conviértete en un buceador experto con habilidades avanzadas y un conocimiento profundo del mundo submarino.",
    duration: "5-7 días",
    level: "Experto",
    image: "/imagenes/master2.jpg"
  },
  {
    id: "nitrox",
    title: "Nitrox",
    description: "Aprende a bucear con mezclas enriquecidas de aire para prolongar tus tiempos de fondo y reducir la fatiga.",
    duration: "2 días",
    level: "Intermedio",
    image: "/imagenes/nitrox.jpg"
  },
  {
    id: "dive-master",
    title: "Dive Master",
    description: "El primer paso hacia la profesionalización en el buceo. Aprende a guiar buceadores y asistir en cursos.",
    duration: "4-6 semanas",
    level: "Profesional",
    image: "/imagenes/dive-master.jpg"
  },
  {
    id: "intro-to-tech",
    title: "Intro to Tech",
    description: "Introducción al buceo técnico, aprendiendo configuraciones avanzadas y técnicas para inmersiones más exigentes.",
    duration: "3-4 días",
    level: "Avanzado",
    image: "/imagenes/tech.jpg"
  },
  {
    id: "primeros-auxilios",
    title: "Primeros Auxilios",
    description: "Curso esencial para aprender a responder ante emergencias médicas en entornos acuáticos y terrestres.",
    duration: "2 días",
    level: "Todos los niveles",
    image: "/imagenes/auxilios.avif"
  }
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen relative">
      <Navbar />

      {/* Imagen de fondo con superposición azul */}
      <div
        className="absolute top-0 left-0 w-full h-[400px] z-0"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=1000")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full bg-ocean-dark opacity-40"></div>
      </div>

      {/* Contenido sobre el fondo */}
      <div className="relative z-10 pt-32 pb-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Cursos de Buceo</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Desde tus primeras experiencias bajo el agua hasta convertirte en un buceador profesional,
            tenemos el curso perfecto para cada etapa de tu aventura submarina.
          </p>
        </div>
      </div>

      {/* Cards de cursos */}
      <div className="py-16 bg-gray-50 relative z-10 px-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"> {/* Cambié la cantidad de columnas */}
            {allCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 transform duration-300"> {/* Aumenté el padding y ajusté el hover */}
                <div className="h-56 overflow-hidden"> {/* Aumenté el tamaño de la imagen */}
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{course.title}</CardTitle> {/* Título más grande */}
                  <CardDescription>
                    <span className="inline-block bg-ocean-50 text-ocean-dark text-xs px-2 py-1 rounded mr-2">
                      {course.duration}
                    </span>
                    <span className="inline-block bg-ocean-50 text-ocean-dark text-xs px-2 py-1 rounded">
                      {course.level}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm line-clamp-3">{course.description}</p>
                </CardContent>
                <CardFooter>
                  <Link to={`/cursos/${course.id}`} className="w-full">
                    <Button className="bg-ocean hover:bg-ocean-dark w-full py-3"> {/* Aumenté el tamaño del botón */}
                      Ver Detalles
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
