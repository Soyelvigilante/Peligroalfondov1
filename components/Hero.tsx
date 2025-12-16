import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-12 overflow-hidden bg-[#F3EEE6]">
      {/* Background Shapes/Pattern */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#E8E0D5] blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#E8E0D5] blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 animate-fade-in-up">
          <span className="inline-block py-1 px-3 border border-primary/30 rounded-full text-sm font-medium tracking-wide mb-6 text-primary/80">
            EST. 2018
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-primary mb-6">
            Brunch, comida local y café en un <span className="italic text-primary/80">oasis</span> de plantas.
          </h1>
          <p className="text-xl text-primary/80 mb-8 max-w-lg leading-relaxed font-sans">
            Restaurante tranquilo en la Col. Americana, Guadalajara. Un refugio para los sentidos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#carta" 
              className="px-8 py-4 bg-primary text-secondary rounded-full font-semibold text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Ver carta
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contacto" 
              className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold text-center hover:bg-primary hover:text-secondary transition-all duration-300"
            >
              Reservar / Llamar
            </a>
          </div>
        </div>

        {/* Hero Image Block */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-full max-w-[650px]">
             {/* Decorative blob behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#E8E0D5] rounded-full filter blur-3xl opacity-60 -z-10" />
            
            <img 
              src="./hero-image.png" 
              alt="Fachada ilustrada de Peligro al Fondo" 
              className="w-full h-auto object-contain drop-shadow-xl hover:scale-[1.01] transition-transform duration-700 mix-blend-multiply"
            />
            
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-[#F3EEE6] p-6 rounded-xl shadow-[0_10px_40px_-10px_rgba(31,47,69,0.15)] max-w-[240px] border border-primary/5 rotate-2 hover:rotate-0 transition-transform duration-300 z-20">
                <p className="font-serif italic text-primary text-lg leading-snug">"El mejor secreto de la Americana"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;