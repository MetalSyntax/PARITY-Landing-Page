import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#0B0B0C]/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src="https://parity-finance.vercel.app/pwa-512x512.png" 
              alt="Parity Logo" 
              className="w-8 h-8 rounded-lg"
            />
            <span className="font-bold text-xl tracking-tight text-white">PARITY</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">Características</a>
            <a href="#dashboard" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">Panel</a>
            <a href="#security" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">Seguridad</a>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://parity-finance.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-secondary text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-primary/30"
            >
              Lanzar App
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;