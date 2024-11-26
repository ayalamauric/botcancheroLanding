import React from 'react';
import { Mail, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <a href="/">
                <img
                  src="https://res.cloudinary.com/ddekstazc/image/upload/v1732246180/logolargo_ilnyav.png"
                  alt="Logo"
                  className="h-6 md:h-8"
                />
              </a>
            </div>
            <p className="text-sm">Conecta amigos, conecta el deporte</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:hola@botcanchero.com" className="hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Accesos Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="/#integrations" className="hover:text-white transition-colors">
                  Encontranos
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=5491133232222&text=Hola%21&type=phone_number&app_absent=0"
                  className="hover:text-white transition-colors"
                >
                  Alquilar Cancha
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Seguridad y Datos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Términos & Condiciones
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Políticas de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Ubicación</h3>
            <ul className="space-y-2 text-sm">
              <li>Dirección: Juan Domingo Perón 702</li>
              <li>Ciudad: Resistencia, Chaco 🇦🇷</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Botcanchero. Todos los derechos reservados | creado con ❤️
            en Resistencia
          </p>
        </div>
      </div>
    </footer>
  );
}
