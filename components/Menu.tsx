import React from 'react';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const items: MenuItem[] = [
    {
      name: "Chilaquiles Peligro",
      description: "Salsa de la casa (receta secreta), crema de rancho, queso cotija, cebolla morada y huevo al gusto.",
      price: "$145",
      isPopular: true
    },
    {
      name: "Enchiladas de Costilla",
      description: "Rellenas de costilla horneada lentamente por 8 horas, bañadas en salsa verde cremosa.",
      price: "$180",
      isPopular: true
    },
    {
      name: "Avocado Toast",
      description: "Pan de masa madre, puré de aguacate rústico, tomates cherry confitados y semillas.",
      price: "$135"
    },
    {
      name: "Chocolate Caliente",
      description: "Mezcla de cacaos mexicanos, espumoso y servido con malvavisco casero flameado.",
      price: "$65"
    },
    {
      name: "Pan de la Casa",
      description: "Selección diaria de nuestra panadería: roles, chocolatines o conchas recién horneadas.",
      price: "$45"
    },
    {
      name: "Capuchino",
      description: "Espresso doble con leche texturizada perfectamente. Granos de origen chiapaneco.",
      price: "$55"
    }
  ];

  return (
    <section id="carta" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary/60 font-medium tracking-widest uppercase text-sm">Nuestros favoritos</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-3">Platillos Destacados</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-primary/5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-primary/80 transition-colors">
                    {item.name}
                  </h3>
                  {item.isPopular && (
                    <span className="bg-primary text-secondary text-xs px-2 py-1 rounded-full font-bold tracking-wide">
                      POPULAR
                    </span>
                  )}
                </div>
                <p className="text-primary/70 mb-6 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-between items-center border-t border-primary/10 pt-4">
                <span className="text-xl font-bold text-primary">{item.price}</span>
                <button className="text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:underline decoration-2 underline-offset-4">
                  Ordenar
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <button className="text-primary font-bold border-b-2 border-primary hover:text-primary/70 hover:border-primary/70 transition-colors pb-1 text-lg">
                Ver menú completo
            </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;