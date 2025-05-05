
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "¿Por qué un curso de buceo?",
    answer: "Un curso de buceo te permite explorar un mundo completamente nuevo bajo el agua, conocer ecosistemas marinos únicos, y vivir una experiencia de libertad y aventura incomparable."
  },
  {
    question: "¿Qué se necesita para bucear?",
    answer: "Primero que nada ganas. Ganas por aprender, por conocer, por explorar y por querer participar de aventuras y desafíos nuevos. También se necesita dedicación y esfuerzo. En Azul Profundo te acompañamos en todas tus etapas de aprendizaje y experiencias para que cumplas tus objetivos."
  },
  {
    question: "¿Hace falta saber nadar perfecto?",
    answer: "No es necesario ser un nadador experto, pero sí es importante sentirse cómodo en el agua y tener habilidades básicas de natación."
  }
];

export default function FaqSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Preguntas que nos suelen hacer...</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Aquí encontrarás respuestas a algunas de las preguntas más frecuentes sobre el buceo y nuestros cursos.
          </p>
          <div className="w-20 h-1 bg-ocean mx-auto mt-4"></div>
        </div>

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

          <div className="text-center mt-8">
            <Link to="/faq">
              <Button variant="outline" className="border-ocean text-ocean hover:bg-ocean hover:text-white">
                Ver todas las preguntas frecuentes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
