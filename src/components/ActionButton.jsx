import React from "react";
import { motion } from "framer-motion";
import useStore from "../store/store";
const ActionButton = ({ active, onClick, Icon, label, buttonRef }) => {
  const { idMenu } = useStore();
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    tap: { scale: 0.95 },
  };
  return (
    <motion.button
      ref={buttonRef}
      className="w-[30px] h-[30px]  rounded-full
                      active:bg-amber-[#E50051] flex items-center justify-center"
      onClick={onClick}
      whileHover={buttonVariants.hover}
      whileTap={buttonVariants.tap}
      aria-label={label}
    >
      <motion.div
        animate={{
          scale: active ? [1, 1.2, 1] : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <Icon className="text-white w-6 h-6" />
      </motion.div>
    </motion.button>
  );
};

export default ActionButton;
