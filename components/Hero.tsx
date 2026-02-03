import React from 'react';
import PhoneMockup from './PhoneMockup';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background-dark/0 to-background-dark/0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Disponible como PWA
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white">
              Domina tus <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Finanzas.</span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Rastrea gastos, visualiza ingresos y gestiona transferencias en todas tus billeteras. Experimenta la claridad financiera con el seguimiento inteligente y diseño seguro de PARITY.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://parity-finance.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-primary hover:bg-secondary text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-primary/25">
                <span className="material-icons-round">web</span>
                <span>Abrir Web PWA</span>
              </a>
              <button disabled className="block items-center justify-center gap-3 bg-[#161618] text-gray-500 px-8 py-4 rounded-xl font-bold border border-gray-800 cursor-not-allowed opacity-75">
                <span className="material-icons-round">android</span>
                <span>Próximamente</span>
              </button>
              <button disabled className="block items-center justify-center gap-3 bg-[#161618] text-gray-500 px-8 py-4 rounded-xl font-bold border border-gray-800 cursor-not-allowed opacity-75">
                <span className="material-icons-round">apple</span>
                <span>Próximamente</span>
              </button>
            </div>
            
            {/*<div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                    <img 
                        key={i}
                        alt={`User avatar ${i}`} 
                        className="w-8 h-8 rounded-full border-2 border-background-dark bg-gray-700" 
                        src={`https://picsum.photos/32/32?random=${i}`}
                    />
                ))}
              </div>
              <p>Con la confianza de +10,000 primeros usuarios</p>
            </div>*/}
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className="relative lg:h-[700px] flex items-center justify-center">
            {/* Back Glow */}
            <div className="absolute w-72 h-72 bg-primary/30 rounded-full blur-3xl -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;