import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
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

      {/* Hero Section Mejorada */}
      <section className="pt-32 pb-20 relative text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=1000')",
          }}
        >
          <div className="w-full h-full bg-ocean-dark/30"></div>
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

      {/* Contenido Mejorado */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Sección Izquierda - Imagen y Formulario */}
            <div className="space-y-8">
              {/* Imagen Decorativa */}
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1563967949-d97cba787cae?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Buceadores en formación"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Tarjeta de Formulario */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-ocean mb-6">
                    Envíanos un Mensaje
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Nombre Completo
                      </label>
                      <div className="relative">
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ej: María González"
                          className="pl-10 py-5 text-base"
                          required
                        />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          👤
                        </span>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Correo Electrónico
                      </label>
                      <div className="relative">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Ej: ejemplo@email.com"
                          className="pl-10 py-5 text-base"
                          required
                        />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          ✉️
                        </span>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Tu Mensaje
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="¿En qué podemos ayudarte?"
                        rows={5}
                        className="text-base p-4"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-ocean hover:bg-ocean-dark text-white py-6 text-lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensaje
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Sección Derecha - Información de Contacto */}
            <div className="space-y-8">
              {/* Tarjeta de Información */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-ocean mb-6">
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
                        <p className="text-gray-600">+987 654 3210</p>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="bg-ocean/10 p-3 rounded-full mr-4">
                        <Mail className="text-ocean" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Email</h3>
                        <p className="text-gray-600">info@azulprofundo.com</p>
                        <p className="text-gray-600">cursos@azulprofundo.com</p>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="bg-ocean/10 p-3 rounded-full mr-4">
                        <Clock className="text-ocean" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Horario</h3>
                        <p className="text-gray-600">Lunes - Viernes: 9:00 - 18:00</p>
                        <p className="text-gray-600">Sábados: 9:00 - 14:00</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mapa */}
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