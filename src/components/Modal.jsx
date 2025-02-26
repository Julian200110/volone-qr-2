import { useState, useRef, useEffect } from "react";
import VariationComplements from "./VariationComplements";
const Modal = ({ isOpen, onClose, selectedItem, children }) => {
  if (!isOpen) return null;
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const [isVariationlOpen, setIsVariationlOpen] = useState(false);
  const openModal = () => setIsVariationlOpen(true);
  const closeModal = () => setIsVariationlOpen(false);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-black p-6 rounded-[14px] shadow-lg relative max-w-[360px] w-full border border-[#E50051] h-[580px]">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div>
          <div className="relative">
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-[150px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
          </div>

          <div className=" bg-black">
            <div className="flex justify-between items-start ">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="border-b border-[#E50051] mb-1 w-[290px]">
                      <h3 className="text-[20px] font-semibold text-white">
                        {selectedItem.title}
                      </h3>
                    </div>
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
                    {selectedItem.isChefSuggestion && (
                      <div className="justify-start text-center flex items-center text-[8px] text-[#FF9F06] underline mb-2">
                        <img
                          src="/img/Sugerencia.svg"
                          alt="Vector"
                          className="mr-2 w-4 h-4"
                        />
                        <p>SUGERENCIA DEL CHEF</p>{" "}
                      </div>
                    )}

                    <div className="justify-start text-center flex items-center text-[8px] text-[#FF9F06] underline mb-2">
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
            </div>
            <div className="border-b border-[#E50051]">
              <p className="text-white text-[10px] text-justify mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className=" mt-2 mb-3">
              <p className="text-white text-[12px] text-justify mb-2 underline">
                Alérgenos
              </p>
              <div className="justify-start text-center flex items-center text-[9px] text-[#FF9F06] ">
                <div className="flex flex-col items-center mr-2">
                  <img src="/img/Icono.svg" alt="Vector" className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-center mr-2">
                  <img src="/img/Icono.svg" alt="Vector" className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-center">
                  <img src="/img/Icono.svg" alt="Vector" className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className=" justify-start text-center flex items-center mb-3 gap-5">
              <p className="text-white text-[12px] text-justify underline">
                Porcion:
              </p>

              <button className="text-center border text-[7px] h-[15px] w-[50px] rounded-full border-[#E50051]">
                Media
              </button>
              <button className="text-center border text-[7px] h-[15px] w-[50px] rounded-full border-[#E50051]">
                Completa
              </button>
            </div>

            <button
              className=" justify-start text-center flex items-center mb-3"
              onClick={() => {
                openModal();
              }}
            >
              <img
                src="/img/Agregar2.svg"
                alt="Vector"
                className="mr-2 w-4 h-4"
              />

              <p className="text-white text-[12px] text-justify underline">
                Variaciones y complementos
              </p>
            </button>

            <div className="mb-2">
              <p className="text-white text-[12px] text-justify mb-2 underline">
                Observaciones
              </p>
              <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={500}
                placeholder="Type your message here..."
                className="w-full bg-black p-1 border border border-[#E50051] rounded-[6px] focus:outline-none focus:ring-1 focus:ring-[#E50051] resize-none text-[8px] text-[#BCBCBC]"
              />
            </div>
            <div className=" justify-center text-center flex items-center mb-3 gap-5 underline">
              <button className="text-center border text-[7px] h-[15px] w-[50px] rounded-full border-[#E50051]">
                Volver
              </button>
              <button className="text-center bg-[#E50051] border text-[7px] h-[15px] w-[50px] rounded-full border-[#E50051]">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
      <VariationComplements
        isOpen={isVariationlOpen}
        onCloseVariation={closeModal}
      ></VariationComplements>
    </div>
  );
};

export default Modal;
