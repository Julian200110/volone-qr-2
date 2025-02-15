import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

import ActionButton from "./ActionButton";
import { TiThMenuOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store";
import React, { useRef, useState, useEffect } from "react";
import { translations } from "../data/constants";
import useInView from "../hooks/useInView";
const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  tap: { scale: 0.95 },
};

const PostComponent = ({ post, activeSection }) => {
  const [expandedPost, setExpandedPost] = useState(false);
  // Función para manejar el clic en el "Ver más"
  const handleExpand = () => {
    setExpandedPost(!expandedPost);
  };

  const navigate = useNavigate();
  const getFirst7Words = (text) => {
    const words = text.split(" "); // Divide el texto en palabras
    return words.slice(0, 7).join(" ") + (words.length > 7 ? "..." : ""); // Retorna las primeras 7 palabras y "..." si hay más
  };
  const { cartItems, addToCart, toggleFavorite, favorites, language } =
    useStore();
  const postVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };
  const buttonRef = useRef(null);
  const handleAddToCart = (item, buttonRef) => {
    if (buttonRef.current) {
      const startRect = buttonRef.current.getBoundingClientRect();

      const floatingIcon = document.createElement("div");
      floatingIcon.className = "floating-icon";
      floatingIcon.style.position = "fixed";
      floatingIcon.style.left = `${
        startRect.left + startRect.width / 2 - 10
      }px`;
      floatingIcon.style.top = `${startRect.top + startRect.height / 2 - 10}px`;
      floatingIcon.style.zIndex = 1000;

      const buttonIcon = buttonRef.current.querySelector("svg").cloneNode(true);
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
          duration: 1500,
          easing: "ease-in-out",
        }
      ).onfinish = () => {
        document.body.removeChild(floatingIcon);
        addToCart(item);
      };
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(containerRef, { threshold: 0 });
  const shouldPlay = useInView(videoRef, { threshold: 0.85 });

  useEffect(() => {
    if (videoRef.current) {
      if (shouldPlay) {
        videoRef.current.play().catch((err) => console.log("Play error:", err));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [shouldPlay]);
  return (
    <motion.div
      key={`${activeSection}-${post.id}`}
      id={`post-${activeSection}-${post.id}`}
      className="relative w-full h-full overflow-hidden"
      style={{ height: "100vh" }}
      variants={postVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* FONDO: VIDEO (o fallback) */}
      <motion.div className="absolute inset-0">
        <motion.img
          src={post.image}
          className="absolute w-full h-full object-cover pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: isPlaying ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="w-full h-full" ref={containerRef}>
          {isInView && (
            <motion.video
              ref={videoRef}
              src={post.video}
              className="w-full h-full object-cover pointer-events-none"
              loop
              muted
              playsInline
              preload="auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onPlaying={() => setIsPlaying(true)}
            />
          )}
        </div>

        {/* Gradiente para legibilidad */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.09) 80%, rgba(0, 0, 0.9) 100%)",
          }}
        >
          {/* Contenido aquí */}
        </div>

        {/* Sombra extra si está expandido */}
        <AnimatePresence>
          {expandedPost && (
            <motion.div
              className="absolute inset-0 bg-black/50 pointer-events-none"
              style={{ zIndex: 10 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* BOTONES DE ACCIÓN (FAVORITO, AÑADIR) */}
      {/* BOTONES DE ACCIÓN (FAVORITO, AÑADIR) */}

      <div
        className="absolute flex flex-col z-30 justify-center right-0 gap-2"
        style={{
          bottom: `calc(var(--navbar-height) ${
            expandedPost ? " + 10px" : "+ 30px"
          })`, // Sube 10px
          padding: "0 18px 18px 0",
        }}
      >
        {/* PRECIO */}
        <motion.p
          className="text-base font-bold text-white border border-white rounded-[14px] p-2 flex flex-col w-[97px] h-[63px] items-center justify-center bg-[#A4A4A4]/22 backdrop-blur-md  text-center shadow-[-3px_4px_3px_rgba(0,0,0,0.3)]"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm">Precio</p>{" "}
          {/* Tamaño más pequeño para "Precio" */}
          <p className="text-[14px]">{post.price}</p>{" "}
          {/* Tamaño más grande para el precio */}
        </motion.p>

        {expandedPost && (
          <div className="flex justify-between">
            <img
              src="/img/Icono.svg"
              alt="Alergenos"
              className="h-[23px] w-[23px]"
            />{" "}
            <img
              src="/img/Lacteos.svg"
              alt="Alergenos"
              className="h-[23px] w-[23px]"
            />{" "}
            <img
              src="/img/Pescado.svg"
              alt="Alergenos"
              className="h-[23px] w-[23px]"
            />{" "}
          </div>
        )}
      </div>

      {post.isHighlight && (
        <div
          className="absolute flex flex-col gap-4 z-30 justify-center right-0"
          style={{
            top: "calc(var(--navbar-height) + 50px)", // Sube 10px
          }}
        >
          {/* DESTACADO*/}
          <motion.p
            className="text-base font-bold text-black  p-2 flex  w-[156px] h-[36px] items-center justify-center bg-[#FF9F06] backdrop-blur-md text-center rounded-l-full flex items-center underline"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-md">Destacado</p>{" "}
            <img src="/img/Vector.svg" alt="Vector" className="ml-2 w-4 h-4" />
          </motion.p>
        </div>
      )}
      {/* INFORMACIÓN DEL POST (TEXTO) */}
      <div
        className="absolute bottom-0 flex z-10 pt-[10px] w-full"
        style={{
          paddingBottom: `calc(var(--navbar-height) ${
            expandedPost ? " + 15px" : "+ 10px"
          })`,
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0.7) 60%, rgba(0, 0, 0, 0.8) 100%)",
        }}
      >
        <section
          className="w-full items-end justify-between"
          style={{
            maxHeight: "185px",
            padding: "10px 20px 20px",
            wordBreak: "break-word",
          }}
        >
          {/* DESTACADO*/}
          {post.isPrincipal && (
            <motion.p
              className="text-base font-bold text-[#FF9F06]  p-2 flex  w-[150px] h-[25px] items-center justify-start bg-[#0000]/70 backdrop-blur-md text-center rounded-r-full flex items-center underline relative left-0"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                bottom: "20px",
                left: "-20px",
              }}
            >
              <img
                src="/img/Principales.svg"
                alt="Vector"
                className="mr-2 w-4 h-4"
              />
              <p className="text-[12px]">Principales</p>{" "}
            </motion.p>
          )}
          {post.isChefSuggestion && (
            <motion.p
              className="text-base font-bold text-[#FF9F06]  p-2 flex  w-[166px] h-[25px] items-center justify-start bg-[#0000]/70 backdrop-blur-md text-center rounded-r-full flex items-center underline relative left-0"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                bottom: "10px",
                left: "-20px",
              }}
            >
              <img
                src="/img/Sugerencia.svg"
                alt="Vector"
                className="mr-2 w-4 h-4"
              />
              <p className="text-[12px]">Sugerencia del chef</p>{" "}
            </motion.p>
          )}
          <div className="text-white max-w-full w-[90%] h-full">
            <motion.p
              className="text-lg font-bold mt-2 gap-2 flex items-start w-[250px] "
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {/* <ActionButton
                post={post}
                object={orders}
                onClick={addToOrders}
                FillIcon={AiFillPlusCircle}
                EmptyIcon={AiOutlinePlusCircle}
                fillLabel={"Eliminar de pedidos"}
                emptyLabel={"Agregar a pedidos"}
              /> */}
              <ActionButton
                active={cartItems.some((item) => item.id === post.id)}
                onClick={() => handleAddToCart(post, buttonRef)}
                Icon={() =>
                  cartItems.some((item) => item.id === post.id) ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 10.0173C0 3.64636 3.57182 0.04 9.99455 0C16.34 0.0409091 19.8891 3.58727 20 9.98454C19.8791 16.6027 16.5164 19.9618 10.0055 20C3.57545 19.9627 0 16.2818 0 10.0173ZM10.9091 9.09089H12.5673C13.07 9.09089 13.4764 9.49817 13.4764 9.99999C13.4764 10.5018 13.07 10.9091 12.5673 10.9091H10.9091V12.5682C10.9091 13.07 10.5027 13.4773 9.99999 13.4773C9.49726 13.4773 9.0909 13.07 9.0909 12.5682V10.9091H7.43271C6.92999 10.9091 6.52362 10.5018 6.52362 9.99999C6.52362 9.49817 6.92999 9.09089 7.43271 9.09089H9.0909V7.4318C9.0909 6.92999 9.49726 6.52271 9.99999 6.52271C10.5027 6.52271 10.9091 6.92999 10.9091 7.4318V9.09089Z"
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
                  )
                }
                label={
                  cartItems.some((item) => item.id === post.id)
                    ? "Eliminar de pedidos"
                    : "Agregar a pedidos"
                }
                buttonRef={buttonRef}
              />
              {post.title}
            </motion.p>
            <motion.div
              className="flex items-center gap-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            ></motion.div>

            {/* DESCRIPCIÓN */}
            <motion.div
              className="flex flex-col text-base space-between "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-start gap-2  w-[500px]">
                {" "}
                {/* Contenedor flex para alinear el botón y el título */}
                {/* <ActionButton
                  post={post}
                  object={favorites}
                  onClick={toggleFavorite}
                  FillIcon={AiFillHeart}
                  EmptyIcon={AiOutlineHeart}
                  fillLabel={"Eliminar favorito"}
                  emptyLabel={"Agregar a favoritos"}
                /> */}
                <ActionButton
                  active={favorites.some((item) => item.id === post.id)}
                  onClick={() => toggleFavorite(post)}
                  Icon={() =>
                    favorites.some((item) => item.id === post.id) ? (
                      <svg
                        width="21"
                        height="19"
                        viewBox="0 0 13 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
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
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.1619 0C14.3958 0 13.6371 0.155077 12.9291 0.456478C12.2212 0.757862 11.5777 1.19971 11.0355 1.75698L10.4997 2.30748L9.96395 1.75698C8.86887 0.631841 7.3845 0.000517466 5.83761 0.000517507C4.29073 0.000517507 2.80636 0.631841 1.71128 1.75698C0.616055 2.88226 0 4.4094 0 6.00266C0 7.59593 0.616055 9.12306 1.71128 10.2483L10.0372 18.8028C10.2931 19.0657 10.7064 19.0657 10.9623 18.8028L19.2881 10.2485C19.8305 9.69141 20.2611 9.02968 20.5549 8.30117C20.8487 7.57261 21 6.79155 21 6.00266C21 5.21377 20.8487 4.43272 20.5549 3.70415C20.2611 2.9757 19.8307 2.31412 19.2883 1.75709C18.7461 1.19977 18.1026 0.757882 17.3946 0.456478C16.6867 0.155077 15.928 0 15.1619 0ZM13.4288 1.71142C13.9781 1.47756 14.567 1.35714 15.1619 1.35714C15.7567 1.35714 16.3456 1.47756 16.895 1.71142C17.4443 1.94527 17.9431 2.28791 18.363 2.71956C18.7831 3.151 19.1164 3.66325 19.3435 4.22649C19.5706 4.78972 19.6875 5.39326 19.6875 6.00266C19.6875 6.61207 19.5706 7.21561 19.3435 7.77884C19.1164 8.34208 18.7833 8.8541 18.3632 9.28554L10.4997 17.3648L2.63639 9.28565C1.78823 8.41421 1.3125 7.23319 1.3125 6.00266C1.3125 4.77213 1.78823 3.59112 2.63639 2.71968C3.4847 1.84809 4.63614 1.35766 5.83761 1.35766C7.03909 1.35766 8.19053 1.84809 9.03883 2.71968L10.0372 3.74543C10.2931 4.0084 10.7064 4.0084 10.9623 3.74543L11.9607 2.71968C12.3806 2.28803 12.8795 1.94527 13.4288 1.71142Z"
                          fill="white"
                        />
                      </svg>
                    )
                  }
                  label={
                    favorites.some((item) => item.id === post.id)
                      ? "Eliminar favorito"
                      : "Agregar a favoritos"
                  }
                />
                <div className="text-gray-200 font-Manrope text-[12px] w-[200px] flex flex-col ">
                  <p className="leading-[15px]">
                    {expandedPost
                      ? post.description
                      : getFirst7Words(post.description)}
                  </p>
                  <motion.span
                    onClick={handleExpand}
                    className="text-white hover:text-[#E50051] cursor-pointer underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expandedPost
                      ? translations[language].seeLess
                      : translations[language].seeMore}
                  </motion.span>
                  {expandedPost && (
                    <p className="text-[11px] text-[#FF9F06] underline">
                      PARA 5 COMENSALES
                    </p>
                  )}
                </div>
              </div>

              {/* EXTRA INFO, SI EXPANDIDO */}
              {/* <AnimatePresence>
                {expandedPost === post.id && post.extraInfo && (
                  <motion.div
                    key="extra"
                    className="mb-4"
                    variants={ALLERGENS_MAP}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <p className="text-gray-200 text-sm mb-2">
                      {post.extraInfo}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence> */}
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

PostComponent.propTypes = {
  post: PropTypes.object.isRequired,
  expandedPost: PropTypes.number,
  handleExpand: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default PostComponent;
