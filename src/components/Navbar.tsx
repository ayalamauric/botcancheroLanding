import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <MessageCircle className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            <a href="/" >BotCanchero</a>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-green-600">Características</a>
            <a href="#integrations" className="text-gray-600 hover:text-green-600">Encontranos</a>
            {/* <a href="#pricing" className="text-gray-600 hover:text-green-600">Precios</a> */}
            <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
            <a href="https://api.whatsapp.com/send/?phone=5491133232222&text=Hola%21&type=phone_number&app_absent=0" >¡Alquilar Cancha!</a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}