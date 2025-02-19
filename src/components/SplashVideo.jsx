import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SplashVideo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/TikTokmenu"); // Cambia a false después de 2 segundos
    }, 2500); // 2 segundos

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, []); // Solo se ejecuta una vez al montar el componente
  const handleVideoEnd = () => {
    navigate("/TikTokmenu");
  };
  return (
    <div className="h-[100dvh] w-full lg:w-[415px] overflow-hidden bg-black text-white relative mx-auto">
      <div className="h-[100dvh] w-full flex items-center justify-center">
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

          <motion.img
            src="/img/restaurant.svg"
            alt="Spanish"
            className="w-full h-full object-cover"
            initial={{ y: "-100%", opacity: 0 }} // Empieza fuera de la pantalla (arriba)
            animate={{ y: 0, opacity: 1 }} // Llega a su posición normal
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
          />

          {/* Imagen que llega desde la izquierda con un retraso */}
          <motion.img
            src="/img/Logo_Restaurant.svg"
            alt="Sushi Logo"
            className="absolute top-1/2 left-1/2 w-222 h-35 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ x: "-100%", opacity: 0 }} // Inicia desde fuera de la pantalla (izquierda)
            animate={{ x: "-50%", opacity: 1 }} // Llega a su posición centrada
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 1,
            }} // Se retrasa 0.5s
          />
          {/* Imagen adicional centrada al final */}
          <motion.img
            src="/img/Footer.svg" // Aquí pon la ruta de tu imagen adicional
            alt="Additional Image"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            initial={{ x: "100%", opacity: 0 }} // Inicia desde fuera de la pantalla (izquierda)
            animate={{ x: "-50%", opacity: 1 }} // Llega a su posición centrada
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 1,
            }} // Se retrasa 0.5s
          />
        </div>
      </div>
    </div>
  );
};

export default SplashVideo;
