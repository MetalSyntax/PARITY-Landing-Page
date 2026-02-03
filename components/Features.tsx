import React from 'react';
import { FeatureProps } from '../types';

const features: FeatureProps[] = [
  {
    icon: "category",
    title: "Mapeo Inteligente",
    description: "Categoriza automáticamente tus gastos. Desde \"Comida\" hasta \"Transporte\", ordena transacciones con etiquetas intuitivas como Uber, Mercado o Delivery.",
    colorClass: "group-hover:border-primary/50 group-hover:shadow-primary/10",
    iconColorClass: "text-primary bg-primary/10 group-hover:bg-primary"
  },
  {
    icon: "timeline",
    title: "Tendencias de Saldo",
    description: "Visualiza tu salud financiera con gráficos de línea en tiempo real. Cambia entre periodos y ve la trayectoria de tu saldo al instante.",
    colorClass: "group-hover:border-orange-500/50 group-hover:shadow-orange-500/10",
    iconColorClass: "text-orange-500 bg-orange-500/10 group-hover:bg-orange-500"
  },
  {
    icon: "lock",
    title: "Protección por PIN",
    description: "Tus datos son tuyos. Bloquea la aplicación con un PIN seguro al salir. Personaliza el bloqueo automático desde 1 minuto hasta inmediato.",
    colorClass: "group-hover:border-purple-500/50 group-hover:shadow-purple-500/10",
    iconColorClass: "text-purple-500 bg-purple-500/10 group-hover:bg-purple-500"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-[#161618] border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-2">¿Por qué PARITY?</h2>
          <p className="text-3xl font-extrabold text-white sm:text-4xl">
            Herramientas Inteligentes para tu Libertad Financiera
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Diseñado para velocidad, privacidad y claridad. Todo lo que necesitas para gestionar tu economía personal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`group p-8 rounded-2xl bg-card-dark border border-gray-800 transition-all hover:shadow-lg duration-300 ${feature.colorClass}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${feature.iconColorClass}`}>
                <span className={`material-icons-round text-2xl group-hover:text-white`}>{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;