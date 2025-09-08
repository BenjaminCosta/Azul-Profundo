import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LazyMotion, domAnimation, m, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Lisandro Dimarsi",
    image: "imagenes/test1.jpeg",
    role: "Buzo Técnico",
    quote: "Mi camino en el buceo creció junto a Azul Profundo: desde el Open Water hasta cursos como Advanced, Nitrox e Introducción al Buceo Técnico. También compartimos viajes inolvidables a Brasil, Bonaire, Puerto Madryn y, recientemente, el Mar Rojo en Egipto. Juan y Edu están en cada detalle, transmiten su pasión con profesionalismo y hacen que cada inmersión sea una experiencia única. ¡Un placer seguir aprendiendo y viajando con ellos!"
  },
  {
    id: 2,
    name: "Tomás Allende",
    image: "imagenes/test2.jpeg",
    role: "Buzo Master Diver",
    quote: "“Después de haber realizado diversos cursos con otros instructores, puedo afirmar que la profesionalidad, dedicación y pasión que Azul Profundo pone en la enseñanza son realmente sobresalientes. Una experiencia formativa de primer nivel. 100 % recomendable.”"
  },
  {
    id: 3,
    name: "Federico Prietto",
    image: "imagenes/test3.jpeg",
    role: "Buzo Advanced",
    quote: "Con la Escuela de Buceo Azul Profundo hice 3 cursos, open, Nitrox y Advanced. Han sido una gran experiencia de aprendizaje sobre las técnicas de buceo, la salud, y el cuidado del ecosistema marino. Voy a continuar este camino de buceo para aprender mas y tener lindas experiencias con Azul Profundo."
  },
  {
    id: 4,
    name: "Cristian Gerace",
    image: "imagenes/test4.jpeg",
    role: "Buzo Master Diver",
    quote: "Los elegiría por la profesionalidad, seriedad y pasión con la que transmiten el buceo. El bonus track es que son excelentes personas y generan un gran ambiente para disfrutar de la actividad"
  },
  {
    id: 5,
    name: "Cristian Lago",
    image: "imagenes/test5.jpeg",
    role: "Buzo Técnico",
    quote: "Haber logrado \"INTRO TO TECH\" con AP me deja asegurar que los instructores logran de este deporte, el perfecto balance entre aventura, desafío y técnica. El profesionalismo demostrado en todos los cursos y viajes, hace que sea la escuela que elijo para la certificación de mis hijos!"
  },
  {
    id: 6,
    name: "Sofia Mañan",
    image: "imagenes/test6.jpeg",
    role: "Buzo Advanced",
    quote: "Me contacté con Eduardo y Juan hace más de un año con la intención de aprender a bucear. Lo que ellos me dieron y me siguen dando fue inesperado en ese momento. Me cambiaron la manera de viajar, me despertaron una curiosidad por el mar, el placer de estar inmersa y un grupo increíble con el que compartimos el mismo placer. Bucear no es una actividad hoy, sino parte de mi vida."
  },
  {
    id: 7,
    name: "Emi Angeli",
    image: "imagenes/test7.jpeg",
    role: "Buzo Open Water",
    quote: "Hice mi curso de buceo y el Advanced en Azul Profundo con Juan y Eduardo, y fue una experiencia excelente. Son sumamente profesionales, están en cada detalle y priorizan siempre la seguridad, logrando que uno aprenda y disfrute con total confianza. Manejan muy bien los grupos, generan un clima divertido y, al mismo tiempo, acompañan a cada alumno de forma individual. Viajé con ellos a Bonaire y Brasil, y cada propuesta fue desafiante, cuidada y adaptada a lo que cada buceador busca. Además de invitarte a diferentes propuestas todos los años. Desde el primer día me sentí parte de la escuela, y eso es gracias a ellos. Recomiendo este espacio sin dudarlo."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsAutoPlaying(false);
    }
  }, [shouldReduceMotion]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  // Mostrar 3 testimonios a la vez
  const visibleTestimonials = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative py-24 overflow-hidden">
        {/* Fondo con degradado oceánico y blur */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/imagenes/bg4.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/80 via-ocean/70 to-ocean-light/60 backdrop-blur-sm"></div>

        {/* Burbujas decorativas */}
        <style>{`@keyframes bubble {0% {transform: translateY(0); opacity: .5;}100% {transform: translateY(-100px); opacity: 0;}} .animate-bubble {animation: bubble linear infinite;} @media (prefers-reduced-motion: reduce) { .animate-bubble {animation: none;} }`}</style>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/20 animate-bubble"
              style={{
                width: `${Math.random() * 10 + 10}px`,
                height: `${Math.random() * 10 + 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Encabezado */}
          <m.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Que Dicen Nuestros Alumnos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-700/50 via-red-900/60 to-red-700/50 mx-auto rounded-full"></div>
          </m.div>

          {/* Contenedor de testimonios */}
          <div className="relative">

            <div className="overflow-hidden">
              <div className="flex justify-center gap-6">
                <AnimatePresence custom={direction} mode="wait">
                  {visibleTestimonials.map((testimonial, index) => (
                    <m.div
                      key={`${testimonial.id}-${currentIndex}`}
                      custom={direction}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 80 * direction, scale: 0.95 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                      }}
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : {
                              opacity: 0,
                              x: -80 * direction,
                              scale: 0.95,
                              transition: {
                                duration: 0.4,
                                ease: [0.7, 0, 0.84, 0]
                              }
                            }
                      }
                      transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 25 }}
                      className="w-full max-w-sm flex-shrink-0"
                    >

                      <Card className="bg-white shadow-lg border-0 relative h-full min-h-[420px]">
                        <CardContent className="pt-24 pb-8 px-6 text-center h-full flex flex-col">

                          <div className="absolute pt-12 -top-10 left-1/2 transform -translate-x-1/2">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white shadow-lg bg-white">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                width={80}
                                height={80}
                              />
                            </div>
                          </div>
                          <div className="text-4xl text-ocean-light mb-2 opacity-30">"</div>
                          <p className="text-gray-600 mb-4 italic text-base leading-relaxed flex-grow">
                            {testimonial.quote}
                          </p>
                          <div className="mt-auto">
                            <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                            <p className="text-ocean font-medium text-sm">{testimonial.role}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </m.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>

            {/* Controles de navegación */}
            <Button
              onClick={prevTestimonial}
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur-md shadow-lg rounded-full w-12 h-12 hover:bg-white hover:shadow-xl transition-all"
            >
              <ChevronLeft className="text-ocean-dark" size={24} />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur-md shadow-lg rounded-full w-12 h-12 hover:bg-white hover:shadow-xl transition-all"
            >
              <ChevronRight className="text-ocean-dark" size={24} />
            </Button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-10 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                className={`w-3 h-3 rounded-full transition-all transform-gpu hover:scale-110 ${currentIndex === index ? 'bg-white w-6' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}