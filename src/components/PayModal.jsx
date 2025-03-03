import { useState, useRef, useEffect } from "react";
import VariationComplements from "./VariationComplements";
const PayModal = ({ isOpen, onClose, selectedItem, children }) => {
  if (!isOpen) return null;
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const [isVariationlOpen, setIsVariationlOpen] = useState(false);
  const openModal = () => setIsVariationlOpen(true);
  const closeModal = () => setIsVariationlOpen(false);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-black p-6 rounded-[14px] shadow-lg relative max-w-[360px] w-full border-2 border-dashed  border-[#E50051] h-[580px]">
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
          <div>
            <div className="flex justify-between mt-2">
              <p>Método de pago</p>
              <p>Total: 00</p>
            </div>
            <div className="flex"></div>
          </div>
          <div></div>
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
