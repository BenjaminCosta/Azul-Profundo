import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const allTravels = [
  {
    id: "angra-dos-reis",
    destination: "Angra dos Reis",
    location: "Brasil",
    date: "15-25 Enero, 2026",
    description: "Descubre las maravillosas playas y aguas cristalinas de esta joya brasileña. Inmersiones para todos los niveles entre islas tropicales y arrecifes coloridos, con una abundante vida marina.",
    image: "/imagenes/angra2.jpg",
    spots: "con alojamiento"
  },
  {
    id: "galapagos",
    destination: "Galápagos",
    location: "Ecuador",
    date: "10-20 Marzo, 2026",
    description: "Uno de los mejores lugares del mundo para el buceo. Podrás nadar junto a lobos marinos, tortugas, pingüinos y tiburones en este santuario natural único.",
    image: "/imagenes/galapagos3.jpg",
    spots: "a bordo"
  },
  {
    id: "egipto",
    destination: "Mar Rojo",
    location: "Egipto",
    date: "5-15 Mayo, 2026",
    description: "Aguas cristalinas, coloridos arrecifes de coral y una abundante vida marina. Incluye inmersiones en pecios de la Segunda Guerra Mundial y arrecifes prístinos.",
    image: "/imagenes/egypt.jpg",
    spots: "a bordo"
  },
  {
    id: "bonaire",
    destination: "Bonaire",
    location: "Caribe Holandés",
    date: "20-30 Julio, 2026",
    description: "Conocido como el paraíso del buceo desde costa, Bonaire ofrece acceso fácil a más de 60 sitios de inmersión y un ecosistema marino protegido con visibilidad excepcional.",
    image: "/imagenes/bonaire2.jpg",
    spots: "con alojamiento"
  }
];

export default function TravelsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Sección de encabezado con fondo e imagen */}
      <section className="pt-32 pb-20 relative text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/imagenes/hero2.avif')",
          }}
        >
          <div className="w-full h-full bg-ocean-dark opacity-40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Viajes y Expediciones</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explora los mejores destinos de buceo del mundo con nuestros viajes guiados por instructores expertos.
            Vive experiencias inolvidables en lugares únicos.
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allTravels.map((travel) => (
              <Card key={travel.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={travel.image}
                    alt={travel.destination}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute top-0 right-0 bg-coral text-white py-1 px-4 rounded-bl-lg font-medium">
                    {travel.spots} 
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">{travel.destination}</CardTitle>
                      <div className="flex items-center text-gray-500 mt-1">
                        <MapPin size={14} className="mr-1" />
                        <span>{travel.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={14} className="mr-2" />
                    <span>{travel.date}</span>
                  </div>
                  <p className="text-gray-600">{travel.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link to={`/viajes/${travel.id}`}>
                    <Button variant="outline" className="border-ocean text-ocean hover:bg-ocean hover:text-white">
                      Ver Detalles
                    </Button>
                  </Link>
                  <Link to={'/contacto'}>
                  <Button className="bg-ocean hover:bg-ocean-dark text-white">
                    Reservar
                  </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">¿Buscas un destino específico?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Si tienes en mente un destino que no aparece en nuestra lista, podemos organizar un viaje a medida para ti y tu grupo.
            </p>
            <Link to={'/contacto'}>
            <Button className="bg-ocean hover:bg-ocean-dark text-white">
              Contacta con nosotros
            </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}