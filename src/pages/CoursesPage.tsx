
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const allCourses = [
  {
    id: "open-water-diver",
    title: "Open Water Diver",
    description: "Curso inicial para comenzar tu aventura de buceo. Aprende las habilidades básicas para sumergirte hasta 18 metros.",
    duration: "4-5 días",
    level: "Principiante",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "advanced-diver",
    title: "Advanced Diver",
    description: "Perfecciona tus habilidades y gana experiencia con 5 inmersiones de especialidad diferentes.",
    duration: "2-3 días",
    level: "Intermedio",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "rescue-diver",
    title: "Rescue Diver",
    description: "Aprende a prevenir y gestionar problemas en el agua y a realizar rescates de buceadores.",
    duration: "4 días",
    level: "Avanzado",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "master-diver",
    title: "Master Diver",
    description: "Conviértete en un buceador experto con habilidades avanzadas y un conocimiento profundo del mundo submarino.",
    duration: "5-7 días",
    level: "Experto",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "nitrox",
    title: "Nitrox",
    description: "Aprende a bucear con mezclas enriquecidas de aire para prolongar tus tiempos de fondo y reducir la fatiga.",
    duration: "2 días",
    level: "Intermedio",
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "dive-master",
    title: "Dive Master",
    description: "El primer paso hacia la profesionalización en el buceo. Aprende a guiar buceadores y asistir en cursos.",
    duration: "4-6 semanas",
    level: "Profesional",
    image: "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "intro-to-tech",
    title: "Intro to Tech",
    description: "Introducción al buceo técnico, aprendiendo configuraciones avanzadas y técnicas para inmersiones más exigentes.",
    duration: "3-4 días",
    level: "Avanzado",
    image: "https://images.unsplash.com/photo-1544551763-92ab472cad5d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "primeros-auxilios",
    title: "Primeros Auxilios",
    description: "Curso esencial para aprender a responder ante emergencias médicas en entornos acuáticos y terrestres.",
    duration: "2 días",
    level: "Todos los niveles",
    image: "https://images.unsplash.com/photo-1694151425826-db0e185368dd?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        <div className="w-full h-full bg-ocean-dark opacity-30"></div>
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
      <div className="py-16 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
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
                  <p className="text-gray-600 line-clamp-3">{course.description}</p>
                </CardContent>
                <CardFooter>
                  <Link to={`/cursos/${course.id}`} className="w-full">
                    <Button className="bg-ocean hover:bg-ocean-dark w-full">Ver Detalles</Button>
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
