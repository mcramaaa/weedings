import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";
import AnimatedCard from "./motion/AnimatedCard";

export default function FooterInvitation() {
  return (
    <div className="bg-black">
      <AnimatedCard animationType="slideToBottom">
        <div className="relative -mb-1 w-full aspect-[8/1]">
          <Image
            src={"/footerUpFrame.svg"}
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="w-full bg-white">
          <div className="flex justify-center pt-4 items-center gap-2 text-sm">
            <p>Made with</p> <FaHeart className="text-red-700" />
            <p>by</p>
            <Link
              href={
                "https://api.whatsapp.com/send?phone=6281330129266&text=Hai%20JasaWebKita"
              }
              target="_blank"
              className="font-bold"
            >
              JasaWebKita
            </Link>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
}
