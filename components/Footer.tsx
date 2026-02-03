import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0B0C] border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
                <img 
                    src="/images/pwa-512x512.png" 
                    alt="Parity Logo" 
                    className="w-6 h-6 rounded"
                />
              <span className="font-bold text-lg tracking-tight text-white">PARITY</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              Simplificando las finanzas personales para el mundo moderno. Privado, rápido y hermoso.
            </p>
            {/*<div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition"><span className="material-icons-round">facebook</span></a>
              <a href="#" className="text-gray-400 hover:text-primary transition"><span className="material-icons-round">alternate_email</span></a>
            </div>*/}
          </div>
          
          {/*<div>
            <h4 className="font-semibold text-white mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-primary transition">Características</a></li>
              <li><a href="#" className="hover:text-primary transition">Integraciones</a></li>
              <li><a href="#" className="hover:text-primary transition">Precios</a></li>
              <li><a href="#" className="hover:text-primary transition">Registro de cambios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition">Comunidad</a></li>
              <li><a href="#" className="hover:text-primary transition">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-primary transition">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition">Términos de Servicio</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Mantente Actualizado</h4>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Ingresa tu email" 
                className="bg-[#161618] border border-gray-800 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none rounded-lg text-sm px-4 py-2 text-white placeholder-gray-500 transition-colors"
              />
              <button 
                type="submit"
                className="bg-primary hover:bg-secondary text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>*/}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2026 PARITY Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-xs text-gray-500 items-center">
            <span>Diseñado y Desarrollado por <a href="https://metalsyntax.vercel.app/" target="_blank">MetalSyntax</a> con <span className="text-red-500">❤️</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;