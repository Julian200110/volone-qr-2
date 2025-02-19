import React, { useRef, useState } from "react";
import useInView from "../hooks/useInView";
import useStore from "../store/store";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
let globalPlayingVideoRef = null;

const MenuItem = ({ post, postIndex }) => {
  const { idMenu } = useStore();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isInView = useInView(containerRef, { threshold: 0 });
  const buttonRefs = useRef([]);
  const {
    cartItems,
    language,
    favorites,
    toggleFavorite,
    addToCart,
    setSelectedItem,
  } = useStore();
  const carItemsTitle = cartItems.map((producto) => producto.title);
  const handleAddToCart = (item, index) => {
    console.log(carItemsTitle);
    const buttonRef = buttonRefs.current[index];
    if (buttonRef) {
      const startRect = buttonRef.getBoundingClientRect();

      const floatingIcon = document.createElement("div");
      floatingIcon.className = "floating-icon";
      floatingIcon.style.position = "fixed";
      floatingIcon.style.left = `${
        startRect.left + startRect.width / 2 - 10
      }px`;
      floatingIcon.style.top = `${startRect.top + startRect.height / 2 - 10}px`;
      floatingIcon.style.zIndex = 1000;

      const buttonIcon = buttonRef.querySelector("svg").cloneNode(true);
      buttonIcon.style.width = "20px";
      buttonIcon.style.height = "20px";
      buttonIcon.style.color = "white";
      floatingIcon.appendChild(buttonIcon);

      document.body.appendChild(floatingIcon);
      floatingIcon.animate(
        [
          { transform: "translateY(0)", opacity: 1 },
          { transform: "translateY(-1000px)", opacity: 0.2 },
        ],
        {
          duration: 800,
          easing: "ease-in-out",
        }
      ).onfinish = () => {
        document.body.removeChild(floatingIcon);
        addToCart(item);
      };
    }
  };
  const handleContainerClick = () => {
    if (post.video && videoRef.current) {
      // Si hay un video sonando y no es este, lo pausamos y reseteamos
      if (globalPlayingVideoRef && globalPlayingVideoRef !== videoRef.current) {
        globalPlayingVideoRef.pause();
        globalPlayingVideoRef.currentTime = 0;
      }

      // Ponemos este video al inicio y lo reproducimos
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => console.log("Play error:", err));

      // Actualizamos la ref global
      globalPlayingVideoRef = videoRef.current;
    }
  };

  const handleMouseLeave = () => {
    if (globalPlayingVideoRef != null) {
      globalPlayingVideoRef.pause();
      globalPlayingVideoRef = null;
      setIsPlaying(false);
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className="bg-black overflow-hidden 
                          hover:shadow-[#E50051]/20 transition-all duration-500 
                          border border-gray-800/50 hover:border-[#E50051] 
                          backdrop-blur-sm group my-4 shadow-none " // Usamos shadow-none para evitar que haya sombra predeterminada
      style={{
        boxShadow:
          "0px 4px 6px rgba(229, 0, 81, 0.3), 0px -4px 6px rgba(229, 0, 81, 0.3)",
      }}
    >
      <div className="flex">
        <div className="relative group w-[250px] h-auto overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            style={{
              opacity: isPlaying ? 0 : 1,
              transition: "opacity 0.5s ease-in",
            }}
            className="absolute w-full h-full object-cover md:rounded-t-none transition-opacity duration-500 group-hover:opacity-0"
          />
          {isInView && (
            <motion.video
              ref={videoRef}
              src={post.video}
              style={{
                opacity: isPlaying ? 1 : 0,
                transition: "opacity 0.5s ease-in",
              }}
              className="absolute top-0 left-0
                  w-full
                  h-full
                  object-cover
                  object-center
                  pointer-events-none
                  md:rounded-t-none opacity-0 group-hover:opacity-100 transition-opacity duration-500
                "
              loop
              muted
              autoPlay={false} // No inicia hasta que el contenedor se cliquea
              playsInline
              preload="auto"
              onPlaying={() => setIsPlaying(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}
          {/* Video que aparece en hover */}

          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-100"
            onMouseLeave={handleMouseLeave}
          ></div>
        </div>

        <div className="p-2  md:w-2/3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-[14px] font-mangoli text-white mb-1">
                {post.title}
              </h3>
              {post.isChefSuggestion && (
                <div className="justify-start text-center flex items-center text-[9px] font-mangoli   text-[#FF9F06] underline mb-2">
                  <img
                    src="/img/Sugerencia.svg"
                    alt="Vector"
                    className="mr-2 w-4 h-4"
                  />
                  <p>SUGERENCIA DEL CHEF</p>{" "}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between items-start ">
            <div>
              <p className="text-[10px] font-manrope font-extralight text-white mb-2 leading-none">
                {post.description}
              </p>
              <button
                onClick={() => {
                  setSelectedItem(post);
                  navigate("/detalles");
                }}
                className="text-[9px] flex items-center font-manrope font-extrabold  mt-0 inline-block text-[white]"
              >
                Detalles
                <Icon icon="mdi:chevron-right" className="text-[11px]" />
              </button>
              <p className="text-[9px] font-mangoli text-[#E50051] mb-1">
                Precio {post.price}
              </p>
              <div className="justify-between text-center flex  ">
                <div className="justify-start text-center flex items-center text-[9px] text-[#FF9F06]">
                  <img
                    src="/img/Icono.svg"
                    alt="Vector"
                    className="mr-2 w-5 h-5"
                  />
                  <img
                    src="/img/Lacteos.svg"
                    alt="Vector"
                    className="mr-2 w-5 h-5"
                  />
                  <img
                    src="/img/Pescado.svg"
                    alt="Vector"
                    className="w-5 h-5"
                  />
                </div>
                <div>
                  <button
                    ref={(el) => (buttonRefs.current[postIndex] = el)}
                    onClick={() => handleAddToCart(post, postIndex)}
                    className="p-1 rounded-full bg-black 
                                   hover:from-[#E50051] hover:to-[#E50051] text-white 
                                   transition-all duration-500 transform hover:-translate-y-1 
                                   shadow-lg hover:shadow-[#E50051]/20 mr-3"
                  >
                    {carItemsTitle.includes(post.title) ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5673 9.09089H10.9091V7.4318C10.9091 6.92999 10.5027 6.52271 9.99999 6.52271C9.49727 6.52271 9.0909 6.92999 9.0909 7.4318V9.09089H7.43272C6.92999 9.09089 6.52363 9.49817 6.52363 9.99999C6.52363 10.5018 6.92999 10.9091 7.43272 10.9091H9.0909V12.5682C9.0909 13.07 9.49727 13.4773 9.99999 13.4773C10.5027 13.4773 10.9091 13.07 10.9091 12.5682V10.9091H12.5673C13.07 10.9091 13.4764 10.5018 13.4764 9.99999C13.4764 9.49817 13.07 9.09089 12.5673 9.09089Z"
                          fill="#E50051"
                        />
                        <path
                          d="M9.99455 0C3.57182 0.04 0 3.64636 0 10.0173C0 16.2818 3.57545 19.9627 10.0055 20C16.5164 19.9618 19.8791 16.6027 20 9.98454C19.8891 3.58727 16.34 0.0409091 9.99455 0ZM10.0055 18.1818C4.52727 18.15 1.92545 15.55 1.81818 10C1.92091 4.52818 4.59909 1.85182 9.99455 1.81818C15.3345 1.85273 18.0891 4.61091 18.1818 9.98273C18.08 15.5436 15.4782 18.1491 10.0055 18.1818Z"
                          fill="#E50051"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5673 9.09089H10.9091V7.4318C10.9091 6.92999 10.5027 6.52271 9.99999 6.52271C9.49727 6.52271 9.0909 6.92999 9.0909 7.4318V9.09089H7.43272C6.92999 9.09089 6.52363 9.49817 6.52363 9.99999C6.52363 10.5018 6.92999 10.9091 7.43272 10.9091H9.0909V12.5682C9.0909 13.07 9.49727 13.4773 9.99999 13.4773C10.5027 13.4773 10.9091 13.07 10.9091 12.5682V10.9091H12.5673C13.07 10.9091 13.4764 10.5018 13.4764 9.99999C13.4764 9.49817 13.07 9.09089 12.5673 9.09089Z"
                          fill="white"
                        />
                        <path
                          d="M9.99455 0C3.57182 0.04 0 3.64636 0 10.0173C0 16.2818 3.57545 19.9627 10.0055 20C16.5164 19.9618 19.8791 16.6027 20 9.98454C19.8891 3.58727 16.34 0.0409091 9.99455 0ZM10.0055 18.1818C4.52727 18.15 1.92545 15.55 1.81818 10C1.92091 4.52818 4.59909 1.85182 9.99455 1.81818C15.3345 1.85273 18.0891 4.61091 18.1818 9.98273C18.08 15.5436 15.4782 18.1491 10.0055 18.1818Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={() => toggleFavorite(post.title)}
                    className={`rounded-full ${
                      favorites.includes(post.title)
                        ? "text-[#E50051]"
                        : "text-white"
                    } hover:text-[#E50051] transition-colors duration-300 transform hover:scale-110 `}
                  >
                    {favorites.includes(post.title) ? (
                      <svg
                        width="21"
                        height="19"
                        viewBox="0 0 13 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.38593 0C8.91168 0 8.44201 0.0979435 8.00374 0.288302C7.5655 0.47865 7.16715 0.757709 6.83153 1.10967L6.49984 1.45736L6.16816 1.10967C5.49025 0.399058 4.57136 0.000326821 3.61376 0.000326846C2.65616 0.000326846 1.73727 0.399058 1.05936 1.10967C0.381368 1.82038 0 2.78488 0 3.79116C0 4.79743 0.381368 5.76194 1.05936 6.47264L6.2135 11.8754C6.37194 12.0415 6.62775 12.0415 6.78619 11.8754L11.9403 6.47271C12.276 6.12089 12.5426 5.70295 12.7245 5.24285C12.9063 4.7827 13 4.2894 13 3.79116C13 3.29291 12.9063 2.79961 12.7245 2.33947C12.5426 1.87939 12.2761 1.46155 11.9404 1.10974C11.6048 0.757747 11.2064 0.478663 10.7681 0.288302C10.3298 0.0979435 9.86018 0 9.38593 0Z"
                          fill="#E50051"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="21"
                        height="19"
                        viewBox="0 0 21 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.1619 0C14.3958 0 13.6371 0.155077 12.9291 0.456478C12.2212 0.757862 11.5777 1.19971 11.0355 1.75698L10.4997 2.30748L9.96395 1.75698C8.86887 0.631841 7.3845 0.000517466 5.83761 0.000517507C4.29073 0.000517507 2.80636 0.631841 1.71128 1.75698C0.616055 2.88226 0 4.4094 0 6.00266C0 7.59593 0.616055 9.12306 1.71128 10.2483L10.0372 18.8028C10.2931 19.0657 10.7064 19.0657 10.9623 18.8028L19.2881 10.2485C19.8305 9.69141 20.2611 9.02968 20.5549 8.30117C20.8487 7.57261 21 6.79155 21 6.00266C21 5.21377 20.8487 4.43272 20.5549 3.70415C20.2611 2.9757 19.8307 2.31412 19.2883 1.75709C18.7461 1.19977 18.1026 0.757882 17.3946 0.456478C16.6867 0.155077 15.928 0 15.1619 0ZM13.4288 1.71142C13.9781 1.47756 14.567 1.35714 15.1619 1.35714C15.7567 1.35714 16.3456 1.47756 16.895 1.71142C17.4443 1.94527 17.9431 2.28791 18.363 2.71956C18.7831 3.151 19.1164 3.66325 19.3435 4.22649C19.5706 4.78972 19.6875 5.39326 19.6875 6.00266C19.6875 6.61207 19.5706 7.21561 19.3435 7.77884C19.1164 8.34208 18.7833 8.8541 18.3632 9.28554L10.4997 17.3648L2.63639 9.28565C1.78823 8.41421 1.3125 7.23319 1.3125 6.00266C1.3125 4.77213 1.78823 3.59112 2.63639 2.71968C3.4847 1.84809 4.63614 1.35766 5.83761 1.35766C7.03909 1.35766 8.19053 1.84809 9.03883 2.71968L10.0372 3.74543C10.2931 4.0084 10.7064 4.0084 10.9623 3.74543L11.9607 2.71968C12.3806 2.28803 12.8795 1.94527 13.4288 1.71142Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-between items-center">
                        <div className="flex space-x-6">
                          <button
                            onClick={() => toggleFavorite(post.title)}
                            className={`p-3 rounded-full ${
                              favorites.includes(post.title)
                                ? "text-red-500"
                                : "text-gray-400"
                            } hover:text-red-500 transition-colors duration-300 transform hover:scale-110`}
                          >
                            <FaHeart className="text-[10px]" />
                          </button>
                          <button
                            ref={(el) => (buttonRefs.current[postIndex] = el)}
                            onClick={() => handleAddToCart(post, postIndex)}
                            className="rounded-full bg-gradient-to-r from-[#E50051] to-[#e59200] 
                                   hover:from-[#e59200] hover:to-[#E50051] text-white 
                                   transition-all duration-500 transform hover:-translate-y-1 
                                   shadow-lg hover:shadow-[#E50051]/20"
                          >
                            <FaPlus className="text-[10px]" />
                          </button>
                        </div>
                      </div> */}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
