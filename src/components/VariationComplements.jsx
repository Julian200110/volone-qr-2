import { useState, useRef, useEffect } from "react";

const VariationComplements = ({
  isOpen,
  onCloseVariation,
  selectedItem,
  children,
}) => {
  if (!isOpen) return null;
  const [activeTab, setActiveTab] = useState("variaciones");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-black p-3 translate-y-[190px] rounded-[14px] shadow-lg relative max-w-[360px] w-full border border-[#E50051] h-[210px]">
        <button
          className="absolute top-2 right-2 text-white text-xl hover:text-[#E50051]"
          onClick={onCloseVariation}
        >
          ×
        </button>

        <div className="flex gap-4 mb-2 font-mangoli text-[14px] justify-center font-bold">
          <button
            className={` ${
              activeTab === "variaciones"
                ? "text-[#E50051] border-b-2 border-[#E50051]"
                : "text-white"
            }`}
            onClick={() => setActiveTab("variaciones")}
          >
            Variaciones
          </button>
          <button
            className={`${
              activeTab === "complementos"
                ? "text-[#E50051] border-b-2 border-[#E50051]"
                : "text-white"
            }`}
            onClick={() => setActiveTab("complementos")}
          >
            Complementos
          </button>
        </div>

        <div className="mt-2">
          {activeTab === "variaciones" ? (
            <div className="grid grid-cols-3 gap-4">
              <div className="relative group">
                <img
                  src="/img/Esparragos.png"
                  alt="Espárragos"
                  className="w-full h-24 object-cover rounded-lg"
                />
                <button className="absolute top-1 right-1 rounded-full p-1">
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
                </button>
                <p className="text-white text-[10px] mt-1 text-center">
                  Nombre
                </p>
              </div>
              <div className="relative group">
                <img
                  src="/img/Esparragos.png"
                  alt="Champiñones"
                  className="w-full h-24 object-cover rounded-lg"
                />
                <button className="absolute top-1 right-1 rounded-full p-1">
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
                </button>
                <p className="text-white text-[10px] mt-1 text-center font-mangoli  ">
                  Nombre
                </p>
              </div>
              <div className="relative group">
                <img
                  src="/img/Esparragos.png"
                  alt="Pescado"
                  className="w-full h-24 object-cover rounded-lg"
                />
                <button className="absolute top-1 right-1 rounded-full p-1">
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
                </button>
                <p className="text-white text-[10px] mt-1 text-center font-mangoli">
                  Nombre
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {/* Contenido similar para complementos */}
              <div className="relative group">
                <img
                  src="/img/Complementos.png"
                  alt="Complemento 1"
                  className="w-full h-24 object-cover rounded-lg"
                />
                <button className="absolute top-1 right-1 rounded-full p-1">
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
                </button>
                <p className="text-white text-[10px] mt-1 text-center font-mangoli">
                  Nombre
                </p>
              </div>
              {/* Agregar más complementos según sea necesario */}
            </div>
          )}
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button
            className="text-white text-[12px] border border-[#E50051] rounded-full px-4 py-1"
            onClick={onCloseVariation}
          >
            Volver
          </button>
          <button className="text-white text-[12px] bg-[#E50051] border border-[#E50051] rounded-full px-4 py-1">
            Finalizar
          </button>
        </div>
      </div>
    </div>
  );
};

export default VariationComplements;
