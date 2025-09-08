import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Anchor, Compass, ArrowLeft, Waves, Fish, Ship, Sun, Zap } from "lucide-react";

const travelsData = {
  "angra-dos-reis": {
    destination: "Angra dos Reis",
    location: "Brasil",
    flag: "/imagenes/br.svg",
    gallery: ["ar1.jpeg", "ar2.jpeg", "ar3.jpeg", "ar4.jpeg"],
    highlights: [
      { icon: <Ship className="text-yellow-200" />, text: "8 inmersiones embarcadas" },
      { icon: <Fish className="text-yellow-200" />, text: "Aguas cálidas (20-26°C)" },
      { icon: <Sun className="text-yellow-200" />, text: "Actividades acuáticas" }
    ],
    description: "Descubre las maravillosas playas y aguas cristalinas y cálidas de esta joya brasileña que con sus más de 300 islas ofrece un sinfín de experiencias, con abundante vida marina. Este maravilloso archipiélago subtropical permite inmersiones seguras y relajadas en un calmo mar transparente y cálido. Ideal para los que recién se inician o para los que buscan entrenar y mantenerse activos. Nos alojamos en una Pousada especializada en operaciones de buceo ubicada sobre el mar en habitaciones dobles con el desayuno y cenas tipo buffet incluidas. Todos los días nos embarcamos en el muelle de la Pousada para hacer las dos inmersiones diarias y por las tardes podemos recorrer las islas o practicar deportes acuaticos como stand up paddle, kayac, etc.",
    itinerary: [
      { day: "Día 1", title: "Llegada", description: "Check-in en la Pousada y orientación" },
      { day: "Días 2-5", title: "Buceo y exploración", description: "2 inmersiones diarias embarcadas y tardes libres para actividades acuáticas" },
      { day: "Día 6", title: "Despedida", description: "Último buceo y traslado al aeropuerto" }
    ],
    included: [
      { category: "Hospedaje", items: ["5 noches en Pousada frente al mar", "Habitaciones dobles"] },
      { category: "Experiencia", items: ["8 buceos embarcados", "Buceos libres desde el muelle", "Guía de buceo"] },
      { category: "Gastronomía", items: ["Desayuno buffet diario", "Cenas buffet con bebidas sin alcohol"] },
      { category: "Extra", items: ["Actividades acuáticas (SUP, kayak)", "Snacks y bebidas a bordo", "Toallas de buceo"] }
    ],
    level: "Todos los niveles",
    spots: "Grupo reducido",
    image: "/imagenes/angra4.jpg",
    buttonText: "Consultar"
  },
  "galapagos": {
    destination: "Islas Galápagos",
    location: "Ecuador",
    flag: "/imagenes/ec.svg",
    gallery: ["gl1.jpeg", "gl2.jpeg", "gl3.jpeg", "gl4.jpeg"],
    highlights: [
      { icon: <Fish className="text-yellow-200" />, text: "Gran biodiversidad marina" },
      { icon: <Ship className="text-yellow-200" />, text: "12 inmersiones embarcadas" },
      { icon: <Sun className="text-yellow-200" />, text: "Excursiones terrestres" }
    ],
    description: "Ubicadas en un aislado sector del Océano Pacífico, las Islas Galápagos representan uno de los lugares de mayor biodiversidad del Planeta, siendo uno de los tres mejores lugares del mundo para bucear. Cuna de la teoría de la evolución de Darwin, el archipiélago es visitado constantemente por gigantes cardúmenes de peces de todo tipo, gran variedad de tiburones (ballena, punta blanca, punta negra, galápagos, tigre y martillo) y rayas (moteada, manta, diablo, etc.), el gran mola mola (pez luna) e infinidad de especies marinas (tortugas, lobos marinos, ballenas jorobadas, orcas y delfines). No hay otro lugar en la Tierra así. Los dos buceos diarios son por la mañana y embarcados, regresando al Hotel después de almorzar en un restaurant en el puerto (incluido). Para los que quieren saltearse buceos o los que todavía no se animan a esta pasión submarina hay excursiones a lugares de gran interés que pueden contratarse ahí mismo.",
    itinerary: [
      { day: "Día 1", title: "Llegada", description: "Transfer al hotel y briefing inicial" },
      { day: "Días 2-7", title: "Buceo y exploración", description: "2 buceos diarios embarcados por la mañana" },
      { day: "Día 8", title: "Despedida", description: "Transfer al aeropuerto" }
    ],
    included: [
      { category: "Hospedaje", items: ["7 noches en hotel", "Habitaciones dobles"] },
      { category: "Experiencia", items: ["12 buceos embarcados", "Guía de buceo"] },
      { category: "Gastronomía", items: ["Desayuno y almuerzo diarios", "Bebidas sin alcohol"] },
      { category: "Extra", items: ["Transfer in/out", "Snacks a bordo", "Toallas de buceo"] }
    ],
    level: "Intermedio/Avanzado",
    spots: "Grupo reducido",
    image: "/imagenes/galapagos3.jpg",
    buttonText: "Consultar"
  },
  "bonaire": {
    destination: "Bonaire",
    location: "Caribe Holandés",
    flag: "/imagenes/nl.svg",
    gallery: ["bn1.jpeg", "bn2.jpeg", "bn3.jpeg", "bn4.jpeg"],
    highlights: [
      { icon: <Zap className="text-yellow-200" />, text: "Buceos ilimitados" },
      { icon: <Fish className="text-yellow-200" />, text: "30m de visibilidad" },
      { icon: <Sun className="text-yellow-200" />, text: "Nitrox free" }
    ],
    description: "Conocido como el paraíso de los buceadores, esta isla de las Antillas Holandesas ofrece acceso fácil a más de 60 sitios de inmersión y un ecosistema marino protegido con visibilidad excepcional y agua cálida. Rodeada por un fondo coralino multicolor explotado de vida, cada inmersión es única, pudiendo ver una gran variedad de peces, muchas veces agrupados en escuelas revoloteando a través del coral. También hay dos naufragios accesibles (un carguero y un pesquero). La libertad de elegir a lo largo de toda la isla los puntos de buceo a realizar desde la orilla nos permite movernos a nuestro tiempo y hacer las cosas a nuestro modo ya que contamos con cantidad de tanques ilimitados a cualquier hora. El Resort donde nos alojamos se encuentra situado frente al mar, está dedicado exclusivamente al buceo y dispone de piletas, restaurants y bares.",
    itinerary: [
      { day: "Día 1", title: "Llegada", description: "Check-in en resort y orientación" },
      { day: "Días 2-7", title: "Buceo libre", description: "Buceos ilimitados de costa diurnos/nocturnos" },
      { day: "Día 8", title: "Despedida", description: "Check-out y transfer al aeropuerto" }
    ],
    included: [
      { category: "Hospedaje", items: ["7 noches en resort especializado"] },
      { category: "Experiencia", items: ["Buceos ilimitados", "Nitrox", "Lockers para equipo"] },
      { category: "Movilidad", items: ["Alquiler de vehículo incluido"] },
      { category: "Gastronomía", items: ["Desayuno buffet"] }
    ],
    level: "Intermedio",
    spots: "Grupo mediano",
    image: "/imagenes/bonaire3.jpg",
    buttonText: "Consultar"
  },
  "cenotes": {
    destination: "Cenotes Mayas",
    location: "México",
    flag: "/imagenes/mx.svg",
    gallery: ["ce1.jpeg", "ce2.jpeg", "ce3.jpeg", "ce4.jpeg"],
    highlights: [
      { icon: <Zap className="text-yellow-200" />, text: "12 buceos en cenotes" },
      { icon: <Waves className="text-yellow-200" />, text: "Aguas cristalinas" },
      { icon: <Sun className="text-yellow-200" />, text: "Excursiones terrestres" }
    ],
    description: "Las cuevas de los cenotes mexicanos son escenarios únicos para aquellos intrépidos que quieren conocer las entrañas de la Tierra. Sus aguas son extremadamente transparentes lo que da aun más la sensación de volar. Bucear en los cenotes de Yucatán es una experiencia única. No hay nada que se pueda comparar a este lugar sagrado para la cultura maya ya que te encuentras buceando en agua dulce a través de estalactitas y estalagmitas que la naturaleza ha ido esculpiendo pacientemente durante millones de años. Para los que quieren saltearse buceos o los que todavía no se animan a esta pasión submarina hay excursiones a lugares de gran interés que pueden contratarse ahí mismo.",
    itinerary: [
      { day: "Día 1", title: "Llegada", description: "Transfer al hotel y orientación" },
      { day: "Días 2-7", title: "Buceo en cenotes", description: "2 inmersiones diarias en diferentes cenotes" },
      { day: "Día 8", title: "Despedida", description: "Transfer al aeropuerto" }
    ],
    included: [
      { category: "Hospedaje", items: ["7 noches en hotel", "Habitaciones dobles"] },
      { category: "Experiencia", items: ["12 buceos en cenotes", "Guía especializado"] },
      { category: "Gastronomía", items: ["Desayuno buffet"] },
      { category: "Logística", items: ["Traslados a cenotes", "Entradas incluidas", "Snacks entre buceos"] }
    ],
    level: "Intermedio (buena flotabilidad)",
    spots: "Grupo reducido",
    image: "/imagenes/cenote2.jpg",
    buttonText: "Consultar"
  },
  "egipto": {
    destination: "Mar Rojo & Egipto",
    location: "Egipto",
    flag: "/imagenes/eg.svg",
    gallery: ["eg1.jpeg", "eg2.jpeg", "eg3.jpeg", "eg4.jpeg"],
    highlights: [
      { icon: <Ship className="text-yellow-200" />, text: "Yate privado de buceo" },
      { icon: <Fish className="text-yellow-200" />, text: "Turismo en El Cairo" },
      { icon: <Sun className="text-yellow-200" />, text: "Crucero por el Nilo" }
    ],
    description: "Las pirámides de Egipto y el río Nilo se combinan con las aguas cristalinas, coloridos arrecifes y muchos naufragios rodeados de una abundante vida marina en este destino. La combinación perfecta: Recorrer las maravillas del mundo antiguo y bucear en un vida abordo privado por el Mar Rojo son cosas que obligatoriamente hay que hacer en esta vida. Las grandes pirámides de Ghiza y templos milenarios son las claras señales de que estamos en tierra de faraones. Como salido de un cuento de Agatha Christie, el crucero por el Nilo completa esta parte del viaje de “turismo”. Luego, vivimos una semana a bordo de un yate de lujo recorriendo el Mar Rojo y buceando en puntos emblemáticos (arrecifes coralinos y grandes naufragios, algunos de la segunda guerra mundial). Alojados en camarotes dobles, dispondremos de 4 tanques de buceo diarios para hacer las inmersiones más maravillosas que la famosa ruta norte de los naufragios del Mar Rojo nos puede ofrecer.",
    itinerary: [
      { day: "Días 1-3", title: "El Cairo", description: "Visita a las pirámides y museos" },
      { day: "Días 4-10", title: "Nilo", description: "Crucero visitando templos faraónicos" },
      { day: "Días 11-14", title: "Mar Rojo", description: "Semana de buceo en yate privado" }
    ],
    included: [
      { category: "Hospedaje", items: ["3 noches El Cairo", "7 noches en yate", "4 noches crucero"] },
      { category: "Experiencia", items: ["22 buceos", "Guías expertos"] },
      { category: "Gastronomía", items: ["Pensión completa", "Bebidas no alcohólicas"] },
      { category: "Logística", items: ["Transfer aeropuerto", "Vuelo El Cairo-Luxor", "Transfer Aswan-Hurghada"] }
    ],
    level: "Intermedio",
    spots: "Grupo reducido",
    image: "/imagenes/egypt.jpg",
    buttonText: "Consultar"
  },
  "roatan": {
    destination: "Roatán",
    location: "Honduras",
    flag: "/imagenes/hn.svg",
    gallery: ["ro1.jpeg", "ro2.jpeg", "ro3.jpeg", "ro4.jpeg"],
    highlights: [
      { icon: <Fish className="text-yellow-200" />, text: "18 buceos embarcados" },
      { icon: <Waves className="text-yellow-200" />, text: "30m de visibilidad" },
      { icon: <Sun className="text-yellow-200" />, text: "Pensión completa" }
    ],
    description: "Esta famosa isla del mar caribe de aguas transparentes y cálidas te permite bucear en cañadones sumergidos y con un gran arrecife de coral. La isla de Roatán, Honduras, se caracteriza por un fondo coralino donde abunda la vida marina y los cañadones sumergidos que te invitan a explorar y recorrer sus laberintos pasadizos. Se puede ver una gran variedad de peces, muchas veces agrupados en escuelas revoloteando a través del coral y para los amantes de los naufragios, hay tres de gran tamaño que se pueden visitar. Alojados en un Resort de buceo, nos embarcamos todos los días desde el muelle del lugar para realizar 3 buceos diurnos (dos por la mañana y uno por la tarde), lo que permite disfrutar de la tarde de la playa privada del Hotel o realizar más buceos desde la orilla. Para los que quieren saltearse buceos o los que todavía no se animan a esta pasión submarina hay excursiones a lugares de gran interés que pueden contratarse ahí mismo o simplemente practicar deportes acuáticos (stand up paddle, kayak, etc).",
    itinerary: [
      { day: "Día 1", title: "Llegada", description: "Transfer al resort y orientación" },
      { day: "Días 2-7", title: "Buceo intensivo", description: "3 buceos diarios (2 mañana, 1 tarde)" },
      { day: "Día 8", title: "Despedida", description: "Transfer al aeropuerto" }
    ],
    included: [
      { category: "Hospedaje", items: ["7 noches en resort", "Habitaciones dobles"] },
      { category: "Experiencia", items: ["18 buceos", "Buceos ilimitados de costa", "Lockers para equipo"] },
      { category: "Gastronomía", items: ["Pensión completa"] },
      { category: "Logística", items: ["Transfer aeropuerto", "Toallas de buceo", "Guía local"] }
    ],
    level: "Todos los niveles",
    spots: "Grupo reducido",
    image: "/imagenes/roatan3.jpg",
    buttonText: "Consultar"
  }
};

export default function TravelPage() {
  const { travelId } = useParams();
  const travel = travelId ? travelsData[travelId as keyof typeof travelsData] : null;

  if (!travel) {
    return <NotFound />;
  }

   return (
    <div className="min-h-screen">
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
        
        {/* Galería de imágenes cuadradas - Versión aumentada */}
<div className="hidden lg:block absolute right-6 lg:right-12 top-40 z-10 w-[38%] max-w-md">
  <div className="grid grid-cols-2 gap-5 p-5 bg-white/15 backdrop-blur-sm rounded-2xl border-2 border-white/25">
    {/* Imagen 1 */}
    <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105 hover:z-20">
      <img
        src={`/imagenes/${travel.gallery[0]}`}
        alt={`${travel.destination} 1`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>
    
    {/* Imagen 2 */}
    <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105 hover:z-20">
      <img
        src={`/imagenes/${travel.gallery[1]}`}
        alt={`${travel.destination} 2`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>
    
    {/* Imagen 3 */}
    <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105 hover:z-20">
      <img
        src={`/imagenes/${travel.gallery[2]}`}
        alt={`${travel.destination} 3`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>

    {/* Imagen 4 */}
    <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105 hover:z-20">
      <img
        src={`/imagenes/${travel.gallery[3]}`}
        alt={`${travel.destination} 4`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>
  </div>
</div>

        
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center text-white">
          <Link to="/viajes" className="flex items-center text-white hover:text-ocean-light mb-6 transition-colors w-fit">
            <ArrowLeft size={20} className="mr-2" />
            Volver a viajes
          </Link>
          
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">{travel.destination}</h1>
            <div className="flex items-center mb-6">
              <MapPin size={24} className="mr-3" />
              <span className="text-2xl flex items-center">
                {travel.location}
                {travel.flag && (
                  <img
                    src={travel.flag}
                    alt={`Bandera de ${travel.location}`}
                    className="ml-2 h-5 w-auto object-contain"
                    loading="lazy"
                  />
                )}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-8 ">
              <span className="bg-ocean/90 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                Nivel: {travel.level}
              </span>
              <span className="bg-ocean/90 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                {travel.spots}
              </span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {travel.highlights.map((highlight, index) => (
                <div key={index} className="bg-white/10 p-3 rounded-lg backdrop-blur-lg flex items-center">
                  <div className="mr-2">{highlight.icon}</div>
                  <span className="text-sm">{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-16 bg-gradient-to-b from-white to-ocean/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* About Section */}
              <Section title="Sobre esta experiencia" icon={<Anchor />}>
                <p className="text-lg text-gray-800 leading-relaxed mb-6 font-medium text-justify">
                  {travel.description}
                </p>
                
                <div className="bg-ocean-light/10 p-6 rounded-xl border border-ocean-light/20 mb-8 backdrop-blur-sm">
                  <h3 className="font-bold text-xl text-ocean-dark mb-3 flex items-center">
                    <span className="text-ocean mr-2">✨</span> Lo más destacado
                  </h3>
                  <ul className="space-y-3">
                    {travel.highlights.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-ocean mr-2 mt-1 font-bold">•</span>
                        <span className="text-gray-700 font-medium">{item.text}</span>
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
                        <div className="w-20 h-10 rounded-full bg-gradient-to-r from-ocean to-ocean-dark text-white text-sm flex items-center justify-center font-bold shadow-md">
                          {item.day}
                        </div>
                        {index < travel.itinerary.length - 1 && (
                          <div className="w-1 h-full bg-gradient-to-b from-ocean/30 to-ocean-light/30 group-hover:from-ocean group-hover:to-ocean-dark transition-all"></div>
                        )}
                      </div>
                      <div className="pb-6 flex-1">
                        <h3 className="font-bold text-xl text-gray-800 mb-1">{item.title}</h3>
                        <p className="text-gray-700 font-medium">{item.description}</p>
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
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                    <span className="text-ocean mr-2 text-2xl">✓</span> Incluye
                  </h2>
                  <div className="space-y-5">
                    {travel.included.map((category, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-lg text-gray-800 mb-2 border-b border-gray-100 pb-1">
                          {category.category}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start text-gray-700">
                              <span className="text-ocean mr-2 mt-1 font-bold">•</span>
                              <span className="font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Box */}
                <div className="bg-gradient-to-br from-ocean-dark to-ocean text-white p-6 rounded-xl text-center shadow-lg">
                  <h3 className="font-bold text-2xl mb-3">¿Listo para la aventura?</h3>
                  <p className="mb-4 text-ocean-light/90 font-medium">Plazas limitadas - Reserva tu lugar</p>
                  <Link to="/contacto">
                    <Button className="w-full bg-white text-ocean-dark hover:bg-gray-100 font-bold py-3 text-lg shadow-md hover:scale-[1.02] transition-transform">
                      {travel.buttonText || "Contactar ahora"}
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

// Componente de sección reutilizable con mejoras
function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center border-b border-gray-100 pb-4">
        <span className="text-ocean mr-3 bg-ocean/10 p-2 rounded-lg">{icon}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

// Componente de no encontrado (sin cambios)
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