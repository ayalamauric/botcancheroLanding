import React from 'react';
import { MessageCircle, Facebook, Instagram, Send } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¡Un Bot de WhatsApp para alquilar canchas en minutos!
            </h1>
            <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScHrgaBha0KUt6EZyfZTB3CBMIWmmovzZgwpWYfLc0SEHdmrA/viewform">¡Tengo una cancha, quiero una demo!</a>
              
            </button>
            <p className="text-xl text-gray-600 my-8">
              Alquila tu cancha en minutos a través de WhatsApp. Solo selecciona el espacio, confirma tu reserva y paga de forma fácil y segura con Mercado Pago. ¡Así de rápido y sencillo!
            </p>
          </div>
          <div className="relative">
            <img
               src="./img/Hero.png"
              alt="Chat Interface"
              className="relative mx-auto w-[300px] h-[600px] object-cover"
            />
            <div className="absolute -left-16 top-1/4">
              <Facebook className="w-12 h-12 text-blue-600 bg-white rounded-full p-2 shadow-lg" />
            </div>
            <div className="absolute -right-16 top-1/3">
              <Instagram className="w-12 h-12 text-pink-600 bg-white rounded-full p-2 shadow-lg" />
            </div>
            <div className="absolute -left-12 bottom-1/3">
              <MessageCircle className="w-12 h-12 text-green-600 bg-white rounded-full p-2 shadow-lg" />
            </div>
            <div className="absolute -right-12 bottom-1/4">
              <Send className="w-12 h-12 text-blue-400 bg-white rounded-full p-2 shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}