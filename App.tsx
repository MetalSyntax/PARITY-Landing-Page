import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SimplicitySection from './components/SimplicitySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0B0B0C] min-h-screen text-gray-100 font-sans selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <Features />
        
        <SimplicitySection />
        
        {/* Platforms Section */}
        <section className="py-16 bg-[#161618]/50 border-t border-gray-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Disponible en tus plataformas favoritas</h2>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 opacity-80">
              <div className="flex flex-col items-center gap-3 group cursor-pointer">
                <div className="w-16 h-16 bg-[#161618] rounded-2xl flex items-center justify-center shadow-sm border border-gray-700 group-hover:border-primary/50 transition-colors">
                  <span className="material-icons-round text-3xl text-primary">web</span>
                </div>
                <span className="font-medium text-sm text-gray-300">Web PWA</span>
              </div>
              <div className="flex flex-col items-center gap-3 group cursor-pointer">
                <div className="w-16 h-16 bg-[#161618] rounded-2xl flex items-center justify-center shadow-sm border border-gray-700 group-hover:border-green-500/50 transition-colors">
                  <span className="material-icons-round text-3xl text-green-500">android</span>
                </div>
                <span className="font-medium text-sm text-gray-300">Android</span>
              </div>
              <div className="flex flex-col items-center gap-3 opacity-50 grayscale cursor-not-allowed">
                <div className="w-16 h-16 bg-[#161618] rounded-2xl flex items-center justify-center shadow-sm border border-gray-700">
                  <span className="material-icons-round text-3xl text-gray-500">apple</span>
                </div>
                <span className="font-medium text-sm text-gray-300">iOS (Pronto)</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-primary rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/30">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              <div className="relative z-10 px-8 py-16 text-center sm:px-16">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
                  ¿Listo para tomar el control?
                </h2>
                <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
                  Únete a miles de usuarios que toman decisiones financieras más inteligentes cada día con PARITY.
                </p>
                <a 
                  href="https://parity-finance.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-xl shadow-lg hover:bg-gray-50 transition transform hover:-translate-y-1"
                >
                  Empieza Gratis
                </a>
                <p className="mt-4 text-xs text-white/60">Sin tarjeta de crédito • Nivel gratuito para siempre</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;