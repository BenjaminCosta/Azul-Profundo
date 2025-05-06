
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("¡Mensaje enviado! Te contactaremos pronto.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Encabezado con imagen de fondo */}
      <section className="pt-32 pb-20 relative text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=1000')",
          }}
        >
          <div className="w-full h-full bg-ocean-dark opacity-30"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h1>
          <p className="text-xl max-w-3xl mx-auto">
            ¿Tienes alguna pregunta sobre nuestros cursos o viajes? ¿Necesitas más información? ¡Escríbenos y te responderemos lo antes posible!
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Tu correo electrónico"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-ocean hover:bg-ocean-dark text-white py-4">
                  Enviar mensaje
                </Button>
              </form>
            </div>

            {/* Información de contacto */}
            <div className="flex flex-col space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Información de contacto</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="text-ocean mr-4 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">Av. del Mar 1234, Playa Grande, Ciudad Costera</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="text-ocean mr-4 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">+123 456 7890</span>
                  </li>
                  <li className="flex items-start">
                    <Mail className="text-ocean mr-4 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">info@azulprofundo.com</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="text-ocean mr-4 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <span className="block text-gray-600">Lunes - Viernes: 9:00 - 18:00</span>
                      <span className="block text-gray-600">Sábados: 9:00 - 14:00</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Azul Profundo location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Playa%20del%20Carmen+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
