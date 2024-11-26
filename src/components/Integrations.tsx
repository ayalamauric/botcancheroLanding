import React from 'react';
import { Facebook, Instagram, Send } from 'lucide-react';
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const platforms = [
  { name: 'Instagram', icon: FaInstagram, color: 'text-pink-600', link: 'https://www.instagram.com/botcanchero' },
  { name: 'Telegram', icon: FaTelegramPlane, color: 'text-blue-400', link: 'https://t.me/+541133232222' },
  { name: 'Tiktok', icon: FaTiktok, color: 'text-black', link: 'https://www.tiktok.com/botcanchero' },
  { name: 'X', icon: FaXTwitter, color: 'text-black-400', link: 'https://twitter.com/botcanchero' },
  { name: 'Facebook', icon: Facebook, color: 'text-blue-600', link: 'https://www.facebook.com/botcanchero' },
];

export default function Integrations() {
  return (
    <div id="integrations" className="py-16 md:py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Encontranos en
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Botcanchero creado con ❤️ en Resistencia, Chaco al Mundo.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <a 
                key={index} 
                href={platform.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center">
                  <Icon className={`w-12 md:w-16 h-12 md:h-16 ${platform.color} mb-4`} />
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">{platform.name}</h3>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
