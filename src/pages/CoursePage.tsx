
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const coursesData = {
  "open-water-diver": {
    title: "Open Water Diver",
    description: "El curso Open Water Diver es el punto de entrada perfecto al mundo del buceo. Diseñado para principiantes, este curso te proporcionará todas las habilidades y conocimientos necesarios para explorar el mundo submarino con seguridad hasta una profundidad de 18 metros.",
    requirements: "No se requiere experiencia previa en buceo. Debes tener al menos 10 años de edad, saber nadar y estar en buena condición física.",
    duration: "4-5 días (incluye teoría, prácticas en aguas confinadas y 4 inmersiones en aguas abiertas)",
    included: [
      "Material didáctico",
      "Uso de equipos durante el curso",
      "Certificación internacional",
      "Seguro de buceo durante el curso"
    ],
    level: "Principiante",
    price: "$450",
    image: "/imagenes/open2.avif"
  },
  "advanced-diver": {
    title: "Advanced Diver",
    description: "El curso Advanced Diver está diseñado para buceadores certificados que desean mejorar sus habilidades y ganar más experiencia. El curso incluye cinco inmersiones de especialidad, incluyendo navegación subacuática y buceo profundo, ampliando tu límite de profundidad hasta 30 metros.",
    requirements: "Certificación Open Water Diver o equivalente. Edad mínima: 12 años.",
    duration: "2-3 días (incluye 5 inmersiones de especialidad)",
    included: [
      "Material didáctico",
      "Uso de equipos durante el curso",
      "Certificación internacional",
      "Seguro de buceo durante el curso"
    ],
    level: "Intermedio",
    price: "$380",
    image: "/imagenes/avanzado2.jpg"
  },
  "rescue-diver": {
    title: "Rescue Diver",
    description: "El curso Rescue Diver te enseña a prevenir y gestionar problemas en el agua, y a realizar rescates de buceadores en dificultades. Este curso es desafiante pero extremadamente gratificante, desarrollando tus habilidades como buceador y tu confianza en el agua.",
    requirements: "Certificación Advanced Open Water Diver o equivalente. Formación en primeros auxilios y RCP en los últimos 24 meses. Edad mínima: 12 años.",
    duration: "4 días (incluye prácticas en aguas confinadas y abiertas)",
    included: [
      "Material didáctico",
      "Uso de equipos durante el curso",
      "Certificación internacional",
      "Seguro de buceo durante el curso"
    ],
    level: "Avanzado",
    price: "$420",
    image: "/imagenes/rescue.jpg"
  },
  "master-diver": {
    title: "Master Diver",
    description: "El curso Master Diver es el pináculo de la formación en buceo recreativo. Este programa comprensivo combina varias especialidades de buceo para convertirte en un buceador verdaderamente experto con habilidades versátiles y un conocimiento profundo del entorno submarino.",
    requirements: "Certificación Rescue Diver o equivalente. Al menos 5 especialidades de buceo. Mínimo 50 inmersiones registradas. Edad mínima: 16 años.",
    duration: "5-7 días (dependiendo de las especialidades elegidas)",
    included: [
      "Material didáctico",
      "Uso de equipos durante el curso",
      "Certificación internacional",
      "Seguro de buceo durante el curso"
    ],
    level: "Experto",
    price: "$650",
    image: "/imagenes/master2.jpg"
  },
  "nitrox": {
    title: "Nitrox",
    description: "El curso de Nitrox te enseña a bucear con mezclas enriquecidas de aire (hasta un 40% de oxígeno), lo que te permite prolongar tus tiempos de fondo y reducir la fatiga post-inmersión. Esta especialidad es perfecta para buceadores que realizan inmersiones múltiples o quieren mayor seguridad.",
    requirements: "Certificación Open Water Diver o equivalente. Edad mínima: 12 años.",
    duration: "2 días (incluye teoría y 2 inmersiones con Nitrox)",
    included: [
      "Material didáctico",
      "Mezclas de Nitrox para las inmersiones",
      "Certificación internacional",
      "Seguro de buceo durante el curso"
    ],
    level: "Intermedio",
    price: "$220",
    image: "/imagenes/nitrox.jpg"
  },
  "dive-master": {
    title: "Dive Master",
    description: "El programa Dive Master es tu primer paso hacia la profesionalización en el buceo. Te convertirás en un líder y adquirirás las habilidades necesarias para supervisar actividades de buceo y asistir a instructores en la formación de nuevos buceadores.",
    requirements: "Certificación Rescue Diver o equivalente. Formación en primeros auxilios y RCP en los últimos 24 meses. Mínimo 40 inmersiones registradas. Certificado médico de aptitud para buceo. Edad mínima: 18 años.",
    duration: "4-6 semanas (incluye prácticas profesionales)",
    included: [
      "Material didáctico",
      "Equipamiento profesional",
      "Certificación internacional",
      "Seguro de responsabilidad profesional durante el curso"
    ],
    level: "Profesional",
    price: "$950",
    image: "/imagenes/dive-master.jpg"
  },
  "intro-to-tech": {
    title: "Intro to Tech",
    description: "El curso de Introducción al Buceo Técnico te prepara para dar el salto desde el buceo recreativo al técnico. Aprenderás configuraciones avanzadas de equipo, técnicas de planificación de inmersiones más exigentes y procedimientos para inmersiones más largas y profundas.",
    requirements: "Certificación Advanced Open Water Diver o equivalente. Certificación Nitrox. Mínimo 25 inmersiones registradas. Buena condición física. Edad mínima: 18 años.",
    duration: "3-4 días (incluye teoría y prácticas en aguas abiertas)",
    included: [
      "Material didáctico",
      "Uso de equipos técnicos durante el curso",
      "Certificación internacional",
      "Seguro de buceo durante el curso"
    ],
    level: "Avanzado",
    price: "$580",
    image: "/imagenes/tech.jpg"
  },
  "primeros-auxilios": {
    title: "Primeros Auxilios",
    description: "Este curso esencial te proporciona los conocimientos y habilidades necesarios para responder efectivamente ante emergencias médicas tanto en entornos acuáticos como terrestres. Aprenderás técnicas de RCP, uso de DEA, manejo de lesiones y enfermedades relacionadas con el buceo.",
    requirements: "No se requiere experiencia previa. Edad mínima: 12 años.",
    duration: "2 días (teoría y prácticas)",
    included: [
      "Material didáctico",
      "Práctica con maniquíes y equipos de entrenamiento",
      "Certificación internacional válida por 2 años",
      "Kit básico de primeros auxilios"
    ],
    level: "Todos los niveles",
    price: "$180",
    image: "/imagenes/auxilios.avif"
  }
};

export default function CoursePage() {
  const { courseId } = useParams();
  const course = courseId ? coursesData[courseId as keyof typeof coursesData] : null;

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Curso no encontrado</h1>
            <p className="mb-6">Lo sentimos, el curso que buscas no está disponible.</p>
            <Link to="/cursos">
              <Button>Volver a Cursos</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 h-[400px] relative bg-ocean-dark">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover opacity-40 absolute inset-0"
        />
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center text-white">
          <Link to="/cursos" className="flex items-center text-white hover:text-gray-300 mb-4 w-fit">
            <ArrowLeft size={20} className="mr-2" />
            Volver a cursos
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
          <div className="flex flex-wrap gap-3">
            <span className="bg-ocean/70 px-3 py-1 rounded-full text-sm">
              Duración: {course.duration}
            </span>
            <span className="bg-ocean/70 px-3 py-1 rounded-full text-sm">
              Nivel: {course.level}
            </span>
            <span className="bg-ocean/70 px-3 py-1 rounded-full text-sm">
              Precio: {course.price}
            </span>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Descripción del Curso</h2>
                <p className="text-gray-600 mb-8">{course.description}</p>

                <h2 className="text-2xl font-bold mb-4 text-gray-800">Requisitos</h2>
                <p className="text-gray-600 mb-8">{course.requirements}</p>

                <h2 className="text-2xl font-bold mb-4 text-gray-800">¿Qué incluye?</h2>
                <ul className="list-disc pl-5 mb-8 text-gray-600">
                  {course.included.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link to={'/contacto'}> 
                  <Button variant="outline" className="border-ocean text-ocean hover:bg-ocean hover:text-white">
                    Solicitar Información
                  </Button>
                </Link>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
