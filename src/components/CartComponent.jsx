import React, { useRef, useState } from "react";
import useStore from "../store/store";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaThumbsUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { SECTIONS, translations } from "../data/constants";
import Modal from "./Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ModalFavoritesRestaurants from "./ModalFavoritesRestaurants";
import MenuItem from "./MenuItem";
const CartComponent = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { idMenu } = useStore();
  const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
  const openModalInfo = () => setIsModalInfoOpen(true);
  const closeModalInfo = () => setIsModalInfoOpen(false);
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
  const allPosts = SECTIONS.flatMap((section) =>
    section.posts.filter((post) => post.isFeatured)
  );
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
  if (showFullDetails && selectedItem) {
    const handleAddToCartAndGoCart = () => {
      addToCart(selectedItem);
      navigate("/carrito");
    };
    const maxOffset =
      totalSections - buttonsToShow >= 0 ? totalSections - buttonsToShow : 0;
    const offset = Math.min(activeSectionIndex, maxOffset);
    const visibleSections = currentSections.slice(
      offset,
      offset + buttonsToShow
    );
    return (
      <div className="min-h-screen bg-black  w-full w-[415px] mx-auto">
        <div className="container mx-auto  ">
          <div>
            <div className="relative">
              <button
                onClick={handleBack}
                className="absolute top-4 left-4 text-white hover:text-[#E50051] transition-colors duration-300 z-10"
              >
                <FaArrowLeft className="text-2xl" />
              </button>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
            </div>

            <div className="p-8 bg-black">
              <div className="flex justify-between items-start ">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-[20px] font-semibold text-white mb-1">
                        {selectedItem.title}
                      </h3>
                      {selectedItem.isChefSuggestion && (
                        <div className="justify-start text-center flex items-center text-[9px] text-[#FF9F06] underline mb-2">
                          <img
                            src="/img/Sugerencia.svg"
                            alt="Vector"
                            className="mr-2 w-4 h-4"
                          />
                          <p>SUGERENCIA DEL CHEF</p>{" "}
                        </div>
                      )}
                      <div className="justify-start text-center flex items-center text-[9px] text-[#FF9F06] underline mb-2">
                        <img
                          src="/img/Principal.svg"
                          alt="Vector"
                          className="mr-2 w-4 h-4"
                        />
                        <p>PRINCIPALES</p>{" "}
                      </div>
                      <div className="justify-start text-center flex items-center text-[9px] text-[#FF9F06] underline mb-2">
                        <img
                          src="/img/Comensal.svg"
                          alt="Vector"
                          className="mr-2 w-4 h-4"
                        />
                        <p>PARA 5 COMENSALES</p>{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-base font-bold text-white border border-white rounded-[14px] p-2 flex flex-col w-[97px] h-[62.3px] items-center justify-center bg-[#A4A4A4]/50 backdrop-blur-md underline text-center">
                  <p className="text-sm">Precio</p>{" "}
                  {/* Tamaño más pequeño para "Precio" */}
                  <p className="text-[14px]">{selectedItem.price}</p>{" "}
                  {/* Tamaño más grande para el precio */}
                </div>
              </div>
              <div className="border-b border-[#E50051]">
                <p className="text-white text-[11px] text-justify mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="justify-start text-center flex items-center text-[9px] text-[#989898] mb-2">
                  <img
                    src="/img/star.svg"
                    alt="Vector"
                    className="mr-2 w-4 h-4"
                  />
                  <p className="mr-2">2000 me gusta</p>
                  <img
                    src="/img/shopping.svg"
                    alt="Vector"
                    className="mr-2 w-4 h-4"
                  />
                  <p>+1000 pedidos</p>{" "}
                </div>
              </div>
              <div className=" mt-2 mb-5">
                <p className="text-white text-[16px] text-justify mb-2 underline">
                  Alérgenos
                </p>
                <div className="justify-start text-center flex items-center text-[9px] text-[#FF9F06] mb-2">
                  <div className="flex flex-col items-center mr-2">
                    <img
                      src="/img/Icono.svg"
                      alt="Vector"
                      className="w-5 h-5"
                    />
                    <p className="text-white text-[12px] ">Huevos</p>
                  </div>
                  <div className="flex flex-col items-center mr-2">
                    <img
                      src="/img/Icono.svg"
                      alt="Vector"
                      className="w-5 h-5"
                    />
                    <p className="text-white text-[12px] ">Pescado</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/img/Icono.svg"
                      alt="Vector"
                      className="w-5 h-5"
                    />
                    <p className="text-white text-[12px] ">Lacteos</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleAddToCartAndGoCart}
                className="w-[170px] h-[27px] bg-black border border-[#E50051]
             hover:from-[#e59200] hover:to-[#E50051] text-white  
             rounded-full transition-all duration-500 text-[11px] font-semibold 
             shadow-lg hover:shadow-[#E50051]/20 transform hover:-translate-y-1 
             block mx-auto underline"
              >
                Agregar al pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="h-screen w-full lg:w-[415px] bg-black relative mx-auto overflow-y-auto no-scrollbar
  "
    >
      <header className=" top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="text-white hover:text-[#E50051] transition-colors duration-300"
            >
              <FaArrowLeft className="text-2xl" />
            </button>
            <h1 className="text-[16px] font-mangoli text-[#E50051] underline">
              Mi Pedido
            </h1>
            <div className="w-8" />
          </div>
        </div>
      </header>
      <div>
        {cartItems.length === 0 ? (
          <p className="text-white font-manrope text-center animate-pulse text-[12px]">
            No tienes pedidos actualmente
          </p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={`{${item.id} - ${item.title}`}
                className={`bg-black overflow-hidden
  hover:shadow-[#E50051]/20 transition-all duration-500
  border border-gray-800/50 hover:border-[#E50051]
  backdrop-blur-sm group my-4 shadow-none 
  ${isDelete ? "translate-x-[-30%] transition-transform duration-500 " : ""}
`}
                style={{
                  boxShadow:
                    "0px 4px 6px rgba(229, 0, 81, 0.3), 0px -4px 6px rgba(229, 0, 81, 0.3)",
                  overflow: "hidden", // Asegúrate de que el contenido no se desborde
                  maxWidth: "100%", // Limita el ancho si es necesario
                  maxHeight: "100%", // Limita la altura si es necesario
                }}
              >
                <div className="flex">
                  <div className="relative group w-[250px] h-auto overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute w-full h-full object-cover rounded-t-none transition-opacity "
                    />

                    {/* Video que aparece en hover */}

                    <div className="absolute  inset-0 bg-gradient-to-r from-transparent to-black opacity-100"></div>
                  </div>

                  <div className="p-2  md:w-2/3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-[14px] font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <div className="justify-start text-center flex items-center text-[7px] text-[#FF9F06] underline mb-2">
                          <img
                            src="/img/Sugerencia.svg"
                            alt="Vector"
                            className="mr-2 w-3 h-3"
                          />
                          <p>SUGERENCIA DEL CHEF</p>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <p className="text-[10px] text-gray-300 mb-0 leading-none">
                          {item.description}
                        </p>
                        <button
                          // onClick={() => {
                          //   setSelectedItem(item);
                          //   setShowFullDetails(true);
                          // }}
                          onClick={() => {
                            openModal();
                            setSelectedItem(item);
                          }}
                          className="text-[9px] font-bold underline mt-0 inline-block text-white"
                        >
                          Detalles
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-between border w-auto gap-2 rounded-full px-2 bg-[#575757] h-[16px]">
                        <button
                          onClick={() =>
                            updateQuantity(item.title, item.quantity - 1)
                          }
                          className="text-[#868686] active:text-[#E50051]"
                        >
                          <svg
                            width="8"
                            height="3"
                            viewBox="0 0 8 3"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              y="0.5"
                              width="8"
                              height="2"
                              rx="1"
                              className="fill-current"
                            />
                          </svg>
                        </button>
                        <span className="text-white text-[10px] text-center font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.title, item.quantity + 1)
                          }
                          className="text-[#868686] active:text-[#E50051]"
                        >
                          <svg
                            width="8"
                            height="9"
                            viewBox="0 0 8 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.95398 3.45425H5.04603V1.54575C5.04603 0.968497 4.57845 0.5 4 0.5C3.42155 0.5 2.95398 0.968497 2.95398 1.54575V3.45425H1.04603C0.467573 3.45425 0 3.92274 0 4.5C0 5.07725 0.467573 5.54575 1.04603 5.54575H2.95398V7.45425C2.95398 8.0315 3.42155 8.5 4 8.5C4.57845 8.5 5.04603 8.0315 5.04603 7.45425V5.54575H6.95398C7.53243 5.54575 8 5.07725 8 4.5C8 3.92274 7.53243 3.45425 6.95398 3.45425Z"
                              className="fill-current"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex gap-3">
                        <button>
                          <svg
                            width="13"
                            height="12"
                            viewBox="0 0 13 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.38593 0C8.91168 0 8.44201 0.0979435 8.00374 0.288302C7.5655 0.47865 7.16715 0.757709 6.83153 1.10967L6.49984 1.45736L6.16816 1.10967C5.49025 0.399058 4.57136 0.000326821 3.61376 0.000326846C2.65616 0.000326846 1.73727 0.399058 1.05936 1.10967C0.381368 1.82038 0 2.78488 0 3.79116C0 4.79743 0.381368 5.76194 1.05936 6.47264L6.2135 11.8754C6.37194 12.0415 6.62775 12.0415 6.78619 11.8754L11.9403 6.47271C12.276 6.12089 12.5426 5.70295 12.7245 5.24285C12.9063 4.7827 13 4.2894 13 3.79116C13 3.29291 12.9063 2.79961 12.7245 2.33947C12.5426 1.87939 12.2761 1.46155 11.9404 1.10974C11.6048 0.757747 11.2064 0.478663 10.7681 0.288302C10.3298 0.0979435 9.86018 0 9.38593 0Z"
                              fill="#E50051"
                            />
                          </svg>
                        </button>
                        <button onClick={() => setIsDelete(true)}>
                          <svg
                            width="11"
                            height="12"
                            viewBox="0 0 11 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.5 2H7.63636V1C7.63636 0.4485 7.20825 0 6.68182 0H3.81818C3.29175 0 2.86364 0.4485 2.86364 1V2H0V3H0.784636L1.59743 10.6655C1.67809 11.426 2.28995 12 3.02066 12H7.4612C8.19191 12 8.80377 11.4265 8.88396 10.6655L9.69675 3H10.4995L10.5 2ZM3.81818 1H6.68182V2H3.81818V1ZM7.93514 10.555C7.90841 10.8085 7.70461 11 7.46073 11H3.02066C2.77725 11 2.57298 10.8085 2.54625 10.555L1.74491 3H8.73695L7.93561 10.555H7.93514ZM3.36143 8.2715L4.57514 7L3.36143 5.7285L4.0363 5.0215L5.25 6.293L6.4637 5.0215L7.13857 5.7285L5.92486 7L7.13857 8.2715L6.4637 8.9785L5.25 7.707L4.0363 8.9785L3.36143 8.2715Z"
                              fill="white"
                            />
                          </svg>
                        </button>
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

                {/* Botones para la cantidad */}
                {/* <div className="flex items-center space-x-3">
                  <button
                    onClick={() =>
                      updateQuantity(item.title, item.quantity - 1)
                    }
                    className="text-white bg-gray-700 hover:bg-gray-600 px-3 py-1
                                     rounded-lg transition-colors duration-300"
                  >
                    -
                  </button>
                  <span className="text-white font-medium w-8 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(item.title, item.quantity + 1)
                    }
                    className="text-white bg-gray-700 hover:bg-gray-600 px-3 py-1
                                     rounded-lg transition-colors duration-300"
                  >
                    +
                  </button>
                </div> */}
              </div>
            ))}

            <button
              onClick={() => setDiscountApplied(true)}
              className="flex items-center justify-center bg-[#E50051]  w-[96px] 
                                   text-white rounded-full transition-all duration-500
                                   transform hover:-translate-y-1 font-semibold shadow-lg
                                   hover:shadow-[#E50051]/20 space-x-2 h-[29px] mx-auto text-[12px]"
              style={{
                boxShadow:
                  "0px 4px 6px rgba(229, 0, 81, 0.3), 0px -4px 6px rgba(229, 0, 81, 0.3)",
                margin: "40px auto auto auto ", // Asegúrate de que el contenido no se desborde
                maxWidth: "100%", // Limita el ancho si es necesario
                maxHeight: "100%", // Limita la altura si es necesario
              }}
            >
              <span>Pagar</span>
            </button>

            <div className="mb-20 w-full">
              <div className="space-y-2 ">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={"auto"}
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                  onSwiper={(swiper) => (swiperRef.current = swiper)} // Guardamos el swiper en la referencia
                  className="pb-10"
                >
                  {allPosts.map((post, index) => (
                    <SwiperSlide key={index} className="w-auto">
                      <MenuItem post={post} postIndex={index} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Paginación personalizada */}
              <div className="flex justify-center space-x-2 mb-20">
                {allPosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => swiperRef.current?.slideTo(index)} // Cambia el slide al hacer clic
                    className={`rounded-full transition-all ${
                      activeIndex === index
                        ? "bg-white w-[12px] h-[5px]"
                        : "w-[5px] h-[5px] bg-[#E50051]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
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
          <a
            className="text-white hover:text-[#E50051] flex items-center justify-center "
            href="/iniciarsesion"
          >
            <svg
              width="26"
              height="27"
              viewBox="0 0 26 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9219 0H5.07812C1.38531 0 0 1.43738 0 5.66713V21.0227C0 25.2524 1.38531 27 5.07812 27H20.9219C24.6147 27 26 25.2524 26 21.0227V5.66713C26 1.43738 24.6147 0 20.9219 0ZM23.9688 21.0227C23.9688 22.9491 22.6038 24.5126 20.9219 24.5126H19.8859C18.8866 21.26 16.1809 18.9287 13 18.9287C9.81906 18.9287 7.11344 21.26 6.11406 24.5126H5.07812C3.39625 24.5126 2.03125 22.9491 2.03125 21.0227V5.66713C2.03125 3.74071 3.39625 2.17723 5.07812 2.17723H20.9219C22.6038 2.17723 23.9688 3.74071 23.9688 5.66713V21.0227ZM18.4167 10.553C18.4167 13.638 15.6934 16.1368 13 16.1368C10.3066 16.1368 7.58333 13.638 7.58333 10.553C7.58333 7.46791 10.3066 4.96915 13 4.96915C15.6934 4.96915 18.4167 7.46791 18.4167 10.553Z"
                fill="white"
              />
            </svg>
          </a>
          <img
            className="w-[27px] h-[27px] cursor-pointer"
            src="/img/menuvideo.svg"
            alt="Menú"
            onClick={() => navigate("/cartainteractivo/" + idMenu)}
          />
          <a className="text-white hover:text-[#E50051] flex items-center justify-center cursor-pointer">
            <svg
              width="27"
              height="28"
              viewBox="0 0 27 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.0013 12.6799C26.8386 10.0474 25.9091 7.52008 24.3274 5.40948C22.7457 3.29888 20.5809 1.69728 18.1 0.802121C15.619 -0.0930393 12.9303 -0.242624 10.3654 0.371809C7.80047 0.986241 5.47141 2.33783 3.66534 4.25995C1.85928 6.18207 0.655166 8.59068 0.201454 11.1889C-0.252257 13.7871 0.0642657 16.4612 1.112 18.8817C2.15974 21.3021 3.89288 23.3631 6.09777 24.8105C8.30265 26.2578 10.8829 27.0283 13.5204 27.027H21.3763C22.8677 27.0255 24.2975 26.4324 25.3521 25.3778C26.4067 24.3233 26.9998 22.8934 27.0013 21.402V12.6799ZM24.7513 21.402C24.7513 22.2971 24.3957 23.1556 23.7628 23.7885C23.1298 24.4214 22.2714 24.777 21.3763 24.777H13.5204C11.9329 24.7763 10.3635 24.441 8.9143 23.793C7.46514 23.145 6.16883 22.1988 5.1099 21.0161C4.04584 19.8341 3.24682 18.4382 2.7664 16.922C2.28598 15.4059 2.13528 13.8045 2.3244 12.2254C2.62301 9.73456 3.74211 7.41396 5.50527 5.62942C7.26843 3.84487 9.57536 2.69788 12.0624 2.36925C12.5475 2.30845 13.036 2.27764 13.5249 2.277C16.1467 2.26985 18.6873 3.18589 20.7013 4.8645C21.8775 5.84206 22.8429 7.0483 23.5391 8.41008C24.2353 9.77187 24.6477 11.2608 24.7513 12.7868V21.402Z"
                fill="#E50051"
              />
              <path
                d="M9.00128 10.152H13.5013C13.7996 10.152 14.0858 10.0335 14.2968 9.8225C14.5078 9.61152 14.6263 9.32537 14.6263 9.027C14.6263 8.72863 14.5078 8.44248 14.2968 8.23151C14.0858 8.02053 13.7996 7.902 13.5013 7.902H9.00128C8.70291 7.902 8.41676 8.02053 8.20578 8.23151C7.9948 8.44248 7.87628 8.72863 7.87628 9.027C7.87628 9.32537 7.9948 9.61152 8.20578 9.8225C8.41676 10.0335 8.70291 10.152 9.00128 10.152Z"
                fill="#E50051"
              />
              <path
                d="M18.0013 12.402H9.00128C8.70291 12.402 8.41676 12.5205 8.20578 12.7315C7.9948 12.9425 7.87628 13.2286 7.87628 13.527C7.87628 13.8254 7.9948 14.1115 8.20578 14.3225C8.41676 14.5335 8.70291 14.652 9.00128 14.652H18.0013C18.2996 14.652 18.5858 14.5335 18.7968 14.3225C19.0078 14.1115 19.1263 13.8254 19.1263 13.527C19.1263 13.2286 19.0078 12.9425 18.7968 12.7315C18.5858 12.5205 18.2996 12.402 18.0013 12.402Z"
                fill="#E50051"
              />
              <path
                d="M18.0013 16.902H9.00128C8.70291 16.902 8.41676 17.0205 8.20578 17.2315C7.9948 17.4425 7.87628 17.7286 7.87628 18.027C7.87628 18.3254 7.9948 18.6115 8.20578 18.8225C8.41676 19.0335 8.70291 19.152 9.00128 19.152H18.0013C18.2996 19.152 18.5858 19.0335 18.7968 18.8225C19.0078 18.6115 19.1263 18.3254 19.1263 18.027C19.1263 17.7286 19.0078 17.4425 18.7968 17.2315C18.5858 17.0205 18.2996 16.902 18.0013 16.902Z"
                fill="#E50051"
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
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedItem={selectedItem}
      ></Modal>
      <ModalFavoritesRestaurants
        isOpen={isModalInfoOpen}
        onClose={closeModalInfo}
      ></ModalFavoritesRestaurants>
    </div>
  );
};

export default CartComponent;
