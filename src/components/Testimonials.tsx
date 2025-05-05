
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Laura Martínez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    role: "Open Water Diver",
    quote: "Mi experiencia con Azul Profundo fue increíble. Los instructores son muy profesionales y pacientes. Me sentí segura en todo momento y aprendí muchísimo. ¡No puedo esperar para hacer mi próximo curso con ellos!"
  },
  {
    name: "Carlos Ramírez",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    role: "Advanced Open Water Diver",
    quote: "Hice mi curso Advanced con Azul Profundo y la experiencia fue excelente. El instructor me ayudó a mejorar mis habilidades y ganar confianza bajo el agua. Las inmersiones fueron espectaculares."
  },
  {
    name: "Sofia García",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    role: "Rescue Diver",
    quote: "El curso de Rescue Diver fue desafiante pero increíblemente gratificante. Los instructores de Azul Profundo son muy experimentados y te preparan para manejar situaciones complejas bajo el agua. Totalmente recomendado."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-ocean-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Qué Dicen Nuestros Alumnos</h2>
          <div className="w-20 h-1 bg-ocean mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg border-0 relative">
              <CardContent className="pt-16 pb-8 px-8 text-center">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-5xl text-ocean-light mb-4">"</div>
                <p className="text-gray-600 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="mt-4">
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
