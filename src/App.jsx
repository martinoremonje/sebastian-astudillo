import running from './assets/running.png';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';

function MiComponente() {
  const headingText = 'Sebastian Astudillo';
  const letters = headingText.split('');
  const [animatedLetters, setAnimatedLetters] = useState([]);

  useEffect(() => {
    AOS.init();

    const timer = setTimeout(() => {
      setAnimatedLetters(letters);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [letters]);

  return (
    <>
      <div className="bg-gray-900 min-h-screen flex flex-col sm:flex-row items-center justify-center relative">
        <div className="p-8 sm:p-12 rounded-xl shadow-2xl z-10 w-full sm:w-4/5 max-w-3xl ml-8"> {/* Aquí se agrega ml-8 */}
          <h1 className="text-4xl sm:text-5xl text-white text-center mb-6 relative">
            <span className="invisible">{headingText}</span>
            <span className="absolute top-0 left-0">
              {letters.map((letter, index) => (
                <AnimatePresence key={index}>
                  {animatedLetters[index] && (
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {letter}
                    </motion.span>
                  )}
                </AnimatePresence>
              ))}
            </span>
          </h1>
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