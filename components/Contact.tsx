import React from 'react';
import { Phone, Instagram, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 border border-primary/10">
          
          {/* Info Side */}
          <div className="bg-primary text-secondary p-12 lg:col-span-2 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl font-serif font-bold mb-6">Contáctanos</h2>
                <p className="mb-8 opacity-80 text-lg">
                ¿Quieres reservar una mesa grande o tienes alguna duda? Escríbenos.
                </p>
                
                <div className="space-y-6">
                    <a href="tel:3338256197" className="flex items-center gap-4 text-xl font-bold hover:text-white transition-colors">
                        <Phone /> 33 3825 6197
                    </a>
                    
                    <div className="flex flex-col gap-3 mt-8">
                        <button className="flex items-center justify-center gap-2 bg-secondary text-primary py-3 px-6 rounded-lg font-bold hover:bg-opacity-90 transition-all w-full">
                            <Phone size={18} /> Llamar ahora
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-green-700 transition-all w-full">
                            <MessageCircle size={18} /> WhatsApp
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-bold hover:opacity-90 transition-all w-full">
                            <Instagram size={18} /> Instagram
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-12 relative z-10">
                 <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                    <span className="w-2 h-2 bg-rainbow rounded-full animate-pulse bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"></span>
                    <span className="text-xs font-bold tracking-wider uppercase">Amigable con LGBTQ+</span>
                 </div>
            </div>
            
            {/* Decoration Circles */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute top-12 -left-12 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
          </div>

          {/* Form Side */}
          <div className="p-12 lg:col-span-3 bg-secondary/30">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-primary uppercase tracking-wide">Nombre</label>
                        <input type="text" id="name" className="w-full bg-white border border-primary/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-primary" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-primary uppercase tracking-wide">Email</label>
                        <input type="email" id="email" className="w-full bg-white border border-primary/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-primary" placeholder="tucorreo@ejemplo.com" />
                    </div>
                </div>
                
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-primary uppercase tracking-wide">Mensaje</label>
                    <textarea id="message" rows={4} className="w-full bg-white border border-primary/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-primary resize-none" placeholder="¿En qué podemos ayudarte?"></textarea>
                </div>

                <button type="submit" className="bg-primary text-secondary px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:translate-x-2 transition-transform duration-300 shadow-lg hover:shadow-xl">
                    Enviar mensaje <Send size={18} />
                </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;