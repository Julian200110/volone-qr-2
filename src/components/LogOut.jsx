import { useState, useRef, useEffect } from "react";
import VariationComplements from "./VariationComplements";
const LogOut = ({ isOpen, onClose, selectedItem, children }) => {
  if (!isOpen) return null;
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const [isVariationlOpen, setIsVariationlOpen] = useState(false);
  const openModal = () => setIsVariationlOpen(true);
  const closeModal = () => setIsVariationlOpen(false);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-black  rounded-[9px] p-8 shadow-lg relative max-w-[190px] w-full text-[14px] text-white border border-[#E50051] h-[89px] flex items-center justify-center text-center">
        {/* <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button> */}
        <p>Su sesión se ha cerrado</p>
      </div>
    </div>
  );
};

export default LogOut;
