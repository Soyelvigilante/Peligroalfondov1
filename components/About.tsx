import React from 'react';
import { Coffee, Sun, Utensils } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Sun size={32} />,
      title: "Ambiente relajado",
      desc: "Espacios abiertos llenos de luz natural y vegetación para desconectar de la ciudad."
    },
    {
      icon: <Utensils size={32} />,
      title: "Porciones bien servidas",
      desc: "Platillos generosos preparados con ingredientes locales y mucho amor."
    },
    {
      icon: <Coffee size={32} />,
      title: "Café y pan imperdibles",
      desc: "Barra de especialidad y panadería hecha en casa todas las mañanas."
    }
  ];

  return (
    <section className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">Sobre el lugar</h2>
          <p className="text-lg text-primary/70 leading-relaxed">
            Peligro al Fondo no es solo un restaurante, es una experiencia de calma en medio del caos. 
            Nuestra cocina honesta y nuestro entorno verde crean el balance perfecto para disfrutar 
            sin prisa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-secondary p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-primary/5 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-serif">{item.title}</h3>
              <p className="text-primary/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;