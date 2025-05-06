import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    name: "Máscara de Buceo Profesional",
    description: "Máscara de buceo con cristal templado y silicona de alta calidad para un ajuste perfecto.",
    price: "$5,900",
    image: "https://images.unsplash.com/photo-1519404012020-a8f8a4ccd899?auto=format&fit=crop&q=80&w=300",
    link: "https://www.mercadolibre.com"
  },
  {
    name: "Aletas Ajustables Aqua",
    description: "Aletas de buceo con sistema de ajuste rápido, perfectas para todo tipo de pies.",
    price: "$7,500",
    image: "https://images.unsplash.com/photo-1478515463067-d20f52aace26?auto=format&fit=crop&q=80&w=300",
    link: "https://www.mercadolibre.com"
  },
  {
    name: "Regulador Ocean Pro",
    description: "Regulador de alta calidad con primera y segunda etapa, perfecto para aguas frías y cálidas.",
    price: "$15,800",
    image: "https://images.unsplash.com/photo-1516920013835-9d49f0dc4e20?auto=format&fit=crop&q=80&w=300",
    link: "https://www.mercadolibre.com"
  },
  {
    name: "Traje de Neopreno 5mm",
    description: "Traje de neopreno de 5mm para aguas frías con cremallera dorsal y sellos en muñecas y tobillos.",
    price: "$12,500",
    image: "https://images.unsplash.com/photo-1465220183275-1faa863377e3?auto=format&fit=crop&q=80&w=300",
    link: "https://www.mercadolibre.com"
  }
];

export default function EShop() {
 
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section id="eshop" className="py-20 bg-blue-200">
          <div className="container mx-auto px-4">
            <div className="text-center pt-20 mb-16 ">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">E-Shop</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Encuentra el mejor equipo de buceo para tus aventuras submarinas. Todos nuestros productos son de alta calidad y están seleccionados por profesionales.
              </p>
              <div className="w-20 h-1 bg-ocean mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <p className="text-xl font-bold text-ocean-dark">{product.price}</p>
                  </CardContent>
                  <CardFooter>
                    <a href={product.link} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="bg-coral hover:bg-red-600 w-full">
                        Comprar en Mercado Libre
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="border-ocean text-ocean hover:bg-ocean hover:text-white">
                Ver todos los productos
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
