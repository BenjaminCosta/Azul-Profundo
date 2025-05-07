import { Facebook, Instagram, MessageCircle, Globe, Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Inicio", href: "/" },
  { name: "Cursos", href: "/cursos" },
  { name: "Viajes", href: "/viajes" },
  { name: "Contacto", href: "/contacto" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c2d48] text-white">
      <div className="container mx-auto px-16 py-8">
        {/* Secciones principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Azul Profundo - Primera columna */}
          <div className="flex flex-col items-center text-center md:border-r md:border-gray-700">
            <h3 className="text-xl font-bold mb-4">Azul Profundo</h3>
            <p className="mb-4 text-gray-400 text-sm max-w-xs">
              Tu escuela de buceo profesional. Descubre el mundo submarino con nosotros.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-ocean transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-ocean transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-ocean transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="https://azulprofundo.com" target="_blank" rel="noopener noreferrer" className="hover:text-ocean transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>
          
          {/* Enlaces Rápidos - Segunda columna */}
          <div className="flex flex-col items-center text-center md:border-r md:border-gray-700">
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <nav>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-ocean transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Contacto - Tercera columna */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-ocean" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-ocean transition-colors text-sm">
                  +123 456 7890
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-ocean" />
                <a
                  href="https://maps.google.com?q=Ubicacion+Azul+Profundo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-ocean transition-colors text-sm"
                >
                  Av. del Mar 1234, Playa Grande
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-ocean" />
                <a href="mailto:info@azulprofundo.com" className="text-gray-400 hover:text-ocean transition-colors text-sm">
                  info@azulprofundo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Azul Profundo. Todos los derechos reservados.</p>
        </div>

        {/* WhatsApp floating button */}
        <a 
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50 transition-all hover:scale-110"
        >
          <MessageCircle size={20} />
        </a>
      </div>
    </footer>
  );
}