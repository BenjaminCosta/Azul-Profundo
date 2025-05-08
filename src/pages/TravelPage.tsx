import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Anchor, Compass, ArrowLeft, Waves, Fish, Ship, Sun, Zap } from "lucide-react";

const travelsData = {
  "galapagos": {
    destination: "Islas Galápagos",
    location: "Ecuador",
    date: "24-31 Mayo",
    highlights: [
      { icon: <Fish className="text-ocean" />, text: "Tiburones martillo, ballena y más" },
      { icon: <Waves className="text-ocean" />, text: "Visibilidad 10-25m" },
      { icon: <Sun className="text-ocean" />, text: "Temperatura 16-20°C" }
    ],
    description: "El laboratorio viviente de Darwin te espera con uno de los ecosistemas marinos más espectaculares del planeta. Bucea entre cardúmenes gigantes, tiburones ballena juguetones y las únicas iguanas marinas del mundo. Cada inmersión es un encuentro con la evolución en su estado más puro.",
    itinerary: [
      { day: "Día 1", title: "Llegada a Santa Cruz", description: "Check-in en hotel y tarde libre para explorar Puerto Ayora" },
      { day: "Días 2-6", title: "Buceo intensivo", description: "2 inmersiones diarias en sitios como Gordon Rocks, Seymour y Daphne" },
      { day: "Día 7", title: "Aventura terrestre", description: "Visita a los cráteres gemelos y reserva de tortugas gigantes" }
    ],
    included: [
      { category: "Alojamiento", items: ["7 noches en hotel boutique", "Habitaciones dobles con A/C"] },
      { category: "Buceo", items: ["12 inmersiones guiadas", "Snacks entre buceos", "Guías PADI multilingües"] },
      { category: "Comidas", items: ["Desayunos buffet", "Almuerzos en restaurante local"] },
      { category: "Logística", items: ["Transfer aeropuerto-hotel", "Toallas de buceo", "Asistencia 24/7"] }
    ],
    level: "Intermedio/Avanzado",
    spots: "Grupo reducido (12 max)",
    image: "/imagenes/galapagos3.jpg"
  },
  "angra-dos-reis": {
    destination: "Angra dos Reis",
    location: "Brasil",
    date: "24-29 Junio",
    highlights: [
      { icon: <Ship className="text-ocean" />, text: "6 inmersiones embarcadas" },
      { icon: <Fish className="text-ocean" />, text: "Vida marina tropical" },
      { icon: <Sun className="text-ocean" />, text: "Aguas a 26°C" }
    ],
    description: "Entre las 365 islas de este paraíso tropical, descubrirás arrecifes vibrantes y naufragios accesibles. Perfecto para combinar buceo relajado con la cultura carioca y playas de arena blanca.",
    itinerary: [
      { day: "Día 1", title: "Check-in frente al mar", description: "Llegada y acomodación en pousada boutique" },
      { day: "Días 2-5", title: "Rutina de buceo", description: "Inmersiones matutinas y tardes libres para explorar" },
      { day: "Día 6", title: "Despedida", description: "Último buceo y traslado al aeropuerto" }
    ],
    included: [
      { category: "Hospedaje", items: ["Pousada frente al mar", "Habitaciones con vista"] },
      { category: "Experiencia", items: ["8 inmersiones totales", "Guía local especializado"] },
      { category: "Gastronomía", items: ["Desayuno buffet", "Cenas con productos locales"] }
    ],
    level: "Todos los niveles",
    spots: "Grupo íntimo (8 personas)",
    image: "/imagenes/angra2.jpg"
  },
  "bonaire": {
    destination: "Bonaire",
    location: "Caribe Holandés",
    date: "8-15 Octubre",
    highlights: [
      { icon: <Zap className="text-ocean" />, text: "Buceos ilimitados" },
      { icon: <Fish className="text-ocean" />, text: "40m de visibilidad" },
      { icon: <Sun className="text-ocean" />, text: "Aguas a 29°C" }
    ],
    description: "El paraíso del buceo autónomo, donde podrás sumergirte cuando quieras en más de 60 sitios marcados. Arrecifes multicolor, dos naufragios y la libertad de explorar a tu ritmo con tanques ilimitados y Nitrox incluido.",
    itinerary: [
      { day: "Día 1", title: "Llegada y orientación", description: "Check-in en resort y briefing inicial" },
      { day: "Días 2-7", title: "Buceo libre", description: "4 inmersiones diarias (mañana/tarde/noche)" },
      { day: "Día 8", title: "Despedida", description: "Últimas inmersiones y check-out" }
    ],
    included: [
      { category: "Alojamiento", items: ["7 noches en resort especializado", "Apartamentos con cocina"] },
      { category: "Movilidad", items: ["Camioneta 4x4 incluida", "Kilometraje libre"] },
      { category: "Buceo", items: ["Tanques ilimitados", "Nitrox incluido", "Buceos nocturnos"] },
      { category: "Servicios", items: ["Desayuno buffet", "Lockers para equipo", "Toallas"] }
    ],
    level: "Recomendado autónomos",
    spots: "Grupo mediano (10 personas)",
    image: "/imagenes/bonaire2.jpg"
  },
  "egipto": {
    destination: "Mar Rojo & Nilo",
    location: "Egipto",
    date: "Noviembre",
    highlights: [
      { icon: <Ship className="text-ocean" />, text: "20+ inmersiones" },
      { icon: <Fish className="text-ocean" />, text: "Pecios legendarios" },
      { icon: <Sun className="text-ocean" />, text: "Cultura faraónica" }
    ],
    description: "La combinación perfecta: buceo en los legendarios sitios del Mar Rojo y exploración de los templos faraónicos. Una semana en yate de lujo haciendo inmersiones increíbles seguida de un crucero por el Nilo descubriendo la historia antigua.",
    itinerary: [
      { day: "Días 1-3", title: "El Cairo", description: "Pirámides, museo y bazar" },
      { day: "Días 4-10", title: "Mar Rojo", description: "Buceo intensivo en yate de lujo" },
      { day: "Días 11-14", title: "Nilo", description: "Crucero visitando templos faraónicos" }
    ],
    included: [
      { category: "Alojamiento", items: ["3 noches El Cairo (5*)", "7 noches yate buceo", "4 noches crucero Nilo"] },
      { category: "Buceo", items: ["20-24 inmersiones", "Nitrox incluido", "Guías expertos"] },
      { category: "Cultura", items: ["Visitas a templos", "Guía egiptólogo", "Entradas incluidas"] },
      { category: "Gastronomía", items: ["Pensión completa", "Bebidas no alcohólicas"] }
    ],
    level: "Intermedio",
    spots: "Grupo reducido (12 personas)",
    image: "/imagenes/egypt.jpg"
  }
};

export default function TravelPage() {
  const { travelId } = useParams();
  const travel = travelId ? travelsData[travelId as keyof typeof travelsData] : null;

  if (!travel) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 h-screen max-h-[700px] relative bg-ocean-dark overflow-hidden">
        {travel.image && (
          <img 
            src={travel.image} 
            alt={travel.destination} 
            className="w-full h-full object-cover absolute inset-0 opacity-60"
          />
        )}
        
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center text-white">
          <Link to="/viajes" className="flex items-center text-white hover:text-ocean-light mb-6 transition-colors w-fit">
            <ArrowLeft size={20} className="mr-2" />
            Volver a viajes
          </Link>
          
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">{travel.destination}</h1>
            <div className="flex items-center mb-6">
              <MapPin size={24} className="mr-3" />
              <span className="text-2xl">{travel.location}</span>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-ocean/90 px-4 py-2 rounded-full text-sm flex items-center backdrop-blur-sm">
                <Calendar size={18} className="mr-2" />
                {travel.date}
              </span>
              <span className="bg-ocean/90 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                Nivel: {travel.level}
              </span>
              <span className="bg-ocean/90 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                {travel.spots}
              </span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {travel.highlights.map((highlight, index) => (
                <div key={index} className="bg-white/10 p-3 rounded-lg backdrop-blur-sm flex items-center">
                  <div className="mr-2">{highlight.icon}</div>
                  <span className="text-sm">{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* About Section */}
              <Section title="Sobre esta experiencia" icon={<Anchor />}>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">{travel.description}</p>
                
                <div className="bg-ocean-light/10 p-6 rounded-xl border border-ocean-light/20 mb-8">
                  <h3 className="font-bold text-lg text-ocean-dark mb-3">¿Por qué elegir este viaje?</h3>
                  <ul className="space-y-2">
                    {travel.highlights.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-ocean mr-2 mt-1">•</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Section>

              {/* Itinerary Section */}
              <Section title="Tu itinerario" icon={<Compass />}>
                <div className="space-y-6">
                  {travel.itinerary.map((item, index) => (
                    <div key={index} className="flex group">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-20 h-10 rounded-full bg-ocean text-white text-sm flex items-center justify-center font-bold">
                          {item.day}
                        </div>
                        {index < travel.itinerary.length - 1 && (
                          <div className="w-1 h-full bg-gray-200 group-hover:bg-ocean transition-colors"></div>
                        )}
                      </div>
                      <div className="pb-6 flex-1">
                        <h3 className="font-bold text-lg text-gray-800 mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Included Section */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                    <span className="text-ocean mr-2">✓</span> Incluye
                  </h2>
                  <div className="space-y-5">
                    {travel.included.map((category, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-gray-800 mb-2">{category.category}</h3>
                        <ul className="space-y-1">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start text-gray-600">
                              <span className="text-ocean mr-2 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Box */}
                <div className="bg-ocean-dark text-white p-6 rounded-xl text-center">
                  <h3 className="font-bold text-xl mb-3">¿Listo para la aventura?</h3>
                  <p className="mb-4 text-ocean-light">Plazas limitadas - Reserva tu lugar</p>
                  <Link to="/contacto">
                    <Button className="w-full bg-white text-ocean-dark hover:bg-gray-100 font-bold py-3">
                      Contactar ahora
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

// Componente de sección reutilizable
function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
        <span className="text-ocean mr-3">{icon}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

// Componente de no encontrado
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Destino no encontrado</h1>
          <p className="mb-6">Lo sentimos, el destino que buscas no está disponible.</p>
          <Link to="/viajes">
            <Button>Volver a Viajes</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}