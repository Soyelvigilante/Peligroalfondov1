import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { ScheduleItem } from '../types';

const InfoSection: React.FC = () => {
  const schedule: ScheduleItem[] = [
    { day: "Domingo", hours: "9:00 – 21:00" },
    { day: "Lunes", hours: "9:00 – 17:00" },
    { day: "Martes", hours: "9:00 – 17:00" },
    { day: "Miércoles", hours: "9:00 – 21:00" },
    { day: "Jueves", hours: "9:00 – 23:00" },
    { day: "Viernes", hours: "9:00 – 00:00" },
    { day: "Sábado", hours: "9:00 – 00:00" },
  ];

  return (
    <section id="ubicacion" className="py-20 bg-primary text-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Horarios */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
              Horarios
              <div className="h-px bg-secondary/30 flex-grow ml-4"></div>
            </h2>
            <div className="grid gap-4">
              {schedule.map((item) => (
                <div key={item.day} className="flex justify-between items-center py-3 border-b border-secondary/10 hover:bg-secondary/5 px-2 rounded transition-colors">
                  <span className="font-medium text-lg">{item.day}</span>
                  <span className="opacity-90 font-mono">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ubicación */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
              Ubicación
              <div className="h-px bg-secondary/30 flex-grow ml-4"></div>
            </h2>
            
            <div className="bg-secondary/10 p-8 rounded-2xl backdrop-blur-sm border border-secondary/20 h-full flex flex-col justify-center">
              <MapPin className="w-12 h-12 mb-6 opacity-80" />
              <address className="not-italic text-xl mb-6 leading-relaxed opacity-90">
                C. Miguel Lerdo de Tejada 2170,<br/>
                Col Americana, 44150<br/>
                Guadalajara, Jal.
              </address>
              
              <div className="mb-8">
                <span className="text-sm uppercase tracking-widest opacity-60 block mb-1">Plus Code</span>
                <span className="font-mono text-lg">MJCH+J5 Guadalajara, Jalisco</span>
              </div>

              <a 
                href="#" 
                className="inline-flex items-center justify-center gap-2 bg-secondary text-primary px-6 py-4 rounded-xl font-bold hover:bg-white transition-colors w-full sm:w-auto"
              >
                Cómo llegar
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default InfoSection;