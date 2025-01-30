import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashVideo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/slider"); // Cambia a false después de 2 segundos
    }, 2000); // 2 segundos

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, []); // Solo se ejecuta una vez al montar el componente
  const handleVideoEnd = () => {
    navigate("/slider");
  };
  return (
    <div className="h-screen w-full lg:w-[415px] overflow-hidden bg-black text-white relative mx-auto">
      <div className="h-full w-full flex items-center justify-center">
        {/* <video
              src="/video/portada.mp4"
              className="w-full h-full object-cover pointer-events-none"
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={() => setShowIntro(false)}
            /> */}
        <div className="relative w-full h-full">
          {/* Imagen de fondo */}
          <img
            src="/img/restaurant.svg"
            alt="Spanish"
            className="w-full h-full object-cover"
          />

          {/* Imagen centrada */}
          <img
            src="/img/Logo_Restaurant.svg" // Aquí pon la ruta de tu imagen pequeña
            alt="Sushi Logo"
            className="absolute top-1/2 left-1/2 w-222 h-35 transform -translate-x-1/2 -translate-y-1/2"
          />
          {/* Imagen adicional centrada al final */}
          <img
            src="/img/Footer.svg" // Aquí pon la ruta de tu imagen adicional
            alt="Additional Image"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default SplashVideo;
