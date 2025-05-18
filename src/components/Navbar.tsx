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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-1" : "bg-transparent py-2"
        )}
      >
        <div className="container mx-auto px-6 flex items-start justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Logo" 
              className={cn(
                "h-28 w-auto transition-all duration-300 group-hover:opacity-90",
                scrolled ? "h-24 md:h-28" : "h-28 md:h-32"
              )} 
            />
          </Link>

          <nav className="hidden md:flex items-center mt-7 space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.href}
                    className={cn(
                      "px-4 py-2 font-medium transition-all duration-300",
                      scrolled ? "text-gray-800" : "text-white",
                      isActive ? "text-black font-semibold" : "hover:text-ocean",
                      "text-[18px] font-sans tracking-wide"
                    )}
                  >
                    {link.name}
                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-black rounded-full transition-all duration-300",
                        isActive ? "w-2/3" : "w-0 group-hover:w-1/2"
                      )}
                    ></span>
                  </Link>
                </div>
              );
            })}

            {/* Botón E-shop */}
            <div className="ml-6 pl-6 border-l border-gray-400/40 flex items-center">
              <Link to="/e-shop">
                <Button 
                  className={cn(
                    "transition-all duration-500 flex items-center gap-2 px-4 py-2 rounded-l h-[42px]",
                    scrolled 
                      ? "bg-gradient-to-r from-ocean to-blue-600 hover:from-blue-600 hover:to-ocean shadow-md" 
                      : "bg-gradient-to-r from-ocean to-blue-600 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40",
                    "group"
                  )} 
                  variant="default"
                >
                  <ShoppingCart size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="font-semibold leading-none">E-shop</span>
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden mt-4">
            <button
              type="button"
              className={cn(
                "p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800",
                scrolled ? "text-gray-700" : "text-white"
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu - afuera del header */}
      <div
        className={cn(
          "fixed inset-0 z-[999] bg-white transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
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
    </>
  );
}
