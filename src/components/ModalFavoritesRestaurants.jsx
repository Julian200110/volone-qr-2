import { useState, useRef, useEffect } from "react";
import VariationComplements from "./VariationComplements";
const ModalFavoritesRestaurants = ({
  isOpen,
  onClose,
  selectedItem,
  children,
}) => {
  if (!isOpen) return null;
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const [isVariationlOpen, setIsVariationlOpen] = useState(false);
  const openModal = () => setIsVariationlOpen(true);
  const closeModal = () => setIsVariationlOpen(false);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-black bg-opacity-80 rounded-[23px] px-12 text-justify pb-10  pt-5 shadow-lg relative max-w-[340px] w-full border border-[#E50051] h-auto flex flex-col gap-5">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <header className="flex text-[#E50051] items-center text-[16px] font-mangoli underline gap-1 justify-center">
          <img src="img/Info2.svg" alt="Info" className="h-[19px] w-[19px]" />
          <p>Información</p>
        </header>
        <div className="flex items-center gap-2 font-manrope font-bold ">
          <img
            src="img/restaurante.svg"
            alt="Info"
            className="h-[34px] w-[34px] rounded-full"
          />
          <p>Restaurante name</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[9px] font-manrope">
            <img
              src="img/ubicacion.svg"
              alt="Info"
              className="h-[15px] w-[15px]"
            />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 ">
              <img
                src="img/llamar.svg"
                alt="Info"
                className="h-[16px] w-[16px]"
              />
              <div>
                <p className="text-[10px] text-[#E50051] font-mangoli">
                  Llamar
                </p>
                <p className="text-[9px] font-manrope">2549 988 859 </p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="flex items-center gap-2 text-[9px]">
              <img src="img/wpp.svg" alt="Info" className="h-[16px] w-[16px]" />
              <div>
                <p className="text-[10px] text-[#E50051] font-mangoli">
                  WhatsApp
                </p>
                <p className="text-[9px] font.manrope">2549 988 859 </p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="flex items-center gap-2 text-[9px]">
              <img
                src="img/correo.svg"
                alt="Info"
                className="h-[16px] w-[16px]"
              />
              <div>
                <p className="text-[10px] text-[#E50051] font-mangoli">
                  Escribir
                </p>
                <p className="text-[9px] underline font-manrope">
                  Lorem Ipsum@gmail.com{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="flex items-center gap-2 text-[9px]">
              <img
                src="img/pagina.svg"
                alt="Info"
                className="h-[16px] w-[16px]"
              />
              <div>
                <p className="text-[10px] text-[#E50051] font-mangoli">
                  ver pagina web
                </p>
                <p className="text-[9px] underline font-manrope">
                  www.loremIpsum.com.es
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-[9px]">
              <img
                src="img/horarios.svg"
                alt="Info"
                className="h-[16px] w-[16px]"
              />
              <div>
                <p className="text-[10px] text-[#E50051] font-mangoli">
                  Horarios
                </p>
                <p className="text-[9px] font-manrope">
                  Lunes a Viernes 08:00hrs a 13:00hrs
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-center">
          <img
            src="img/instagram.svg"
            alt="Info"
            className="h-[20px] w-[20px]"
          />
          <img
            src="img/facebook.svg"
            alt="Info"
            className="h-[20px] w-[20px]"
          />
          <img src="img/ubi.svg" alt="Info" className="h-[20px] w-[20px]" />
          <img src="img/twitter.svg" alt="Info" className="h-[20px] w-[20px]" />
          <img src="img/tiktok.svg" alt="Info" className="h-[20px] w-[20px]" />
          <img src="img/youtube.svg" alt="Info" className="h-[20px] w-[20px]" />
        </div>
        <img
          src="/img/Footer.svg" // Aquí pon la ruta de tu imagen adicional
          alt="Additional Image"
          className="absolute bottom-2 h-[9px] w-[59px] left-1/2 transform -translate-x-1/2"
        />
      </div>
      <VariationComplements
        isOpen={isVariationlOpen}
        selectedItem={selectedItem}
      ></VariationComplements>
    </div>
  );
};

export default ModalFavoritesRestaurants;
