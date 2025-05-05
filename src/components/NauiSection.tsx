
export default function NauiSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">NAUI</h2>
          <div className="w-20 h-1 bg-ocean mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Más de 60 años al servicio de la comunidad del buceo
          </h3>
          
          <div className="space-y-6 text-gray-600">
            <p>
              Convertirte en un buzo NAUI es el primer paso para convertirte en un buzo educado, seguro e independiente. Ya sea que seas nuevo en esto o un experimentado entusiasta del buceo, NAUI te ofrece certificaciones basadas en más de 60 años de experiencia que te brindarán la habilidad y la capacidad para convertirte en mucho más que un buzo certificado.
            </p>
            
            <p>
              Desde 1960, los miembros de la National Association of Underwater Instructors (NAUI Worldwide) han estado entrenando y desarrollando a los mejores buceadores del mundo. NAUI es la agencia de certificación sin fines de lucro líder en la industria del buceo, y dedica sus recursos a ofrecerte una experiencia educativa completa en todos los niveles de capacitación, brindándote la habilidad y la confianza necesarias para disfrutar una vida de diversión, emoción y aventura, cualquiera sea tu nivel de certificación.
            </p>
            
            <p>
              Convertirse en un buzo NAUI significa obtener una certificación para bucear que te identifica como alguien que ha demostrado tener las habilidades para ser competente y a la vez sentirte seguro como buzo.
            </p>
            
            <p>
              El buceo puede conducir a aventuras en lugares tropicales exóticos y una emocionante profesión de por vida en cualquier parte del mundo. Elegir la capacitación de NAUI significa que solo estás satisfecho con lo mejor. NAUI tiene los más altos estándares de capacitación en la industria del buceo y los buzos de NAUI disfrutan de una reputación mundial por ser exploradores submarinos consumados donde cada respiración abre una nueva página en un viaje hacia lo desconocido.
            </p>
            
            <p>
              El buceo es la actividad de juego de rol definitiva, en la que vivís cada momento y te aventurás en lugares donde nadie más ha estado antes. Experimentá la ingravidez como un astronauta orbitando la Tierra. Respirás bajo el agua mientras estás suspendido en un mundo acuático fresco y refrescante. Observás peces extraños y exóticos y otros habitantes de las profundidades como sólo lo hacen otros buceadores de NAUI.
            </p>
          </div>
          
          <div className="mt-8 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600" 
              alt="NAUI Diving" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
