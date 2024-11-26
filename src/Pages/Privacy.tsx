import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaLock, FaUserShield, FaShareAlt, FaShieldAlt, FaExternalLinkAlt, FaCog } from 'react-icons/fa';

function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <Navbar />
      <main className="px-4 md:px-6 py-20">
        <h1 className="text-3xl md:text-5xl font-black text-center text-blue-900 my-8 md:my-12">Política de Privacidad</h1>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-6 md:p-10">
          <p className="text-gray-800 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
            Esta Política de privacidad describe como <strong className="text-blue-800">botCanchero</strong> recopila, usa y protege la información personal que proporciona cuando utiliza nuestro servicio de chatbot a través de WhatsApp y Facebook Messenger. Nos comprometemos a proteger su privacidad y garantizar la confidencialidad de sus datos personales.
          </p>
          <p className="text-gray-800 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
            Al utilizar nuestro chatbot, acepta los términos de esta Política de privacidad.
          </p>

          <div className="mt-10 md:mt-12">
            <h2 className="text-xl md:text-2xl font-bold flex items-center mb-4 md:mb-6">
              <FaUserShield className="mr-2 text-blue-600" /> 1. Información recopilada
            </h2>
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">1.1</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Podemos recopilar información personal que proporcione voluntariamente al interactuar con nuestro chatbot, como su nombre, dirección de correo electrónico y número de teléfono.
              </p>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">1.2</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Además, podemos recopilar información no personal, como datos de navegación y patrones de uso, que no identifican directamente a una persona.
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-bold flex items-center mb-4 md:mb-6">
              <FaLock className="mr-2 text-green-600" /> 2. Uso de la información recopilada
            </h2>
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">2.1</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Usamos la información personal que recopilamos para proporcionar y mejorar nuestros servicios de chatbot, responder a sus consultas y enviarle información relevante relacionada con el chatbot.
              </p>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">2.2</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                La información no personal se utiliza para análisis estadísticos y para mejorar la funcionalidad y el rendimiento del chatbot.
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-bold flex items-center mb-4 md:mb-6">
              <FaShareAlt className="mr-2 text-yellow-600" /> 3. Compartir información personal
            </h2>
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">3.1</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                No vendemos, alquilamos ni divulgamos su información personal a terceros a menos que sea necesario para cumplir con los requisitos legales, proteger nuestros derechos legales o responder a una orden judicial.
              </p>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">3.2</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Podemos compartir información no personal agregada y anonimizada con fines de análisis y marketing.
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-bold flex items-center mb-4 md:mb-6">
              <FaShieldAlt className="mr-2 text-red-600" /> 4. Seguridad de la información
            </h2>
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">4.1</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                <strong className="text-red-800">botCanchero</strong> implementa medidas de seguridad técnicas, administrativas y físicas para proteger la información personal contra el acceso no autorizado, el uso indebido y la divulgación.
              </p>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">4.2</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Sin embargo, no podemos garantizar la seguridad absoluta de la información transmitida a través de Internet. El uso del chatbot es bajo su propio riesgo.
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-bold flex items-center mb-4 md:mb-6">
              <FaExternalLinkAlt className="mr-2 text-purple-600" /> 5. Enlaces externos
            </h2>
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">5.1</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Nuestro chatbot puede contener enlaces a sitios web de terceros que no están bajo nuestro control. No somos responsables de las prácticas de privacidad ni del contenido de esos sitios.
              </p>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">5.2</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Recomendamos revisar las políticas de privacidad de los sitios web de terceros antes de proporcionarles cualquier información personal.
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-bold flex items-center mb-4 md:mb-6">
              <FaCog className="mr-2 text-purple-600" /> 6. Cambios en la Política de Privacidad
            </h2>
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">6.1</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio se publicará en nuestro sitio web y el uso continuado del chatbot constituirá su aceptación de dichos cambios.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center mt-10 md:mt-12 bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white font-bold py-4 px-6 rounded-full max-w-4xl mx-auto text-center">
            <span className="bg-red-800 px-4 py-2 rounded-full md:rounded-l-full mb-4 md:mb-0">IMPORTANTE</span>
            <span className="px-4">
              Al utilizar nuestro servicio, acepta nuestra Política de Privacidad en su totalidad. Si no está de acuerdo con alguno de estos términos, le recomendamos que no utilice el servicio.
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Privacy;
