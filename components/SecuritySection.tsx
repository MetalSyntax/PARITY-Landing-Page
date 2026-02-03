import React from 'react';

const SecuritySection: React.FC = () => {
  return (
    <section id="security" className="py-24 bg-[#0B0B0C] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <div className="relative bg-[#161618] border border-gray-800 rounded-3xl p-10 flex flex-col items-center shadow-2xl">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                  <span className="material-icons-round text-primary text-5xl">lock</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Bloqueo de Seguridad</h3>
                
                {/* PIN Mockup */}
                <div className="grid grid-cols-3 gap-4 w-full max-w-[240px]">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <div key={num} className="w-full aspect-square rounded-full border border-gray-700 flex items-center justify-center text-xl text-gray-400 font-semibold hover:bg-gray-800 transition-colors cursor-default">
                      {num}
                    </div>
                  ))}
                  <div className="col-start-2 w-full aspect-square rounded-full border border-gray-700 flex items-center justify-center text-xl text-gray-400 font-semibold">0</div>
                </div>
                
                <p className="mt-8 text-sm text-gray-500 text-center">
                  Tus datos financieros están protegidos localmente con encriptación y acceso por PIN.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 mb-12 lg:mb-0">
            <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-4">Privacidad Primero</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight">
              Tus datos solo pertenecen <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">a tus ojos.</span>
            </h3>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              En PARITY, la privacidad no es una opción, es la base de todo. No almacenamos tus credenciales bancarias y toda la información sensible se queda en tu dispositivo.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                  <span className="material-icons-round text-purple-500">verified_user</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Sin Rastreadores</h4>
                  <p className="text-gray-400 text-sm">No vendemos tus datos ni rastreamos tu comportamiento para publicidad.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <span className="material-icons-round text-green-500">phonelink_lock</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Bloqueo Inteligente</h4>
                  <p className="text-gray-400 text-sm">Configura el auto-bloqueo para que la app se proteja en cuanto dejes de usarla.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
