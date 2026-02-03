import React from 'react';

const PhoneMockup: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
      
      {/* Screen Content */}
      <div className="w-full h-full bg-[#0B0B0C] overflow-y-auto no-scrollbar text-white pt-10 px-4 pb-4">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Bienvenido</span>
            <span className="font-bold text-lg">Usuario</span>
          </div>
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full bg-[#161618] flex items-center justify-center border border-gray-800">
              <span className="material-icons-round text-sm text-gray-400">calendar_today</span>
            </div>
            <div className="px-3 h-10 rounded-full bg-[#161618] flex items-center gap-2 border border-gray-800 text-xs">
              <span className="text-green-400 font-medium">1 USD = 344.51</span>
            </div>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-[#161618] p-6 rounded-3xl mb-4 border border-gray-800 shadow-lg relative overflow-hidden group">
            {/* Glow effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-xl"></div>
          
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Balance Total</span>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-lg bg-black/40 flex items-center justify-center hover:bg-black/60 transition-colors">
                <span className="material-icons-round text-xs text-gray-400">swap_vert</span>
              </button>
              <button className="w-8 h-8 rounded-lg bg-black/40 flex items-center justify-center hover:bg-black/60 transition-colors">
                <span className="material-icons-round text-xs text-gray-400">visibility_off</span>
              </button>
            </div>
          </div>
          <div className="text-4xl font-mono font-bold mb-3 tracking-widest">******</div>
          <div className="inline-block px-2 py-1 bg-black/30 rounded text-[10px] text-gray-400 font-mono tracking-widest">******</div>
        </div>

        {/* Chart Card */}
        <div className="bg-[#161618] p-6 rounded-3xl mb-20 border border-gray-800 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <span className="material-icons-round text-primary text-sm">show_chart</span>
              <span className="text-[10px] font-bold text-gray-300 uppercase leading-tight">Historial de<br/>Balance</span>
            </div>
            <div className="bg-black/40 rounded-lg p-1 flex text-[10px]">
              <button className="px-2 py-1 bg-primary text-white rounded shadow">Líneas</button>
              <button className="px-2 py-1 text-gray-400">Barras</button>
              <button className="px-2 py-1 text-gray-400">7D</button>
            </div>
          </div>
          
          {/* Chart SVG */}
          <div className="h-32 w-full flex items-end justify-between gap-1 mb-4 relative">
            <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 250 120">
              <defs>
                <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#6366F1', stopOpacity:0.2}}></stop>
                  <stop offset="100%" style={{stopColor:'#6366F1', stopOpacity:0}}></stop>
                </linearGradient>
              </defs>
              <path d="M0,20 C20,20 30,50 50,55 C70,60 80,40 100,50 C120,60 130,90 150,80 C170,70 180,100 200,95 C220,90 230,110 250,120 V 150 H 0 Z" fill="url(#gradient)" stroke="none"></path>
              <path d="M0,20 C20,20 30,50 50,55 C70,60 80,40 100,50 C120,60 130,90 150,80 C170,70 180,100 200,95 C220,90 230,110 250,120" fill="none" stroke="#6366F1" strokeLinecap="round" strokeWidth="3"></path>
            </svg>
            
            {/* Fake labels */}
            <div className="w-full absolute -bottom-4 flex justify-between text-[8px] text-gray-600 font-mono">
                <span>Fri</span><span>Sat</span><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span>
            </div>
          </div>
          
          <div className="flex justify-between text-[10px] text-gray-500 uppercase font-bold mt-6">
            <span>Disponible <br/><span className="text-white tracking-widest">******</span></span>
            <span className="text-right">Tendencia <br/><span className="text-red-400">-41.8%</span></span>
          </div>
        </div>

        {/* Bottom Nav (Floating) */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[260px] bg-black/90 backdrop-blur-md rounded-full px-6 py-3 flex justify-between items-center border border-gray-800 z-30 shadow-2xl">
          <span className="material-icons-round text-gray-400 text-xl cursor-pointer hover:text-white transition">home</span>
          <span className="material-icons-round text-gray-400 text-xl cursor-pointer hover:text-white transition">account_balance_wallet</span>
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center -mt-8 border-[4px] border-[#0B0B0C] shadow-lg shadow-primary/40 cursor-pointer hover:bg-secondary transition">
            <span className="material-icons-round text-white text-2xl">add</span>
          </div>
          <span className="material-icons-round text-gray-400 text-xl cursor-pointer hover:text-white transition">pie_chart</span>
          <span className="material-icons-round text-gray-400 text-xl cursor-pointer hover:text-white transition">person</span>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;