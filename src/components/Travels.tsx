
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const travels = [
  {
    id: "angra-dos-reis",
    destination: "Angra dos Reis, Brasil",
    date: "15-25 Enero, 2026",
    description: "Descubre las maravillosas playas y aguas cristalinas de esta joya brasileña. Inmersiones para todos los niveles.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=400",
    spots: 8
  },
  {
    id: "galapagos",
    destination: "Galápagos, Ecuador",
    date: "10-20 Marzo, 2026",
    description: "Uno de los mejores lugares del mundo para el buceo. Podrás nadar junto a lobos marinos, tortugas, pingüinos y tiburones.",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&q=80&w=400",
    spots: 6
  },
  {
    id: "egipto",
    destination: "Mar Rojo, Egipto",
    date: "5-15 Mayo, 2026",
    description: "Aguas cristalinas, coloridos arrecifes de coral y una abundante vida marina. Incluye inmersiones en pecios de la Segunda Guerra Mundial.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=400",
    spots: 10
  }
];

export default function Travels() {
  return (
    <section id="viajes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Viajes y Expediciones</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Descubre los mejores destinos de buceo alrededor del mundo con nuestras expediciones guiadas por instructores expertos.
          </p>
          <div className="w-20 h-1 bg-ocean mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {travels.map((travel, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={travel.image} 
                  alt={travel.destination} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-coral text-white py-1 px-4 rounded-bl-lg font-medium text-sm">
                  {travel.spots} plazas disponibles
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{travel.destination}</CardTitle>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <Calendar size={14} className="mr-2" />
                  <span>{travel.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{travel.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link to={`/viajes/${travel.id}`}>
                  <Button variant="outline" className="border-ocean text-ocean hover:bg-ocean hover:text-white">
                    Detalles
                  </Button>
                </Link>
                <Button className="bg-ocean hover:bg-ocean-dark text-white">
                  Reservar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/viajes">
            <Button className="bg-ocean hover:bg-ocean-dark text-white">
              Ver calendario completo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
