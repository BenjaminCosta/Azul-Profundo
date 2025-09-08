import { Facebook, Instagram, MessageCircle, Globe, Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const quickLinks = [
  { name: "Inicio", href: "/" },
  { name: "Cursos", href: "/cursos" },
  { name: "Viajes", href: "/viajes" },
  { name: "Contacto", href: "/contacto" },
];
const socialLinks = [
  { icon: <Facebook size={24} />, href: "https://facebook.com", color: "hover:bg-blue-600" },
  { icon: <Instagram size={24} />, href: "https://https://www.instagram.com/buceoazulprofundo/", color: "hover:bg-pink-600" },
  { icon: <MessageCircle size={24} />, href: "https://wa.me/5491136302150", color: "hover:bg-green-500" },
  { icon: <Globe size={24} />, href: "https://azulprofundo.com", color: "hover:bg-blue-400" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#1c2d48] to-[#0f1a2e] text-white">
      <div className="container mx-auto px-16 pt-12 pb-8">
        {/* Secciones principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Azul Profundo - Primera columna */}
          <div className="flex flex-col items-center text-center md:border-r md:border-gray-700">
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Azul Profundo
            </h3>
            <p className="mb-4 text-gray-400 text-sm max-w-xs">
              Tu escuela de buceo profesional. Descubre el mundo submarino con nosotros.
            </p>
           <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gray-700 text-white p-3 rounded-full transition-transform duration-300 ${social.color} hover:text-white hover:shadow-lg transform-gpu hover:scale-110 active:scale-90`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces Rápidos - Segunda columna */}
          <div className="flex flex-col items-center text-center md:border-r md:border-gray-700">
            <h4 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Enlaces Rápidos
            </h4>
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
            <h4 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Contacto
            </h4>
            <div className="space-y-3 max-w-xs">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-ocean mt-1" />
                <div className="text-gray-400 text-sm leading-snug">
                  Av. Combatiente de Malvinas 3236
                </div>
              </div>
               <div className="flex items-start gap-2">
                <MapPin size={18} className="text-ocean mt-1" />
                <div className="text-gray-400 text-sm leading-snug">
                  E. Scott 2452, Bella Vista
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-ocean" />
                  <a
                    href="tel:+5491136302150"
                    className="text-gray-400 hover:text-ocean transition-colors text-sm"
                  >
                    +54 9 11 3630-2150
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={18} className="text-ocean" />
                <a
                  href="mailto:Azulprofundo-buceo@hotmail.com"
                  className="text-gray-400 hover:text-ocean transition-colors text-sm"
                >
                  Azulprofundo-buceo@hotmail.com
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
          href="https://wa.me/+5491136302150"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50 transition-all hover:scale-110"
        >
          <MessageCircle size={28} />
        </a>
        
        {/* Instagram floating button */}
        <a
          href="https://www.instagram.com/buceoazulprofundo/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-20 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full shadow-lg z-50 transition-all hover:scale-110"
        >
          <Instagram size={28} />
        </a>
      </div>
    </footer>
  );
}