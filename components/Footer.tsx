import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-secondary/60 py-12 border-t border-secondary/10">
      <div className="container mx-auto px-6 flex flex-col items-center text-center space-y-6">
        
        <h3 className="text-2xl font-serif font-bold text-secondary tracking-widest">PELIGRO AL FONDO</h3>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
          <p>Hecha por Jorge Martinez Romero</p>
          <a href="https://instagram.com/soyjmtz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-white transition-colors">
            <Instagram size={16} /> Instagram: @soyjmtz
          </a>
        </div>

        <p className="text-xs pt-8 border-t border-secondary/10 w-full max-w-md">
          &copy; {new Date().getFullYear()} Peligro al Fondo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;