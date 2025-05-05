
import { Facebook, Instagram, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Course links to display in the footer
const courseLinks = [
  { name: "Open Water Diver", href: "/cursos/open-water-diver" },
  { name: "Advanced Diver", href: "/cursos/advanced-diver" },
  { name: "Rescue Diver", href: "/cursos/rescue-diver" },
  { name: "Master Diver", href: "/cursos/master-diver" },
  { name: "Nitrox", href: "/cursos/nitrox" },
  { name: "Dive Master", href: "/cursos/dive-master" },
  { name: "Intro to Tech", href: "/cursos/intro-to-tech" },
  { name: "Primeros Auxilios", href: "/cursos/primeros-auxilios" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Azul Profundo</h3>
            <p className="mb-4 text-gray-400">
              Tu escuela de buceo profesional. Descubre el mundo submarino con nosotros.
            </p>
            <div className="flex space-x-4">
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
          
          <div>
            <h4 className="font-bold text-lg mb-4">Cursos</h4>
            <nav>
              <ul className="space-y-2">
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
          
          <div>
            <h4 className="font-bold text-lg mb-4">Suscríbete</h4>
            <p className="mb-4 text-gray-400">
              Recibe nuestras últimas novedades, viajes y ofertas especiales.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Tu email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean"
              />
              <Button className="bg-ocean hover:bg-ocean-dark text-white">
                Suscribirme
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
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
