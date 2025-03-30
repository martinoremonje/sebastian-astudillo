import running from './assets/running.png';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MiComponente() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col sm:flex-row items-center justify-center relative">
      {/* Div de saludo y contenido principal */}
      <div data-aos="fade-up" className="p-8 sm:p-12 rounded-xl shadow-2xl z-10 w-full sm:w-4/5 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl text-white text-center mb-6">Sebastian Astudillo</h1>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-8 overflow-hidden">
          <p className="text-gray-300 text-lg mb-8 text-center sm:text-left">
            ¡Hola a todos! Les doy la más cordial bienvenida a mi espacio en la web. Soy Sebastián Astudillo, un apasionado del ejercicio físico, la carrera y el fútbol amateur.
          </p>
          <img src={running} alt="running photo" className="w-full sm:w-80" />
        </div>
      </div>

      {/* Div de contacto */}
      <div className="mt-12 w-full sm:w-1/2 max-w-md mx-auto text-center p-8 rounded-lg shadow-lg bg-gray-800">
        <h3 className="text-white font-bold mb-2 text-2xl">Contacto</h3>
        <p className="text-gray-300 mb-4">Celular: +56 9 3453450</p>
        <a
          href="mailto:tuemail@outlook.com"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Enviar correo por Outlook
        </a>
      </div>

      <div className="absolute inset-px border-4 border-green-400 neon-border rounded-lg"></div>
    </div>
  );
}

export default MiComponente;