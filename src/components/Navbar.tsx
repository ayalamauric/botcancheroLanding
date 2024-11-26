import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-gray-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/">
              <img src='https://res.cloudinary.com/ddekstazc/image/upload/v1732246180/logolargo_ilnyav.png' alt="Logo" className="h-7" />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-green-600">Características</a>
            <a href="#integrations" className="text-white hover:text-green-600">Encontranos</a>
            <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
              <a href="https://api.whatsapp.com/send/?phone=5491133232222&text=Hola%21&type=phone_number&app_absent=0">
                ¡Alquilar Cancha!
              </a>
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-4 py-6 space-y-4">
            <a href="#features" className="block text-white hover:text-green-600">Características</a>
            <a href="#integrations" className="block text-white hover:text-green-600">Encontranos</a>
            <a
              href="https://api.whatsapp.com/send/?phone=5491133232222&text=Hola%21&type=phone_number&app_absent=0"
              className="block bg-green-600 text-white text-center px-8 py-3 rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              ¡Alquilar Cancha!
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}