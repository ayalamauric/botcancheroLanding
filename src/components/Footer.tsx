import React from 'react';
import { Github, Twitter, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
          <div className="flex items-center">
            {/* Reemplazar el MessageCircle con el logo */}
            <img src='https://res.cloudinary.com/ddekstazc/image/upload/v1732246180/logolargo_ilnyav.png' alt="Logo" className="h-6" />
           
          </div>
            <p className="text-sm">Conecta amigos, conecta el deporte </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Accesos Rapidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Características</a></li>
              <li><a href="/#integrations" className="hover:text-white transition-colors">Encontranos</a></li>
              <li><a href="https://api.whatsapp.com/send/?phone=5491133232222&text=Hola%21&type=phone_number&app_absent=0" className="hover:text-white transition-colors">Alquilar Cancha</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: hola@botcanchero.com</li>
              <li>Dirección: Juan Domingo Perón 702</li>
              <li>Ciudad: Resistencia, Chaco 🇦🇷</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Botcanchero. All rights reserved. | creado con ❤️ en Resistencia</p>
        </div>
      </div>
    </footer>
  );
}