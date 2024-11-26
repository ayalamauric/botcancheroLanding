import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaLock, FaInfoCircle, FaCog, FaExclamationTriangle } from 'react-icons/fa';

function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <Navbar />
      <main className="px-4 md:px-6 py-20">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-blue-900 my-8 md:my-12">Términos y Condiciones</h1>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-6 md:p-10">
          <p className="text-gray-800 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
            Bienvenido al servicio de chatbot <strong className="text-blue-800">botCanchero</strong>, que le permite realizar reservas de canchas de fútbol. Antes de usar nuestro chatbot, le pedimos que lea y comprenda los siguientes términos y condiciones.
          </p>
          <p className="text-gray-800 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
            Al utilizar nuestro chatbot, acepta cumplir con estos términos y condiciones en su totalidad.
          </p>

          <div className="mt-10 md:mt-12">
            <h2 className="text-xl md:text-2xl font-bold flex items-center mb-4 md:mb-6">
              <FaInfoCircle className="mr-2 text-blue-600" /> 1. Uso del Servicio
            </h2>
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">1.1</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Nuestro servicio de chatbot está diseñado para facilitar la reserva de canchas de fútbol a través de plataformas como WhatsApp y Facebook Messenger. Este servicio se ofrece para ayudarle a gestionar sus reservas de manera eficiente.
              </p>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">1.2</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Al usar nuestro chatbot, usted reconoce que toda la información proporcionada es bajo su propio riesgo, y <strong className="text-blue-800">botCanchero</strong> no es responsable de la precisión, integridad o puntualidad de dicha información proporcionada por terceros.
              </p>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">1.3</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Usted acepta usar el servicio de chatbot de manera responsable y de conformidad con las leyes y regulaciones aplicables.
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-bold flex items-center mb-4 md:mb-6">
              <FaLock className="mr-2 text-green-600" /> 2. Privacidad
            </h2>
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">2.1</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                <strong className="text-green-800">botCanchero</strong> respeta su privacidad y se compromete a proteger sus datos personales. Toda la información recopilada y procesada a través del chatbot se manejará de acuerdo con nuestra Política de privacidad, que puede consultar en nuestro sitio web.
              </p>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">2.2</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Al usar nuestro chatbot, comprende y acepta que ciertos datos personales, como su nombre y número de teléfono, pueden recopilarse y usarse para procesar sus reservas y mejorar nuestros servicios.
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-bold flex items-center mb-4 md:mb-6">
              <FaCog className="mr-2 text-yellow-600" /> 3. Propiedad intelectual
            </h2>
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">3.1</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Todos los derechos de propiedad intelectual relacionados con el chatbot, incluidos, entre otros, derechos de autor, marcas registradas y derechos de bases de datos, son propiedad exclusiva de <strong className="text-yellow-800">botCanchero</strong>.
              </p>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">3.2</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Está estrictamente prohibido copiar, modificar, distribuir, transmitir, mostrar, reproducir o usar de cualquier forma el contenido o el diseño del chatbot sin el consentimiento previo por escrito de <strong className="text-yellow-800">botCanchero</strong>.
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-bold flex items-center mb-4 md:mb-6">
              <FaExclamationTriangle className="mr-2 text-red-600" /> 4. Limitación de responsabilidad
            </h2>
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">4.1</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                <strong className="text-red-800">botCanchero</strong> no será responsable de ningún daño directo, indirecto, incidental, consecuente, especial o punitivo que surja del uso o la incapacidad de usar el chatbot, incluso si se informa de la posibilidad de tales daños.
              </p>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">4.2</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                <strong className="text-red-800">botCanchero</strong> no garantiza la disponibilidad ininterrumpida y sin errores del chatbot ni la corrección de cualquier defecto o error técnico.
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-bold flex items-center mb-4 md:mb-6">
              <FaCog className="mr-2 text-purple-600" /> 5. Modificaciones
            </h2>
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">5.1</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                <strong className="text-purple-800">botCanchero</strong> se reserva el derecho de modificar, suspender o interrumpir el servicio de chatbot en cualquier momento y sin previo aviso.
              </p>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">5.2</h3>
              <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Nos reservamos el derecho de actualizar estos términos y condiciones en cualquier momento. Recomendamos revisar esta sección periódicamente para mantenerse informado de cualquier cambio.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center mt-10 md:mt-12 bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white font-bold py-4 px-6 rounded-full max-w-4xl mx-auto text-center">
            <span className="bg-red-800 px-4 py-2 rounded-full md:rounded-l-full mb-4 md:mb-0">IMPORTANTE</span>
            <span className="px-4">
              Al utilizar nuestro servicio, acepta nuestros términos y condiciones en su totalidad. Si no está de acuerdo con alguno de estos términos, le recomendamos que no utilice el servicio.
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Terms;
