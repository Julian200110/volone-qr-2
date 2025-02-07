import { FaArrowLeft } from "react-icons/fa";

const Popup = ({
  selectedItem,
  handleBack,
  handleAddToCartAndGoCart,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-black w-[300px] rounded-lg overflow-hidden shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-[#E50051] transition-colors duration-300 z-10"
        >
          ✕
        </button>
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
        <div className="p-6">
          <h3 className="text-[20px] font-semibold text-white mb-2">
            {selectedItem.title}
          </h3>
          {selectedItem.isChefSuggestion && (
            <div className="flex items-center text-[9px] text-[#FF9F06] underline mb-2">
              <img
                src="/img/Sugerencia.svg"
                alt="Vector"
                className="mr-2 w-4 h-4"
              />
              <p>SUGERENCIA DEL CHEF</p>
            </div>
          )}
          <p className="text-white text-[11px] text-justify mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="text-white text-[16px] underline mb-2">Alérgenos</div>
          <div className="flex space-x-4 mb-4">
            <div className="flex flex-col items-center">
              <img src="/img/Icono.svg" alt="Huevos" className="w-5 h-5" />
              <p className="text-white text-[12px]">Huevos</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/img/Icono.svg" alt="Pescado" className="w-5 h-5" />
              <p className="text-white text-[12px]">Pescado</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/img/Icono.svg" alt="Lácteos" className="w-5 h-5" />
              <p className="text-white text-[12px]">Lácteos</p>
            </div>
          </div>
          <button
            onClick={handleAddToCartAndGoCart}
            className="w-full bg-[#E50051] text-white py-2 rounded-full hover:bg-[#e59200] transition-all"
          >
            Agregar al pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
