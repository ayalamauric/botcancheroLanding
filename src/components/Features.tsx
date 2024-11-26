import React from 'react';
import { MessageSquare, BarChart2, Users, Globe, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: BarChart2,
    title: 'Vendes más',
    description: 'El Bot conecta las horas libres disponibles con potenciales clientes'
  },
  {
    icon: MessageSquare,
    title: 'Reservas en línea',
    description: 'Gestiona todas tus reservas desde un sistema integrado'
  },
  {
    icon: Zap,
    title: 'Respuestas Automáticas',
    description: 'Automatiza respuestas comunes y mejora los tiempos de atención'
  },
  {
    icon: Users,
    title: 'Recordatorios Automáticos',
    description: 'Envío de recordatorios a tus clientes sobre sus próximas reservas o pagos pendientes.'
  },
  {
    icon: Globe,
    title: 'Conectado con tu billetera',
    description: 'Recibí los pagos en tu cuenta de Mercado Pago, más seguro'
  },
  {
    icon: Shield,
    title: 'Seguridad Garantizada',
    description: 'Protección de datos y cifrado de extremo a extremo'
  }
];

export default function Features() {
  return (
    <div id="features" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bot Canchero
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Integrado con Mercado Pago, aumentá tus ventas, gestioná tus reservas con nuestro sistema CRM!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-6 md:p-8 rounded-xl border border-gray-200 hover:border-green-200 hover:shadow-xl transition-all duration-300">
                <div className="bg-green-50 w-12 md:w-16 h-12 md:h-16 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 md:h-8 w-6 md:w-8 text-green-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}