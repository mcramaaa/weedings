import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface IProps {
  animationType: "slide" | "scale" | "slideToBottom"; // Jenis animasi
  toLeft?: boolean; // Relevan untuk slide kiri/kanan
  isFromTop?: boolean; // Relevan untuk slide atas/bawah
  children: React.ReactNode;
  className?: string;
}

const AnimatedCard = ({
  children,
  animationType,
  toLeft = false, // Default nilai jika tidak diberikan
  isFromTop = false, // Default nilai jika tidak diberikan
  className = "", // Default nilai jika tidak diberikan
}: IProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 }); // 50% elemen terlihat sebelum animasi berjalan

  // Variants untuk animasi slide kiri/kanan
  const slideVariants = {
    hidden: { opacity: 0, x: toLeft ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 0, x: toLeft ? 100 : -100, transition: { duration: 1 } },
  };

  // Variants untuk animasi scale
  const scaleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 1 } },
  };

  // Variants untuk animasi slide atas/bawah
  const topBottomVariants = {
    hidden: { opacity: 0, y: isFromTop ? -100 : 100 }, // Lebih besar agar terlihat keluar viewport
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: {
      opacity: 0,
      y: isFromTop ? -100 : 100,
      transition: { duration: 1 },
    },
  };

  // Pilih variants berdasarkan tipe animasi
  const variants =
    animationType === "slide"
      ? slideVariants
      : animationType === "scale"
      ? scaleVariants
      : topBottomVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "exit"}
      variants={variants}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
