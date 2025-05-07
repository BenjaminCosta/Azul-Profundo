
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Anchor, Compass, ArrowLeft } from "lucide-react";

const travelsData = {
  "angra-dos-reis": {
    destination: "Angra dos Reis",
    location: "Brasil",
    date: "15-25 Enero, 2026",
    description: "Angra dos Reis es un archipiélago tropical al sur de Río de Janeiro, compuesto por 365 islas y más de 2000 playas. Sus aguas cálidas y claras ofrecen inmersiones para todos los niveles, con visibilidad de hasta 15 metros y temperaturas entre 22°C y 26°C. Podrás explorar arrecifes coloridos, pequeños naufragios y disfrutar de una abundante vida marina tropical, incluyendo tortugas marinas, rayas, morenas y peces tropicales de vibrantes colores.",
    itinerary: [
      "Día 1: Llegada a Río de Janeiro y traslado a Angra dos Reis.",
      "Días 2-9: 2 inmersiones diarias en diferentes sitios alrededor de las islas.",
      "Día 10: Día libre para actividades en tierra o inmersiones opcionales.",
      "Día 11: Regreso a Río de Janeiro."
    ],
    included: [
      "10 noches de alojamiento en hotel 4 estrellas",
      "16 inmersiones guiadas (tanques y plomos incluidos)",
      "Traslados desde/hacia el aeropuerto",
      "Desayunos y almuerzos los días de buceo",
      "Guía de buceo profesional de habla hispana"
    ],
    level: "Apto para todos los niveles de buceo certificados",
    spots: 8,
    price: "$1,800",
    image: "/imagenes/angra.jpg"
  },
  "galapagos": {
    destination: "Islas Galápagos",
    location: "Ecuador",
    date: "10-20 Marzo, 2026",
    description: "Las Islas Galápagos representan uno de los destinos más emblemáticos del mundo para el buceo. Este archipiélago volcánico, declarado Patrimonio de la Humanidad, ofrece encuentros únicos con especies endémicas y grandes pelágicos. Las aguas de Galápagos, en la confluencia de varias corrientes marinas, albergan una biodiversidad extraordinaria que incluye tiburones martillo, tortugas gigantes, lobos marinos juguetones, iguanas marinas, pingüinos de Galápagos y, con suerte, el majestuoso tiburón ballena.",
    itinerary: [
      "Día 1: Llegada a Quito y noche en hotel.",
      "Día 2: Vuelo a Baltra y embarque en crucero de vida a bordo.",
      "Días 3-9: Inmersiones en sitios emblemáticos como Darwin, Wolf, Cousin's Rock y Gordon Rocks.",
      "Día 10: Desembarque y visita al Centro de Investigación Charles Darwin.",
      "Día 11: Vuelo de regreso a Quito."
    ],
    included: [
      "8 días/7 noches en crucero de buceo de lujo",
      "1 noche en Quito y 1 noche en Santa Cruz",
      "Hasta 4 inmersiones diarias incluyendo nocturnas",
      "Pensión completa a bordo",
      "Guías naturalistas certificados",
      "Visitas terrestres a las islas"
    ],
    level: "Avanzado (mínimo 50 inmersiones registradas y experiencia en corrientes)",
    spots: 6,
    price: "$3,200",
    image: "/imagenes/galapagos3.jpg"
  },
  "egipto": {
    destination: "Mar Rojo",
    location: "Egipto",
    date: "5-15 Mayo, 2026",
    description: "El Mar Rojo es reconocido mundialmente por sus aguas cristalinas, coloridos arrecifes de coral y abundante vida marina. Desde los legendarios pecios de la Segunda Guerra Mundial hasta los espectaculares jardines de coral, las inmersiones en esta región ofrecen algo para cada buceador. La excelente visibilidad (a menudo superior a 30 metros), las cálidas temperaturas del agua y la impresionante biodiversidad hacen de este destino una experiencia imprescindible para los amantes del buceo.",
    itinerary: [
      "Día 1: Llegada a Hurghada y traslado al hotel.",
      "Día 2: Inmersiones locales en arrecifes cercanos a Hurghada.",
      "Días 3-6: Crucero de buceo a los sitios del norte (Thistlegorm, Ras Mohammed).",
      "Días 7-9: Inmersiones en los sitios del sur (Hermanos, Daedalus).",
      "Día 10: Día de descanso y exploración de la ciudad.",
      "Día 11: Regreso."
    ],
    included: [
      "7 días de crucero de buceo",
      "3 noches en hotel 5 estrellas en Hurghada",
      "20+ inmersiones incluyendo pecios y arrecifes",
      "Pensión completa durante el crucero",
      "Equipos de buceo completos",
      "Guías de buceo expertos"
    ],
    level: "Intermedio (recomendado Advanced Open Water con +20 inmersiones)",
    spots: 10,
    price: "$2,700",
    image: "/imagenes/egypt.jpg"
  },
  "bonaire": {
    destination: "Bonaire",
    location: "Caribe Holandés",
    date: "20-30 Julio, 2026",
    description: "Bonaire, conocida como 'El Paraíso del Buceador', es uno de los pocos lugares del mundo donde puedes disfrutar del buceo desde costa con acceso a más de 60 sitios de inmersión marcados con piedras amarillas a lo largo de la costa. Todo el arrecife que rodea la isla está protegido como parte del Parque Marino Nacional de Bonaire desde 1979, lo que ha permitido que los ecosistemas de coral florezcan. Aquí encontrarás aguas increíblemente claras con visibilidad de hasta 30 metros, poca o ninguna corriente, y una biodiversidad asombrosa que incluye más de 470 especies de peces.",
    itinerary: [
      "Día 1: Llegada a Bonaire y recogida del coche de alquiler.",
      "Día 2: Orientación de buceo y primeras inmersiones desde costa.",
      "Días 3-8: Buceo ilimitado desde costa en los diferentes sitios de la isla.",
      "Día 9: Excursión en barco a Klein Bonaire (isla deshabitada).",
      "Día 10: Día libre para actividades terrestres o inmersiones finales.",
      "Día 11: Regreso."
    ],
    included: [
      "10 noches en apartamento o resort frente al mar",
      "Alquiler de coche durante toda la estancia",
      "Tanques ilimitados para buceo desde costa",
      "2 inmersiones en barco a Klein Bonaire",
      "Seguro de buceo",
      "Guía detallada de los sitios de inmersión"
    ],
    level: "Todos los niveles (ideal para buceadores autónomos)",
    spots: 12,
    price: "$2,400",
    image: "/imagenes/bonaire2.jpg"
  }
};

export default function TravelPage() {
  const { travelId } = useParams();
  const travel = travelId ? travelsData[travelId as keyof typeof travelsData] : null;

  if (!travel) {
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

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 h-[500px] relative bg-ocean-dark">
        <img 
          src={travel.image} 
          alt={travel.destination} 
          className="w-full h-full object-cover opacity-50 absolute inset-0"
        />
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center text-white">
          <Link to="/viajes" className="flex items-center text-white hover:text-gray-300 mb-4 w-fit">
            <ArrowLeft size={20} className="mr-2" />
            Volver a viajes
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{travel.destination}</h1>
          <div className="flex items-center mb-4">
            <MapPin size={20} className="mr-2" />
            <span className="text-xl">{travel.location}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="bg-ocean/70 px-3 py-1 rounded-full text-sm flex items-center">
              <Calendar size={16} className="mr-2" />
              {travel.date}
            </span>
            <span className="bg-ocean/70 px-3 py-1 rounded-full text-sm">
              {travel.level}
            </span>
            <span className="bg-ocean/70 px-3 py-1 rounded-full text-sm">
              {travel.spots} plazas disponibles
            </span>
            <span className="bg-coral px-3 py-1 rounded-full text-sm font-semibold">
              {travel.price}
            </span>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <Anchor size={24} className="mr-3 text-ocean" />
                  Sobre el Destino
                </h2>
                <p className="text-gray-600 mb-8">{travel.description}</p>

                <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <Compass size={24} className="mr-3 text-ocean" />
                  Itinerario
                </h2>
                <ul className="mb-8">
                  {travel.itinerary.map((day, index) => (
                    <li key={index} className="mb-3 pb-3 border-b border-gray-100 last:border-0 flex">
                      <span className="font-bold text-ocean mr-2">{index + 1}.</span>
                      <span className="text-gray-600">{day}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-gray-800">¿Qué incluye?</h2>
                <ul className="list-disc pl-5 mb-8 text-gray-600">
                  {travel.included.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button className="bg-ocean hover:bg-ocean-dark text-white">
                    Reservar Ahora
                  </Button>
                  <Button variant="outline" className="border-ocean text-ocean hover:bg-ocean hover:text-white">
                    Solicitar Información
                  </Button>
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
