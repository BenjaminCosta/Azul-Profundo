import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "/imagenes/logo.png";

const navLinks = [
  { name: "Nosotros", href: "/nosotros" },
  { name: "Cursos", href: "/cursos" },
  { name: "Viajes", href: "/viajes" },
  { name: "Naui", href: "/naui" },
  { name: "FAQ", href: "/faq" },
  { name: "Contacto", href: "/contacto" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, location]); // Se ejecuta cuando cambia la ubicación o el scroll

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-1" : "bg-transparent py-0" // Reducción del padding
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
          <span
            className="text-[#1c2d48] font-bold text-3xl"
            style={{
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
              fontFamily: '"Montserrat", sans-serif', // O cambia por otra fuente que prefieras
            }}
          >
            Azul Profundo
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 mt-0">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "font-medium transition-colors hover:text-ocean",
                  scrolled ? "text-gray-700" : "text-white",
                  isActive && "underline underline-offset-4 text-black",
                  "text-lg font-semibold"
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <Link to="/e-shop">
            <Button className="bg-sky-500 hover:bg-sky-600 text-white flex items-center gap-2" variant="default">
              <ShoppingCart size={18} />
              E-shop
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            className={cn(
              "p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800",
              scrolled ? "text-gray-700" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-white transform transition-transform ease-in-out duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <div className="text-ocean font-bold text-2xl">Azul Profundo</div>
          </div>
          <button
            type="button"
            className="p-2 rounded-md text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <nav className="mt-0 px-4">
          <ul className="space-y-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={cn(
                      "block py-2 text-lg font-medium hover:text-ocean",
                      isActive ? "underline underline-offset-4 text-black" : "text-gray-700"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                to="/e-shop"
                className="flex items-center gap-2 py-2 text-lg font-medium text-white bg-sky-500 rounded-md px-4 hover:bg-sky-600"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart size={18} />
                E-shop
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
