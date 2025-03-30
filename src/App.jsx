import running from './assets/running.png';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MiComponente() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="bg-gray-900 min-h-screen flex flex-col sm:flex-row items-center justify-center relative">
        <div data-aos="fade-up" className="p-8 sm:p-12 rounded-xl shadow-2xl z-10 w-full sm:w-4/5 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl text-white text-center mb-6">Sebastian Astudillo</h1>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-8 overflow-hidden">
            <p className="text-gray-300 text-lg mb-8 text-center sm:text-left">
              ¡Hola a todos! Les doy la más cordial bienvenida a mi espacio en la web. Soy Sebastián Astudillo, un apasionado del ejercicio físico, la carrera y el fútbol amateur.
            </p>
            <img src={running} alt="running photo" className="w-full sm:w-80" />
          </div>
        </div>
        <div className="mt-12 mb-5 mx-auto text-center p-8 rounded-lg shadow-lg bg-gray-800 z-20">
          <h3 className="text-white font-bold mb-2 text-2xl">Contacto</h3> 
          <p className="text-gray-300 mb-4">Celular: +56 9 3453450</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              window.location.href = 'mailto:tuemail@outlook.com';
            }}
          >
            Enviar correo por Outlook
          </button>
        </div>
        <div className="absolute inset-0 border-4 border-green-400 neon-border rounded-lg z-0"></div>
      </div>
    </>
  );
}

export default MiComponente;