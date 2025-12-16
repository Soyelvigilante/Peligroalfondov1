import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';

const Reviews: React.FC = () => {
  const reviews: Review[] = [
    { text: "Está muy rico, bien servido, buenos precios. El ambiente es lo mejor para platicar a gusto.", author: "Sofía R." },
    { text: "Muy buena cocina, los mejillones son una sorpresa increíble. Definitivamente volveré.", author: "Carlos M." },
    { text: "La comida es rica: pulpo, ensaladas frescas y el pan... uff. Servicio impecable.", author: "Ana P." }
  ];

  return (
    <section id="resenas" className="py-24 bg-[#EAE4DA]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-2">Lo que dicen de nosotros</h2>
            <div className="flex items-center gap-2">
               <div className="flex text-yellow-600">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill={i < 4 ? "currentColor" : i === 4 ? "currentColor" : "none"} className={i === 4 ? "opacity-40" : ""} />)} 
                  {/* Note: Simplified 4.4 visual representation */}
               </div>
               <span className="text-primary font-bold text-lg">4.4/5</span>
               <span className="text-primary/60 text-sm">(2,583 reseñas)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-secondary p-8 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md shadow-sm border border-primary/5 hover:scale-105 transition-transform duration-300">
              <div className="text-primary/20 mb-4 text-6xl font-serif leading-none">“</div>
              <p className="text-primary/80 italic mb-6 text-lg min-h-[80px]">
                {review.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                  {review.author.charAt(0)}
                </div>
                <span className="font-bold text-primary">{review.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;