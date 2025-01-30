import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillPlusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import ActionButton from "./ActionButton";
import { TiThMenuOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store";
import React, { useRef, useState } from "react";
import { translations } from "../data/constants";

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
        {post.video ? (
          <motion.video
            src={post.video}
            className="w-full h-full object-cover pointer-events-none"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <motion.img
            src={post.image}
            className="w-full h-full object-cover pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}

        {/* Gradiente para legibilidad */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.09) 60%, rgba(0, 0, 0, 0.89) 100%)",
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
        className="absolute flex flex-col gap-4 z-30 justify-center right-0"
        style={{
          bottom: "calc(var(--navbar-height) + 10px)", // Sube 10px
          padding: "0 18px 18px 0",
        }}
      >
        {/* PRECIO */}
        <motion.p
          className="text-base font-bold text-white border border-white rounded-[14px] p-2 flex flex-col w-[120px] h-[85px] items-center justify-center bg-[#A4A4A4]/22 backdrop-blur-md underline text-center"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm">Precio</p>{" "}
          {/* Tamaño más pequeño para "Precio" */}
          <p className="text-[14px]">{post.price}</p>{" "}
          {/* Tamaño más grande para el precio */}
        </motion.p>
      </div>

      {post.isHighlight && (
        <div
          className="absolute flex flex-col gap-4 z-30 justify-center right-0"
          style={{
            bottom: "calc(var(--navbar-height) + 430px)", // Sube 10px
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
          paddingBottom: "var(--navbar-height)",
          background:
            "linear-gradient(180deg,#25150000 0%,#25150080 30%,#251500b3 60%,#251500cc 100%)",
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
              className="text-base font-bold text-[#FF9F06]  p-2 flex  w-[150px] h-[25px] items-center justify-start bg-[#0000]/70 backdrop-blur-md text-center rounded-r-full flex items-center underline absolute left-0"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                bottom: "calc(var(--navbar-height) + 180px)", // Sube 10px
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
              className="text-base font-bold text-[#FF9F06]  p-2 flex  w-[166px] h-[25px] items-center justify-start bg-[#0000]/70 backdrop-blur-md text-center rounded-r-full flex items-center underline absolute left-0"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                bottom: "calc(var(--navbar-height) + 150px)", // Sube 10px
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
                Icon={
                  cartItems.some((item) => item.id === post.id)
                    ? AiFillPlusCircle
                    : AiOutlinePlusCircle
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
                  Icon={
                    favorites.some((item) => item.id === post.id)
                      ? AiFillHeart
                      : AiOutlineHeart
                  }
                  label={
                    favorites.some((item) => item.id === post.id)
                      ? "Eliminar favorito"
                      : "Agregar a favoritos"
                  }
                  buttonRef={buttonRef}
                />
                <p className="text-gray-200 font-Manrope text-[12px] w-[200px] flex flex-col">
                  {expandedPost
                    ? post.description
                    : getFirst7Words(post.description)}

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
                </p>
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
