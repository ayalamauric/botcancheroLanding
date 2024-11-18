import React from 'react';
import { Facebook, Instagram, Send } from 'lucide-react';
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const platforms = [
  { name: 'Instagram', icon: FaInstagram, color: 'text-pink-600' },
  { name: 'Facebook', icon: Facebook, color: 'text-blue-600' },
  { name: 'Tiktok', icon: FaTiktok, color: 'text-black' }, // Actualizado a FaTiktok
  { name: 'Telegram', icon: FaTelegramPlane, color: 'text-blue-400' },
  { name: 'X', icon:  FaXTwitter, color: 'text-black-400' },
];

export default function Integrations() {
  return (
    <div id="integrations" className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestras redes sociales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Botcanchero creado con ❤️ en Resistencia, Chaco al Mundo.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center">
                  <Icon className={`w-16 h-16 ${platform.color} mb-4`} />
                  <h3 className="text-lg font-semibold text-gray-900">{platform.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}