import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, User, Smartphone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("¡Mensaje enviado! Te contactaremos pronto.");
    setFormData({ 
      firstName: "", 
      lastName: "", 
      phone: "", 
      email: "", 
      message: "" 
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=1000')",
          }}
        >
          <div className="w-full h-full bg-ocean-dark/40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Contacta con Nosotros
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium drop-shadow-md">
            ¿Preguntas sobre cursos o viajes? Escríbenos y te responderemos pronto.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Sección Izquierda - Formulario Ampliado */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-ocean mb-6 border-b pb-4">
                    Formulario de Contacto
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Nombre */}
                      <div>
                        <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                          Nombre *
                        </label>
                        <div className="relative">
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Ej: María"
                            className="pl-10 py-4 text-base"
                            required
                          />
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        </div>
                      </div>
                      
                      {/* Apellido */}
                      <div>
                        <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                          Apellido *
                        </label>
                        <div className="relative">
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Ej: González"
                            className="pl-10 py-4 text-base"
                            required
                          />
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        </div>
                      </div>
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Teléfono *
                      </label>
                      <div className="relative">
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Ej: +54 11 1234 5678"
                          className="pl-10 py-4 text-base"
                          required
                        />
                        <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Ej: ejemplo@email.com"
                          className="pl-10 py-4 text-base"
                          required
                        />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      </div>
                    </div>

                    {/* Mensaje */}
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Mensaje *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Escribe tu consulta aquí..."
                        rows={6}
                        className="text-base p-4"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-ocean hover:bg-ocean-dark text-white py-6 text-lg mt-2"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensaje
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Sección Derecha - Información de Contacto (se mantiene igual) */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-ocean mb-6 border-b pb-4">
                    Nuestra Información
                  </h2>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <div className="bg-ocean/10 p-3 rounded-full mr-4">
                        <MapPin className="text-ocean" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Dirección</h3>
                        <p className="text-gray-600">Av. del Mar 1234, Playa Grande, Ciudad Costera</p>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="bg-ocean/10 p-3 rounded-full mr-4">
                        <Phone className="text-ocean" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Teléfono</h3>
                        <p className="text-gray-600">+123 456 7890</p>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="bg-ocean/10 p-3 rounded-full mr-4">
                        <Mail className="text-ocean" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Email</h3>
                        <p className="text-gray-600">info@azulprofundo.com</p>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="bg-ocean/10 p-3 rounded-full mr-4">
                        <Clock className="text-ocean" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Horario</h3>
                        <p className="text-gray-600">Lunes - Viernes: 9:00 - 18:00</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 px-4">Nuestra Ubicación</h3>
                  <div className="w-full h-80 rounded-lg overflow-hidden">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}