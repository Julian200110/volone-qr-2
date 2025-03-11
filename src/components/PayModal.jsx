import { useState, useRef, useEffect } from "react";
import VariationComplements from "./VariationComplements";
const PayModal = ({ isOpen, onClose, selectedItem, children }) => {
  if (!isOpen) return null;
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const [isVariationlOpen, setIsVariationlOpen] = useState(false);
  const openModal = () => setIsVariationlOpen(true);
  const closeModal = () => setIsVariationlOpen(false);
  const [selectedOption, setSelectedOption] = useState("recoger");
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-black p-6 rounded-[14px] shadow-lg relative max-w-[360px] w-full border-2 border-dashed border-[#E50051] h-[580px] overflow-y-auto scrollbar-hide">
        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div>
          <div className="flex flex-col border-b-2 border-[#E50051] border-dashed">
            {" "}
            <div className="flex flex-col items-center mb-3">
              <img
                src="/img/restaurante.svg"
                alt="Info"
                className="h-[47px] w-[47px] rounded-full"
              />
              <p className="font-manrope font-bold text-[9px]">
                Restaurante name
              </p>
            </div>
            <p className="font-manrope  text-[15px] flex justify-end gap-x-2 mb-3">
              <span className="text-[#E50051] font-bold">Pedido</span>{" "}
              <span>N°0001</span>
            </p>
            <div className="flex items-start gap-[117px] font-mangoli text-[12px] underline mb-1">
              <p className="ml-2">Cliente</p>
              <p>Correo</p>
            </div>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                className="w-[162px] h-[18px] p-2 rounded-full font-mangoli text-[10px] border border-[#E50051] bg-black"
                placeholder="Enter name"
              />
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                className="w-[169px] h-[18px] p-2 rounded-full font-mangoli text-[10px] border border-[#E50051] bg-black"
                placeholder="Enter name"
              />
            </div>
            <div className="flex text-[11px] font-manrope justify-between mx-2 mb-3">
              <p className="font-light">dd/mm/aaaa hh:mm:ss</p>
              <p>
                <span className="text-[#E50051] font-bold">Camarero</span>{" "}
                <span className="font-bold">Volone</span>
              </p>
              <p>
                <span className="text-[#E50051] font-bold">Mesa</span>{" "}
                <span className="font-bold">00001</span>
              </p>
            </div>
          </div>
          <div className="m-0 border-b-2 border-[#E50051] border-dashed">
            <div className="flex justify-between font-mangoli mt-2">
              <p className="text-[12px]">Nombre Plato Nro 01</p>
              <p className="text-[11px]">18.10€</p>
            </div>{" "}
            <div className="flex justify-between font-mangoli ">
              <p className="text-[12px]">Nombre Plato Nro 02</p>
              <p className="text-[11px]">20.00€</p>
            </div>{" "}
            <div className="flex justify-between font-mangoli ">
              <p className="text-[12px]">Nombre Plato Nro 03</p>
              <p className="text-[11px]">10.00€</p>
            </div>
            <p className="flex justify-end gap-x-2">
              <span className="font-bold text-[12px]">Total neto:</span>
              <span className="font-bold text-[#E50051] text-[12px]">
                48,10€
              </span>
            </p>
            <p className="flex justify-end gap-x-2 mb-3">
              <span className="font-bold text-[12px]">IVA 10%:</span>{" "}
              <span className="font-bold text-[#E50051] text-[12px]">
                4,81€
              </span>
            </p>
          </div>
          <div className="border-b-2 border-[#E50051] border-dashed">
            <div className="flex justify-between mt-2 font-manrope font-bold text-[12px]">
              <p>Método de pago</p>
              <p>
                <span className="text-[#E50051] font-bold">Total:</span> 00€
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-2 font-mangoli text-[10px] text-[#747474] ">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="efectivo"
                  className="relative appearance-none w-3 h-3 rounded-full border-2 border-[#E50051] checked:bg-[#E50051] checked:border-[#E50051] focus:outline-none focus:ring-0 transition-all before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white checked:before:block before:hidden"
                />
                Efectivo - Tarjeta en el lugar
              </label>
              <div className="flex gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="ticket"
                    className="relative appearance-none w-3 h-3 rounded-full border-2 border-[#E50051] checked:bg-[#E50051] checked:border-[#E50051] focus:outline-none focus:ring-0 transition-all before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white checked:before:block before:hidden"
                  />
                  Ticket restaurante
                </label>
                <input
                  type="text"
                  placeholder="XXX"
                  className="w-[50px] h-[18px] p-2 rounded-full font-mangoli text-[8px] border border-[#E50051] bg-[#464646]"
                />{" "}
              </div>
              <div className="flex gap-2 mb-3">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="tarjeta"
                    defaultChecked
                    className="relative appearance-none w-3 h-3 rounded-full border-2 border-[#E50051] checked:bg-[#E50051] checked:border-[#E50051] focus:outline-none focus:ring-0 transition-all before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white checked:before:block before:hidden"
                  />
                  Con tarjeta
                </label>
                <input
                  type="text"
                  placeholder="XXX XXXX XXXX XXXX XXX 02"
                  className="w-[170px] h-[18px] p-2 rounded-full font-mangoli text-[8px] border border-[#E50051] bg-black"
                />{" "}
              </div>
              <div></div>
            </div>
          </div>
          <div className="flex justify-between font-mangoli text-[12px] mb-3 mt-3">
            <button
              onClick={() => setSelectedOption("local")}
              className={`relative pb-1 ${
                selectedOption === "local"
                  ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white text-[#E50051]"
                  : ""
              }`}
            >
              Local
            </button>
            <button
              onClick={() => setSelectedOption("domicilio")}
              className={`relative pb-1 ${
                selectedOption === "domicilio"
                  ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white text-[#E50051]"
                  : ""
              }`}
            >
              A domicilio
            </button>
            <button
              onClick={() => setSelectedOption("recoger")}
              className={`relative pb-1 ${
                selectedOption === "recoger"
                  ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white text-[#E50051]"
                  : ""
              }`}
            >
              Recoger
            </button>
          </div>
          <div className="font-mangoli text-[10px]">
            <div className="mb-3">
              <p className="text-white mb-1">Dirección</p>
              <input
                type="text"
                className="w-full h-[18px] p-2 rounded-full font-mangoli text-[8px] border border-[#E50051] bg-black"
                placeholder="Ingresa tu dirección"
              />
            </div>

            <div className="flex gap-4 mb-3">
              <div className="flex-1">
                <p className="text-white mb-1">Dinos tus Alergias</p>
                <div className="flex flex-wrap gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#E50051] flex items-center justify-center">
                    <img src="/img/Lacteos.svg" alt="alergia" />
                  </div>
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                    <img src="/img/Pescado.svg" alt="alergia" />
                  </div>
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                    <img src="/img/Icono.svg" alt="alergia" />
                  </div>
                  <div className="w-5 h-5 rounded-full bg-[#E50051] flex items-center justify-center">
                    <img src="/img/Lacteos.svg" alt="alergia" />
                  </div>{" "}
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                    <img src="/img/Lacteos.svg" alt="alergia" />
                  </div>{" "}
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                    <img src="/img/Lacteos.svg" alt="alergia" />
                  </div>
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                    <img src="/img/Pescado.svg" alt="alergia" />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  {selectedOption === "local" ? (
                    <div>
                      <p className="text-white mt-1 mb-1">
                        ¿Como quieres que se sirva la orden?
                      </p>
                      <label className="flex items-center gap-2 text-[#747474] mb-1">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="efectivo"
                          className="relative appearance-none w-3 h-3 rounded-full border-2 border-[#E50051] checked:bg-[#E50051] checked:border-[#E50051] focus:outline-none focus:ring-0 transition-all before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white checked:before:block before:hidden"
                        />
                        Lo antes posible
                      </label>
                      <label className="flex items-center gap-2 text-[#747474] mb-1">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="efectivo"
                          className="relative appearance-none w-3 h-3 rounded-full border-2 border-[#E50051] checked:bg-[#E50051] checked:border-[#E50051] focus:outline-none focus:ring-0 transition-all before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white checked:before:block before:hidden"
                        />
                        En orden
                      </label>
                      <label className="flex items-center gap-2 text-[#747474] mb-1">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="efectivo"
                          className="relative appearance-none w-3 h-3 rounded-full border-2 border-[#E50051] checked:bg-[#E50051] checked:border-[#E50051] focus:outline-none focus:ring-0 transition-all before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white checked:before:block before:hidden"
                        />
                        Picoteo (Condición Carta pica pica)
                      </label>
                      <label className="flex items-center gap-2 text-[#747474] mb-1">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="efectivo"
                          className="relative appearance-none w-3 h-3 rounded-full border-2 border-[#E50051] checked:bg-[#E50051] checked:border-[#E50051] focus:outline-none focus:ring-0 transition-all before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white checked:before:block before:hidden"
                        />
                        Para compartir
                      </label>
                    </div>
                  ) : (
                    <div>
                      <p className="text-white mb-1">Teléfono</p>
                      <input
                        type="tel"
                        className="w-full h-[18px] p-2 rounded-full font-mangoli text-[8px] border border-[#E50051] bg-black"
                        placeholder="Ingresa tu teléfono"
                      />
                      <p className="text-white mt-1 mb-1">
                        ¿Cuándo quieres el pedido?
                      </p>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="deliveryTime"
                          value="asap"
                          defaultChecked
                          className="relative appearance-none w-3 h-3 rounded-full border border-[#E50051] checked:bg-[#E50051] checked:border-[#E50051] focus:outline-none focus:ring-0 transition-all after:content-[''] after:w-1 after:h-1 after:rounded-full after:absolute after:top-[2px] after:left-[2px] after:bg-white checked:after:block after:hidden"
                        />
                        Lo antes posible
                      </label>
                      <div className="flex gap-2">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="deliveryTime"
                            value="schedule"
                            className="relative appearance-none w-3 h-3 rounded-full border border-[#E50051] checked:bg-[#E50051] checked:border-[#E50051] focus:outline-none focus:ring-0 transition-all after:content-[''] after:w-1 after:h-1 after:rounded-full after:absolute after:top-[2px] after:left-[2px] after:bg-white checked:after:block after:hidden"
                          />
                          Programar
                        </label>
                        <button className="bg-[#464646] text-[8px] px-3 py-1 rounded-full">
                          Fecha y Hora
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-white mb-1">Observaciones</p>
              <textarea
                className="w-full p-2 rounded-xl font-mangoli text-[8px] border border-[#E50051] bg-black min-h-[60px] resize-none"
                placeholder="Deja tu comentario aquí..."
              />
            </div>

            <div className="flex justify-center gap-4">
              <button className="border border-[#E50051] text-white px-4 py-1 rounded-full">
                Volver
              </button>
              <button className="bg-[#E50051] text-white px-4 py-1 rounded-full">
                Finalizar
              </button>
            </div>

            <p className="text-center mt-4">
              <span className="text-[#E50051]">Gracias</span> por preferirnos
            </p>
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

export default PayModal;
