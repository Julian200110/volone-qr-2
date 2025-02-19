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
import React, { useRef } from "react";
import { translations } from "../data/constants";

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  tap: { scale: 0.95 },
};

const PostComponent = ({ post, expandedPost, handleExpand, activeSection }) => {
  const navigate = useNavigate();
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 pointer-events-none" />

        {/* Sombra extra si está expandido */}
        <AnimatePresence>
          {expandedPost === post.id && (
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
      <div
        className="absolute flex flex-col gap-4 z-30 justify-center right-0"
        style={{
          bottom: "var(--navbar-height)",
          padding: "0 18px 18px 0",
        }}
      >
        <motion.button
          onClick={() => navigate("/carta")}
          className="w-11 h-11 backdrop-blur-sm bg-black/50 rounded-full
                                   hover:bg-amber-500 active:bg-amber-700 flex items-center justify-center"
          whileHover={buttonVariants.hover}
          whileTap={buttonVariants.tap}
          aria-label="Modo menu"
        >
          <TiThMenuOutline className="w-6 h-6 text-white" />
        </motion.button>
        {/* FAVORITO */}

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
        {/* AÑADIR A PEDIDOS */}
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
      </div>

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
          <div className="text-white max-w-full w-[90%] h-full">
            <motion.p
              className="text-lg font-bold mt-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {post.title}
            </motion.p>
            <motion.div
              className="flex items-center mt-[3px] h-[18px] gap-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {/* PRECIO */}
              <motion.p
                className="text-base font-bold text-amber-500"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {post.price}
              </motion.p>
              {/* AUTOR */}
              <motion.p
                className="text-gray-200 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                @{post.author}
              </motion.p>
            </motion.div>

            {/* DESCRIPCIÓN */}
            <motion.div
              className="flex flex-col text-base space-between mt-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-gray-200">
                {expandedPost === post.id
                  ? post.longDescription
                  : post.description}
                <motion.span
                  onClick={() => handleExpand(post.id)}
                  className="text-amber-500 hover:text-amber-400 cursor-pointer mx-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {expandedPost === post.id
                    ? translations[language].seeLess
                    : translations[language].seeMore}
                </motion.span>
              </p>

              {/* EXTRA INFO, SI EXPANDIDO */}
              <AnimatePresence>
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
              </AnimatePresence>

              {/* BOTÓN VER MÁS / VER MENOS */}

              {/* TÍTULO */}
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
