export default function NauiSection() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">NAUI</h2>
          <div className="w-20 h-1 bg-ocean mx-auto rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Más de 60 años formando exploradores del mundo submarino
          </h3>

          <div className="space-y-6 text-gray-700">
            <p>
              NAUI (National Association of Underwater Instructors) es una organización sin fines de lucro con una sólida trayectoria en la formación de buzos. Desde 1960, ha brindado programas educativos de alta calidad para todos los niveles, desde principiantes hasta profesionales del buceo.
            </p>

            <p>
              Convertirte en un buzo NAUI significa recibir una formación rigurosa, personalizada y orientada a la seguridad, con el respaldo de más de seis décadas de experiencia. Su filosofía prioriza el aprendizaje integral, combinando teoría, práctica y conciencia ambiental.
            </p>

            <p>
              Ya sea que busques una certificación recreativa o quieras iniciar una carrera en el mundo del buceo, NAUI te proporciona las herramientas y la confianza necesarias para explorar con responsabilidad y autonomía.
            </p>

            <p>
              La certificación NAUI es reconocida a nivel mundial, y te permite sumergirte en aventuras únicas, trabajar en centros de buceo internacionales o simplemente disfrutar del mar desde una nueva perspectiva.
            </p>

            <p>
              Con NAUI, cada inmersión se transforma en una experiencia inolvidable: flotás en un mundo sin gravedad, rodeado de criaturas fascinantes, descubriendo paisajes ocultos bajo la superficie.
            </p>
          </div>

          <div className="mt-10">
            <img
              src="/imagenes/naui2.jpg"
              alt="NAUI Diving"
              className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
