"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const mapData = [
  {
    title: "Sede CABA",
    src: "https://maps.google.com/maps?q=Av.%20Combatiente%20de%20Malvinas%203236,%20CABA&z=14&output=embed",
  },
  {
    title: "Sede Bella Vista",
    src: "https://maps.google.com/maps?q=E.%20Scott%202452,%20Bella%20Vista,%20Buenos%20Aires&z=14&output=embed",
  },
];

export default function ContactInfo() {
  const [currentMap, setCurrentMap] = useState(0);

  const handlePrev = () => {
    setCurrentMap((prev) => (prev === 0 ? mapData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentMap((prev) => (prev === mapData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-10">
      {/* Información de contacto */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8 md:p-10">
          <h2 className="text-3xl font-bold text-ocean mb-6 border-b pb-4">Nuestra Información</h2>

          <ul className="space-y-6">
            <li className="flex items-start">
              <div className="bg-ocean/10 p-3 rounded-full mr-4">
                <MapPin className="text-ocean" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Sedes:</h3>
                <p className="text-gray-600">
                  Av. Combatiente de Malvinas 3236, Piso 6° B, CABA<br />
                  E. Scott 2452, Bella Vista, Buenos Aires
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="bg-ocean/10 p-3 rounded-full mr-4">
                <Phone className="text-ocean" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Teléfonos:</h3>
                <p className="text-gray-600">
                  +54 9 11 3630 2150<br />
                  +54 9 11 4419 3167
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="bg-ocean/10 p-3 rounded-full mr-4">
                <Mail className="text-ocean" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Email:</h3>
                <p className="text-gray-600">Azulprofundo-buceo@hotmail.com</p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="bg-ocean/10 p-3 rounded-full mr-4">
                <Clock className="text-ocean" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Horario:</h3>
                <p className="text-gray-600">Lunes a Sábado: 9:00 a 21:00 hs</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Carrusel de mapas */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 relative">
          <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
            {mapData[currentMap].title}
          </h3>

          <div className="relative w-full h-80 rounded-lg overflow-hidden">
            <iframe
              title={mapData[currentMap].title}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              src={mapData[currentMap].src}
              className="rounded-lg"
              loading="lazy"
            />

            {/* Controles izquierda y derecha */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-ocean/10 rounded-full p-2 shadow-md transition"
              aria-label="Anterior"
            >
              <ChevronLeft className="text-ocean" size={28} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-ocean/10 rounded-full p-2 shadow-md transition"
              aria-label="Siguiente"
            >
              <ChevronRight className="text-ocean" size={28} />
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-4 space-x-2">
            {mapData.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx === currentMap ? "bg-ocean" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
