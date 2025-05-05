import { Facebook, Instagram, MessageCircle, Globe, Phone, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Course links to display in the footer
const courseLinks = [
  { name: "Open Water Diver", href: "/cursos/open-water-diver" },
  { name: "Advanced Diver", href: "/cursos/advanced-diver" },
  { name: "Rescue Diver", href: "/cursos/rescue-diver" },
  { name: "Master Diver", href: "/cursos/master-diver" },
  { name: "Todos los cursos", href: "/cursos" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c2d48] text-white">
      <div className="container mx-auto px-12 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Azul Profundo Section */}
          <div className="flex flex-col items-center pr-4 pl-5 border-r border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-left">Azul Profundo</h3>
            <p className="mb-4 text-gray-400 text-left">
              Tu escuela de buceo profesional. Descubre el mundo submarino con nosotros y vive una experiencia única explorando los océanos. 

            </p>
            <div className="flex justify-start space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-ocean transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-ocean transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-ocean transition-colors">
                <MessageCircle size={24} />
              </a>
              <a href="https://azulprofundo.com" target="_blank" rel="noopener noreferrer" className="hover:text-ocean transition-colors">
                <Globe size={24} />
              </a>
            </div>
          </div>
          
          {/* Cursos Section */}
          <div className="flex flex-col items-center pr-4 pl-5 border-r border-gray-700">
            <h4 className="font-bold text-lg mb-4 text-left">Cursos</h4>
            <nav>
              <ul className="space-y-2 text-left">
                {courseLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-gray-400 hover:text-ocean transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Contacto Section */}
          <div className="flex flex-col pr-4 pl-5 max-w-md mx-auto text-left">
          <h4 className="font-bold text-lg mb-4">Contacto</h4>

          <div className="flex items-center space-x-2 mb-4">
            <Phone size={24} className="text-ocean" />
            <a href="tel:+1234567890" className="text-gray-400 hover:text-ocean transition-colors">
              1234567890
            </a>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <MapPin size={24} className="text-ocean" />
            <a
              href="https://maps.google.com?q=Ubicacion+Azul+Profundo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-ocean transition-colors"
            >
              Dirección
            </a>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <Mail size={24} className="text-ocean" />
            <a href="mailto:info@azulprofundo.com" className="text-gray-400 hover:text-ocean transition-colors">
              info@azulprofundo.com
            </a>
          </div>
          </div>
        </div>

      

        
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-400">
          <p>&copy; {currentYear} Azul Profundo. Todos los derechos reservados.</p>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a 
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all hover:scale-110"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  );
}
