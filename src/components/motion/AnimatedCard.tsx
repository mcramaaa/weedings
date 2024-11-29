import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface IProps {
  isRigt: boolean; // Animasi masuk dari kiri atau kanan
  children: React.ReactNode;
}

const AnimatedCard = ({ children, isRigt }: IProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 }); // 50% elemen terlihat sebelum animasi berjalan

  const variants = {
    hidden: { opacity: 0, x: isRigt ? -100 : 100 }, // Mulai di luar layar
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Masuk ke posisi tengah
    exit: { opacity: 0, x: isRigt ? 100 : -100, transition: { duration: 1 } }, // Keluar dari layar
  };

  return (
    <motion.div
      ref={ref} // Hubungkan dengan useInView
      initial="hidden"
      animate={isInView ? "visible" : "exit"} // Jalankan animasi berdasarkan scroll
      variants={variants}
      className="flex justify-center"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
