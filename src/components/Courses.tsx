
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "open-water-diver",
    title: "Curso Open Water Diver",
    description: "Curso inicial para comenzar tu aventura de buceo. Aprende las habilidades básicas para sumergirte hasta 18 metros.",
    duration: "4-5 días",
    level: "Principiante",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "advanced-diver",
    title: "Curso Advanced Open Water",
    description: "Perfecciona tus habilidades y gana experiencia con 5 inmersiones de especialidad diferentes.",
    duration: "2-3 días",
    level: "Intermedio",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "rescue-diver",
    title: "Curso Rescue Diver",
    description: "Aprende a prevenir y gestionar problemas en el agua y a realizar rescates de buceadores.",
    duration: "4 días",
    level: "Avanzado",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Courses() {
  return (
    <section id="cursos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestros Cursos</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una variedad de cursos para todos los niveles. Desde tu primera experiencia bajo el agua hasta convertirte en un buceador profesional.
          </p>
          <div className="w-20 h-1 bg-ocean mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg">
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
                <p className="text-gray-600">{course.description}</p>
              </CardContent>
              <CardFooter>
                <Link to={`/cursos/${course.id}`} className="w-full">
                  <Button className="bg-ocean hover:bg-ocean-dark w-full">Más Información</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/cursos">
            <Button variant="outline" className="border-ocean text-ocean hover:bg-ocean hover:text-white">
              Ver todos los cursos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
