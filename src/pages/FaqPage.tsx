
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Por qué un curso de buceo?",
    answer: "Un curso de buceo te permite explorar un mundo completamente nuevo bajo el agua, conocer ecosistemas marinos únicos, y vivir una experiencia de libertad y aventura incomparable. Además, te proporciona las habilidades y conocimientos necesarios para bucear de manera segura y responsable en cualquier parte del mundo."
  },
  {
    question: "¿Qué se necesita para bucear?",
    answer: "Primero que nada ganas. Ganas por aprender, por conocer, por explorar y por querer participar de aventuras y desafíos nuevos. También se necesita dedicación y esfuerzo. En Azul Profundo te acompañamos en todas tus etapas de aprendizaje y experiencias para que cumplas tus objetivos."
  },
  {
    question: "¿Hace falta saber nadar perfecto?",
    answer: "No es necesario ser un nadador experto, pero sí es importante sentirse cómodo en el agua y tener habilidades básicas de natación. Durante el curso, aprenderás técnicas específicas para moverte bajo el agua que son diferentes a la natación convencional."
  },
  {
    question: "No tuve una buena experiencia en un bautismo ¿Puede ser distinto con un curso de buceo?",
    answer: "Absolutamente. Un bautismo suele ser una experiencia muy breve y sin mucha preparación. En un curso completo, aprenderás gradualmente, con tiempo para adaptarte al equipo y al entorno subacuático, con instructores que te guiarán paso a paso para superar cualquier ansiedad inicial, lo que hace que la experiencia sea mucho más placentera y satisfactoria."
  },
  {
    question: "¿Necesito contar con algún elemento para el curso?",
    answer: "Para comenzar el curso básico, sólo necesitas traje de baño, toalla y ganas de aprender. Nosotros proporcionamos todo el equipo especializado (regulador, tanque, chaleco, traje, etc.). A medida que avances, podrás ir adquiriendo tu propio equipo si lo deseas, y estaremos encantados de asesorarte."
  },
  {
    question: "¿Hasta qué edad se puede bucear?",
    answer: "No hay un límite de edad superior para bucear, siempre que estés en buena condición física y de salud. Tenemos alumnos que han comenzado a bucear después de los 60 años. Para niños, existen programas especiales a partir de los 8 años, con limitaciones apropiadas según su edad y desarrollo."
  },
  {
    question: "¿Qué horarios se cursa?",
    answer: "Ofrecemos horarios flexibles para adaptarnos a tus necesidades. Tenemos cursos en días de semana por la tarde/noche, y también los fines de semana. Además, durante las vacaciones escolares, ofrecemos cursos intensivos. Contáctanos para conocer los horarios actuales y encontrar el que mejor se adapte a tu agenda."
  },
  {
    question: "¿Cuánto dura el curso?",
    answer: "La duración varía según el nivel y tipo de curso. El curso básico (Open Water Diver) generalmente se completa en 4-5 días, combinando sesiones teóricas, prácticas en piscina e inmersiones en aguas abiertas. También ofrecemos formatos más extensos para quienes prefieren un aprendizaje más pausado."
  }
];

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20 bg-gradient-to-b from-ocean-dark to-ocean">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Preguntas que nos suelen hacer...</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Aquí encontrarás respuestas a las dudas más comunes sobre el buceo y nuestros cursos.
          </p>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
