import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="relative">
      <Image
        src={"/pink-one/bgHero.jpg"}
        alt=""
        fill
        className="object-cover object-center -z-10"
      />
      {/* <Image
        src={"/pink-one/bgHero.jpg"}
        alt=""
        fill
        className="object-cover object-center -z-10"
      /> */}
      <div className="bg-gradient-to-b from-white flex flex-col items-center gap-9 pt-36  via-white/30 to-pinky/25 top-0 left-0 z-50 w-screen h-screen">
        <div className="flex justify-center items-center gap-2 ">
          <div className="font-dancing font-bold gap-3 text-gold-dark flex items-center text-5xl lg:text-6xl duration-300">
            <p>We</p>
            <div className="flex flex-col text-3xl lg:text-4xl items-center duration-300">
              <p>are</p>
              <p>getting</p>
            </div>
            <p>Married</p>
          </div>
        </div>
        <div className="relative rounded-full aspect-square w-64 overflow-hidden ">
          <Image
            src={"/pink-one/imgone.jpeg"}
            alt=""
            fill
            className="object-contain object-center"
          />
        </div>
        <p className="">Jono</p>
        <p className="">&</p>
        <p className="">Jeni</p>
        <button className="bg-white/80 px-4 py-1 rounded-lg">
          Buka undangan
        </button>
      </div>
    </div>
  );
}
