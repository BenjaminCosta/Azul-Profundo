import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, BookOpen, Clock, Award, CheckCircle, 
  AlertTriangle, Star, Layers, LifeBuoy, Shield,
  Gauge, UserCheck, Anchor, Activity, HeartPulse
} from "lucide-react";

const coursesData = {
  "open-water-diver": {
    title: "Open Water Diver",
    description: "Tu pasaporte al mundo submarino. Este curso de certificación internacional te permitirá bucear hasta 18 metros en cualquier lugar del mundo. Aprenderás fundamentos esenciales de seguridad, equipo y técnicas de buceo autónomo en un programa equilibrado entre teoría y práctica.",
    highlights: [
      "Certificación reconocida mundialmente",
      "Acceso a los mejores spots de buceo",
      "Grupos reducidos (máx. 4 estudiantes)",
      "Material didáctico digital interactivo"
    ],
    requirements: [
      "Edad mínima: 10 años",
      "Saber nadar",
      "Buena condición física",
      "Certificado médico (mayores de 45 años)"
    ],
    duration: "3-4 días",
    schedule: "Flexible - mañanas o tardes",
    included: [
      "Equipo completo de buceo",
      "Manual digital + plataforma online",
      "Certificación PADI e-card",
      "Seguro DAN durante el curso",
      "4 inmersiones en mar abierto",
      "Sesión de fotos submarinas"
    ],
    level: "Principiante",
    price: "$450 USD",
    image: "/imagenes/open3.jpg",
    icon: <Anchor className="text-black" />
  },
  "advanced-diver": {
    title: "Advanced Open Water",
    description: "Amplía tus horizontes de buceo con este curso que te permite llegar hasta 30 metros de profundidad. Incluye especialidades como buceo nocturno, navegación submarina y buceo profundo, brindándote mayor confianza y versatilidad bajo el agua.",
    highlights: [
      "Límite de profundidad a 30m",
      "Incluye 5 especialidades",
      "Entrenamiento con instructor PADI",
      "Aprendizaje basado en experiencia"
    ],
    requirements: [
      "Certificación Open Water Diver",
      "Edad mínima: 12 años",
      "20 inmersiones registradas",
      "Buena condición física"
    ],
    duration: "2-3 días",
    schedule: "Fines de semana",
    included: [
      "5 inmersiones de aventura",
      "Material didáctico avanzado",
      "Certificación internacional",
      "Bitácora digital de inmersiones",
      "Acceso a comunidad de buceo"
    ],
    level: "Intermedio",
    price: "$380 USD",
    image: "/imagenes/avanzado2.jpg",
    icon: <Gauge className="text-black" />
  },
  "rescue-diver": {
    title: "Rescue Diver",
    description: "El curso más desafiante y gratificante. Desarrollarás habilidades para prevenir y manejar emergencias, tanto propias como de otros buceadores. Aprenderás primeros auxilios, rescate en superficie y bajo agua, y gestión del estrés.",
    highlights: [
      "Habilidades de rescate profesional",
      "Simulacros de emergencia realistas",
      "Certificación reconocida internacionalmente",
      "Mejora tu confianza y seguridad"
    ],
    requirements: [
      "Certificación Advanced Open Water",
      "Primeros auxilios actualizados",
      "Edad mínima: 12 años",
      "30 inmersiones registradas"
    ],
    duration: "4 días",
    schedule: "Entre semana o intensivo",
    included: [
      "Kit de rescate profesional",
      "Manual de rescate PADI",
      "Certificación digital",
      "Acceso a talleres de refresco",
      "Seguro de buceo extendido"
    ],
    level: "Avanzado",
    price: "$420 USD",
    image: "/imagenes/rescue.jpg",
    icon: <LifeBuoy className="text-black" />
  },
  "master-diver": {
    title: "Master Scuba Diver",
    description: "El máximo nivel recreativo. Combina especialidades avanzadas para convertirte en un buceador experto. Este programa personalizado incluye entrenamiento en buceo profundo, navegación avanzada, flotabilidad perfecta y primeros auxilios.",
    highlights: [
      "Máximo nivel recreativo PADI",
      "Entrenamiento personalizado",
      "5 especialidades incluidas",
      "Acceso a eventos exclusivos"
    ],
    requirements: [
      "Certificación Rescue Diver",
      "50 inmersiones registradas",
      "Edad mínima: 16 años",
      "Examen médico actual"
    ],
    duration: "5-7 días",
    schedule: "Programa personalizado",
    included: [
      "5 especialidades de tu elección",
      "Entrenamiento one-to-one",
      "Certificación Master Scuba Diver",
      "Kit de buceo profesional",
      "Membresía anual PADI"
    ],
    level: "Experto",
    price: "$650 USD",
    image: "/imagenes/master2.jpg",
    icon: <Star className="text-black" />
  },
  "nitrox": {
    title: "Especialidad Nitrox",
    description: "Aprende a bucear con mezclas enriquecidas de aire (hasta 40% O₂) para prolongar tus tiempos de fondo y reducir la fatiga. Ideal para buceadores frecuentes, viajeros y fotógrafos submarinos.",
    highlights: [
      "Mayor tiempo bajo el agua",
      "Menor fatiga post-buceo",
      "Certificación permanente",
      "Reconocida por todas las agencias"
    ],
    requirements: [
      "Certificación Open Water",
      "Edad mínima: 12 años",
      "10 inmersiones registradas"
    ],
    duration: "2 días",
    schedule: "Fines de semana",
    included: [
      "Analizador de oxígeno personal",
      "Tablas de planificación EANx",
      "Certificación digital",
      "2 inmersiones con Nitrox",
      "Calculadora de mezclas"
    ],
    level: "Intermedio",
    price: "$220 USD",
    image: "/imagenes/nitrox.jpg",
    icon: <Activity className="text-black" />
  },
  "dive-master": {
    title: "Dive Master",
    description: "Tu primer paso profesional. Conviértete en líder de buceo, capaz de guiar inmersiones y asistir a instructores. Adquirirás conocimientos avanzados de física, fisiología, equipamiento y gestión de grupos.",
    highlights: [
      "Primera certificación profesional",
      "Habilidades de liderazgo",
      "Acceso a empleo en centros de buceo",
      "Requisito para Instructor"
    ],
    requirements: [
      "Certificación Rescue Diver",
      "40 inmersiones registradas",
      "Edad mínima: 18 años",
      "Examen médico completo"
    ],
    duration: "4-6 semanas",
    schedule: "Programa intensivo",
    included: [
      "Entrenamiento profesional completo",
      "Kit Dive Master (slates, herramientas)",
      "Certificación PADI Pro",
      "Prácticas en centro de buceo",
      "Acceso a bolsa de trabajo"
    ],
    level: "Profesional",
    price: "$950 USD",
    image: "/imagenes/dive-master.jpg",
    icon: <UserCheck className="text-black" />
  },
  "intro-to-tech": {
    title: "Intro to Tech",
    description: "Introducción al buceo técnico. Aprende configuraciones de equipo avanzadas, técnicas de propulsión y planificación de inmersiones más exigentes. Ideal para quienes quieren explorar cuevas, pecios profundos o dar el salto al tec.",
    highlights: [
      "Fundamentos de buceo técnico",
      "Equipamiento de doble botella",
      "Técnicas de propulsión avanzada",
      "Preparación para cursos Tec"
    ],
    requirements: [
      "Certificación Advanced OW",
      "Nitrox certificado",
      "25 inmersiones registradas",
      "Excelente flotabilidad"
    ],
    duration: "3-4 días",
    schedule: "Programa personalizado",
    included: [
      "Uso de equipo técnico",
      "Manual técnico completo",
      "Certificación SSI o PADI",
      "4 inmersiones técnicas",
      "Análisis de gases incluido"
    ],
    level: "Avanzado",
    price: "$580 USD",
    image: "/imagenes/tech.jpg",
    icon: <Layers className="text-black" />
  },
  "primeros-auxilios": {
    title: "Primeros Auxilios para Buceadores",
    description: "Curso esencial que enseña RCP, uso de DEA, manejo de lesiones por presión y primeros auxilios en entornos acuáticos. Certificación válida para todas las agencias de buceo.",
    highlights: [
      "Certificación internacional",
      "Enfoque en emergencias de buceo",
      "Válido por 2 años",
      "Cumple requisitos para Rescue"
    ],
    requirements: [
      "Edad mínima: 12 años",
      "Ninguna experiencia requerida"
    ],
    duration: "2 días",
    schedule: "Un fin de semana al mes",
    included: [
      "Kit de primeros auxilios",
      "Manual de emergencias",
      "Certificación EFR",
      "Práctica con maniquíes",
      "Simulacros realistas"
    ],
    level: "Todos los niveles",
    price: "$180 USD",
    image: "/imagenes/auxilios.avif",
    icon: <HeartPulse className="text-black" />
  }
};

export default function CoursePage() {
  const { courseId } = useParams();
  const course = courseId ? coursesData[courseId as keyof typeof coursesData] : null;

  if (!course) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 h-[600px] relative bg-ocean-dark overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover absolute inset-0 opacity-40"
        />
        
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center text-white">
          <Link to="/cursos" className="flex items-center text-white hover:text-ocean-light mb-6 transition-colors w-fit">
            <ArrowLeft size={20} className="mr-2" />
            Volver a cursos
          </Link>
          
          <div className="max-w-2xl">
            <div className="flex items-center mb-4">
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm mr-4">
                {course.icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">{course.title}</h1>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-ocean/90 px-4 py-2 rounded-full text-sm flex items-center backdrop-blur-sm">
                <Clock size={16} className="mr-2" />
                {course.duration}
              </span>
              <span className="bg-ocean/90 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                <Award size={16} className="mr-1 inline" /> {course.level}
              </span>
            </div>
            
            <p className="text-lg mb-6 text-white/90">{course.description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacto">
                <Button className="bg-white text-ocean-dark  hover:bg-gray-300 font-bold  px-8 py-6 text-lg rounded-lg">
                  ¡Quiero certificarme!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Highlights Section */}
              <section className="bg-ocean-light/10 p-8 rounded-xl border border-ocean-light/20">
                <h2 className="text-2xl font-bold mb-6 text-ocean-dark flex items-center">
                  <Star className="mr-3 text-ocean" />
                  Lo más destacado
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.highlights.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Requirements Section */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                  <AlertTriangle className="mr-3 text-orange-500" />
                  Requisitos
                </h2>
                <ul className="space-y-3">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="flex items-start pb-3 border-b border-gray-100 last:border-0">
                      <span className="font-bold text-ocean mr-3">{index + 1}.</span>
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Schedule Section */}
              <section className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-xl text-gray-800 mb-3 flex items-center">
                  <Clock className="mr-2 text-ocean" />
                  Horarios disponibles
                </h3>
                <p className="text-gray-700">Flexible - Mañana o Tarde</p>
              </section>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div id="included" className="sticky top-24 space-y-6">
                {/* Included Section */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    Incluye
                  </h2>
                  <ul className="space-y-3">
                    {course.included.map((item, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <span className="text-ocean mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Box */}
                <div className="bg-ocean-dark text-white p-6 rounded-xl">
                  <h3 className="font-bold text-xl mb-3">¿Listo para empezar?</h3>
                  <p className="mb-4 text-ocean-light">Cupos Limitados</p>
                  <Link to="/contacto">
                    <Button className="w-full bg-white text-ocean-dark hover:bg-gray-100 font-bold py-4">
                      Reservar ahora
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

function NotFound() {
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