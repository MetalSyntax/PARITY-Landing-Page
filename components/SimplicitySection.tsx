import React from 'react';

const SimplicitySection: React.FC = () => {
  return (
    <section id="dashboard" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Visual Side (Calculator) */}
          <div className="lg:col-span-7 mb-10 lg:mb-0 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary/20 rounded-full blur-3xl"></div>
            
            <div className="bg-[#0B0B0C] rounded-3xl p-6 shadow-2xl border border-gray-800 relative z-10 max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Expense Display */}
              <div className="flex justify-center mb-8 mt-4">
                <div className="text-center">
                  <span className="text-6xl font-bold text-white tracking-tighter">$0</span>
                </div>
              </div>
              
              {/* Type Selectors */}
              <div className="flex justify-center gap-3 mb-8">
                <button className="px-4 py-2 bg-input-dark rounded-full text-sm font-medium text-white flex items-center gap-1 border border-gray-700 hover:border-gray-500 transition-colors">
                  USD <span className="material-icons-round text-xs">expand_more</span>
                </button>
                <button className="px-4 py-2 bg-input-dark rounded-full text-sm font-medium text-white flex items-center gap-2 border border-gray-700 hover:border-gray-500 transition-colors">
                  <span className="material-icons-round text-xs">savings</span> Efectivo
                </button>
              </div>

              {/* Note and Category (Mock) */}
              <div className="flex gap-2 mb-8 px-2">
                 <div className="flex-1 bg-input-dark rounded-xl h-12 flex items-center px-4 text-gray-500 text-sm border border-gray-800">Write note...</div>
                 <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white"><span className="material-icons-round">mic</span></div>
              </div>

              {/* Numpad */}
              <div className="grid grid-cols-3 gap-y-6 gap-x-4 text-center text-white text-2xl font-medium mb-8 px-4">
                {['1','2','3','4','5','6','7','8','9','.', '0'].map(num => (
                    <div key={num} className="py-2 hover:bg-gray-800 rounded-lg cursor-pointer transition select-none">{num}</div>
                ))}
                <div className="py-2 hover:bg-gray-800 rounded-lg cursor-pointer transition flex items-center justify-center">
                  <span className="material-icons-round text-xl">backspace</span>
                </div>
              </div>

              {/* Save Button */}
              <button className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/40 flex items-center justify-center gap-2 transition-colors">
                Guardar Gasto <span className="material-icons-round">check</span>
              </button>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-extrabold text-white mb-6">
              El Poder de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Simplicidad</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Añadir una transacción no debería ser una tarea pesada. Con nuestra interfaz optimizada, atajos de categorización y monedas por defecto, puedes registrar gastos en segundos.
            </p>
            <ul className="space-y-8">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20">
                    <span className="material-icons-round text-green-500 text-xl">bolt</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-white">Entrada Ultrarrápida</h4>
                  <p className="mt-1 text-gray-400 text-sm leading-relaxed">Teclado grande y flujo intuitivo diseñado para uso con una sola mano, ideal para registrar sobre la marcha.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <span className="material-icons-round text-blue-500 text-xl">widgets</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-white">Categorías Personalizadas</h4>
                  <p className="mt-1 text-gray-400 text-sm leading-relaxed">Crea y mapea subcategorías ilimitadas para un seguimiento granular de a dónde va realmente tu dinero.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplicitySection;