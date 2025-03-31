import React, { useState } from 'react';

function EmailForm() {
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    const subject = `Mensaje de usuario desde tu sitio web (${userEmail})`;
    const body = `Correo del usuario: ${userEmail}\nMensaje: ${message}`;
    window.location.href = `mailto:sebastian@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="space-y-4 md:w-[32vw] w-[70vw]">
      <input
        type="email"
        placeholder="Tu correo electrónico"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        className="w-full p-2 border rounded bg-white"
      />
      <textarea
        placeholder="Tu mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border rounded bg-white"
      />
      <button
        onClick={handleSendEmail}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Enviar mensaje a Sebastian
      </button>
    </div>
  );
}

export default EmailForm;