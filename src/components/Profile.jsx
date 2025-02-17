import React, { useState } from "react";
import useStore from "../store/store";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaThumbsUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { SECTIONS, translations } from "../data/constants";
import LogOut from "./LogOut";

import ModalFavoritesRestaurants from "./ModalFavoritesRestaurants";
const Profile = () => {
  const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
  const openModalInfo = () => setIsModalInfoOpen(true);
  const closeModalInfo = () => setIsModalInfoOpen(false);
  const [isModalLogOutOpen, setIsModalLogOutOpen] = useState(false);
  const openModalLogOut = () => setIsModalLogOutOpen(true);
  const closeModalLogOut = () => setIsModalLogOutOpen(false);
  const { cartItems, updateQuantity } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const navigate = useNavigate();
  const [discountApplied, setDiscountApplied] = useState(false);
  const totalBeforeDiscount = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);

  const discount = discountApplied ? totalBeforeDiscount * 0.15 : 0;
  const totalAfterDiscount = totalBeforeDiscount - discount;
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFullDetails, setShowFullDetails] = useState(false);
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    tap: { scale: 0.95 },
  };
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [buttonsToShow, setButtonsToShow] = useState(5);
  const [activeMode, setActiveMode] = useState("restaurante");
  const currentSections =
    activeMode === "restaurante" ? SECTIONS : SECTIONS_DISCOTECA;
  const totalSections = currentSections.length;
  const maxOffset =
    totalSections - buttonsToShow >= 0 ? totalSections - buttonsToShow : 0;
  const offset = Math.min(activeSectionIndex, maxOffset);
  const visibleSections = currentSections.slice(offset, offset + buttonsToShow);
  const [modalOpen, setModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const handleOpenPopup = (item) => {
    setSelectedItem(item);
    setIsPopupOpen(true);
  };
  const handleOpenModalLogOut = () => {
    openModalLogOut(); // Abre el modal
    setTimeout(() => {
      closeModalLogOut(); // Cierra el modal después de 5 segundos
    }, 3000);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };
  const handleBack = () => {
    setShowFullDetails(false);
    setSelectedItem(null);
  };

  return (
    <div
      className="min-h-screen bg-black to-black w-full lg:w-[415px] mx-auto
  "
    >
      <header className=" top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="text-white hover:text-[#f5a00c] transition-colors duration-300"
            >
              <FaArrowLeft className="text-2xl" />
            </button>
            <h1 className="text-[16px] font-bold text-[#E50051] underline">
              Nombre y Apellido
            </h1>
            <div className="w-8" />
          </div>
        </div>
      </header>
      <div className="w-[278px] mx-auto mt-20 flex flex-col gap-[25px] text-[14px]">
        <div className="flex justify-between">
          <p>Mis pedidos realizados</p>
          <img src="/img/Anterior.svg" class="img-fluid rounded-top" alt="" />
        </div>
        <div className="flex justify-between">
          <p>Mis restaurantes favoritos</p>
          <button onClick={() => navigate("/RestauranteFavorito")}>
            <img src="/img/Anterior.svg" class="img-fluid rounded-top" alt="" />
          </button>
        </div>
        <div className="flex justify-between">
          <p>Mis comidas favoritas</p>
          <img src="/img/Anterior.svg" class="img-fluid rounded-top" alt="" />
        </div>
        <div className="flex justify-between">
          <p>Cambiar contraseña</p>
          <button onClick={() => navigate("/CambiarContraseña")}>
            <img src="/img/Anterior.svg" class="img-fluid rounded-top" alt="" />
          </button>
        </div>
        <div className="flex justify-between">
          <p>Cerrar sesión</p>
          <button onClick={() => handleOpenModalLogOut()}>
            <img src="/img/Anterior.svg" class="img-fluid rounded-top" alt="" />{" "}
          </button>
        </div>
      </div>
      <button
        onClick={() => setDiscountApplied(true)}
        className="flex items-center justify-center bg-[#E50051]  w-[96px] 
                                   text-white rounded-full transition-all duration-500
                                   transform hover:-translate-y-1 font-semibold shadow-lg
                                   hover:shadow-[#f5a00c]/20 space-x-2 h-[29px] mx-auto text-[12px] underline mt-20"
      >
        <span>Cancelar</span>
      </button>
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="fixed bottom-0  w-full lg:w-[415px] px-4 py-2 z-50 overflow-hidden mx-auto  bg-black "
      >
        <div className="relative flex items-center justify-center gap-20">
          {/* Enlaces de navegación */}
          <a className="text-white hover:text-[#E50051] flex items-center justify-center">
            <svg
              width="26"
              height="27"
              viewBox="0 0 26 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9219 0H5.07812C1.38531 0 0 1.43738 0 5.66713V21.0227C0 25.2524 1.38531 27 5.07812 27H20.9219C24.6147 27 26 25.2524 26 21.0227V5.66713C26 1.43738 24.6147 0 20.9219 0ZM23.9688 21.0227C23.9688 22.9491 22.6038 24.5126 20.9219 24.5126H19.8859C18.8866 21.26 16.1809 18.9287 13 18.9287C9.81906 18.9287 7.11344 21.26 6.11406 24.5126H5.07812C3.39625 24.5126 2.03125 22.9491 2.03125 21.0227V5.66713C2.03125 3.74071 3.39625 2.17723 5.07812 2.17723H20.9219C22.6038 2.17723 23.9688 3.74071 23.9688 5.66713V21.0227ZM18.4167 10.553C18.4167 13.638 15.6934 16.1368 13 16.1368C10.3066 16.1368 7.58333 13.638 7.58333 10.553C7.58333 7.46791 10.3066 4.96915 13 4.96915C15.6934 4.96915 18.4167 7.46791 18.4167 10.553Z"
                fill="#E50051"
              />
            </svg>
          </a>
          <a
            href="/TikTokMenu"
            className="text-white hover:text-[#E50051] flex items-center justify-center"
          >
            <img className="w-7 h-7" src="/img/menuvideo.svg" alt="Menú" />
          </a>
          <a
            className="text-white hover:text-[#E50051] flex items-center justify-center cursor-pointer"
            href="/Carrito"
          >
            <svg
              width="27"
              height="28"
              viewBox="0 0 27 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.0013 12.6799C26.8386 10.0474 25.9091 7.52008 24.3274 5.40948C22.7457 3.29888 20.5809 1.69728 18.1 0.802121C15.619 -0.0930393 12.9303 -0.242624 10.3654 0.371809C7.80047 0.986241 5.47141 2.33783 3.66534 4.25995C1.85928 6.18207 0.655166 8.59068 0.201454 11.1889C-0.252257 13.7871 0.0642657 16.4612 1.112 18.8817C2.15974 21.3021 3.89288 23.3631 6.09777 24.8105C8.30265 26.2578 10.8829 27.0283 13.5204 27.027H21.3763C22.8677 27.0255 24.2975 26.4324 25.3521 25.3778C26.4067 24.3233 26.9998 22.8934 27.0013 21.402V12.6799ZM24.7513 21.402C24.7513 22.2971 24.3957 23.1556 23.7628 23.7885C23.1298 24.4214 22.2714 24.777 21.3763 24.777H13.5204C11.9329 24.7763 10.3635 24.441 8.9143 23.793C7.46514 23.145 6.16883 22.1988 5.1099 21.0161C4.04584 19.8341 3.24682 18.4382 2.7664 16.922C2.28598 15.4059 2.13528 13.8045 2.3244 12.2254C2.62301 9.73456 3.74211 7.41396 5.50527 5.62942C7.26843 3.84487 9.57536 2.69788 12.0624 2.36925C12.5475 2.30845 13.036 2.27764 13.5249 2.277C16.1467 2.26985 18.6873 3.18589 20.7013 4.8645C21.8775 5.84206 22.8429 7.0483 23.5391 8.41008C24.2353 9.77187 24.6477 11.2608 24.7513 12.7868V21.402Z"
                fill="white"
              />
              <path
                d="M9.00128 10.152H13.5013C13.7996 10.152 14.0858 10.0335 14.2968 9.8225C14.5078 9.61152 14.6263 9.32537 14.6263 9.027C14.6263 8.72863 14.5078 8.44248 14.2968 8.23151C14.0858 8.02053 13.7996 7.902 13.5013 7.902H9.00128C8.70291 7.902 8.41676 8.02053 8.20578 8.23151C7.9948 8.44248 7.87628 8.72863 7.87628 9.027C7.87628 9.32537 7.9948 9.61152 8.20578 9.8225C8.41676 10.0335 8.70291 10.152 9.00128 10.152Z"
                fill="white"
              />
              <path
                d="M18.0013 12.402H9.00128C8.70291 12.402 8.41676 12.5205 8.20578 12.7315C7.9948 12.9425 7.87628 13.2286 7.87628 13.527C7.87628 13.8254 7.9948 14.1115 8.20578 14.3225C8.41676 14.5335 8.70291 14.652 9.00128 14.652H18.0013C18.2996 14.652 18.5858 14.5335 18.7968 14.3225C19.0078 14.1115 19.1263 13.8254 19.1263 13.527C19.1263 13.2286 19.0078 12.9425 18.7968 12.7315C18.5858 12.5205 18.2996 12.402 18.0013 12.402Z"
                fill="white"
              />
              <path
                d="M18.0013 16.902H9.00128C8.70291 16.902 8.41676 17.0205 8.20578 17.2315C7.9948 17.4425 7.87628 17.7286 7.87628 18.027C7.87628 18.3254 7.9948 18.6115 8.20578 18.8225C8.41676 19.0335 8.70291 19.152 9.00128 19.152H18.0013C18.2996 19.152 18.5858 19.0335 18.7968 18.8225C19.0078 18.6115 19.1263 18.3254 19.1263 18.027C19.1263 17.7286 19.0078 17.4425 18.7968 17.2315C18.5858 17.0205 18.2996 16.902 18.0013 16.902Z"
                fill="white"
              />
            </svg>
          </a>
          <button
            className="text-white hover:text-[#E50051] flex items-center justify-center"
            onClick={() => {
              openModalInfo();
            }}
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1892 7.31392C15.1892 7.76147 15.0114 8.1907 14.695 8.50716C14.3785 8.82363 13.9493 9.00142 13.5017 9.00142C13.0542 9.00142 12.6249 8.82363 12.3085 8.50716C11.992 8.1907 11.8142 7.76147 11.8142 7.31392C11.8142 6.86637 11.992 6.43715 12.3085 6.12068C12.6249 5.80421 13.0542 5.62642 13.5017 5.62642C13.9493 5.62642 14.3785 5.80421 14.695 6.12068C15.0114 6.43715 15.1892 6.86637 15.1892 7.31392ZM27.0017 21.3764V13.8839C27.0437 10.416 25.7722 7.06068 23.4426 4.49149C21.1129 1.9223 17.8976 0.329513 14.4422 0.0329213C12.5136 -0.102014 10.5784 0.178878 8.76775 0.856593C6.95706 1.53431 5.31307 2.59303 3.94699 3.96114C2.58091 5.32924 1.52462 6.97481 0.849592 8.7865C0.174562 10.5982 -0.103461 12.5337 0.0343329 14.4622C0.531583 21.6104 6.84396 27.0014 14.7201 27.0014H21.3767C22.868 26.9996 24.2977 26.4064 25.3522 25.3519C26.4067 24.2974 26.9999 22.8677 27.0017 21.3764ZM14.2892 2.27842C17.1765 2.53384 19.8601 3.87245 21.8009 6.0253C23.7418 8.17814 24.7959 10.9857 24.7517 13.8839V21.3764C24.7517 22.2715 24.3961 23.13 23.7632 23.7629C23.1303 24.3958 22.2718 24.7514 21.3767 24.7514H14.7201C7.93183 24.7514 2.70171 20.3639 2.27983 14.3069C2.16908 12.7641 2.37768 11.215 2.8926 9.75637C3.40752 8.29778 4.21771 6.96104 5.27253 5.82968C6.32735 4.69831 7.60415 3.79662 9.02316 3.18095C10.4422 2.56528 11.9729 2.24884 13.5197 2.25142C13.7751 2.25142 14.0327 2.26155 14.2892 2.27842ZM15.7517 20.2514V13.5014C15.7517 12.9047 15.5147 12.3324 15.0927 11.9104C14.6707 11.4885 14.0984 11.2514 13.5017 11.2514H12.3767C12.0783 11.2514 11.7922 11.3699 11.5812 11.5809C11.3702 11.7919 11.2517 12.0781 11.2517 12.3764C11.2517 12.6748 11.3702 12.9609 11.5812 13.1719C11.7922 13.3829 12.0783 13.5014 12.3767 13.5014H13.5017V20.2514C13.5017 20.5498 13.6202 20.8359 13.8312 21.0469C14.0422 21.2579 14.3283 21.3764 14.6267 21.3764C14.9251 21.3764 15.2112 21.2579 15.4222 21.0469C15.6332 20.8359 15.7517 20.5498 15.7517 20.2514Z"
                fill={isModalInfoOpen ? "#E50051" : "white"}
              />
            </svg>
          </button>
        </div>
      </motion.nav>
      <LogOut isOpen={isModalLogOutOpen} onClose={closeModalLogOut}></LogOut>
      <ModalFavoritesRestaurants
        isOpen={isModalInfoOpen}
        onClose={closeModalInfo}
      ></ModalFavoritesRestaurants>
    </div>
  );
};

export default Profile;
