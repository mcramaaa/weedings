import Image from "next/image";
import React from "react";
import { FiMail } from "react-icons/fi";

interface IProps {
  openMail: () => void;
}

export default function Opener(props: IProps) {
  const { openMail } = props;
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
      <div className="bg-gradient-to-b from-white flex flex-col items-center gap-9 pt-28 via-white/30 to-pinky/25 top-0 left-0 z-50 w-screen h-screen">
        <div className="flex items-center flex-col">
          <div className="relative rounded-full aspect-[2/1] w-52 overflow-hidden ">
            <Image
              src={"/pink-one/upper.png"}
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="flex justify-center items-center gap-2 ">
            <div className="font-dancing font-bold gap-3 text-gold-dark flex items-center text-5xl lg:text-6xl duration-300">
              <p>The Weeding of</p>
              {/* <p>We</p>
              <div className="flex flex-col text-3xl lg:text-4xl items-center duration-300">
                <p>are</p>
                <p>getting</p>
              </div>
              <p>Married</p> */}
            </div>
          </div>
        </div>
        <div className="relative rounded-full aspect-[1/1] w-52 overflow-hidden ">
          <Image
            src={"/pink-one/imgone.jpeg"}
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="font-dancing text-3xl flex gap-2 items-center font-bold">
            <p className="">Jono</p>
            <p className="">&</p>
            <p className="">Jeni</p>
          </div>
          <p className="font-fancy mt-2">Sabtu, 5 Oktober 2024</p>
        </div>
        <div className="flex flex-col items-center">
          <button
            onClick={openMail}
            className="bg-white/80 flex items-center gap-2 px-4 py-1 rounded-lg"
          >
            <FiMail />
            Buka undangan
          </button>
          <div className="relative rotate-180 rounded-full aspect-[2/1] w-52 overflow-hidden ">
            <Image
              src={"/pink-one/upper.png"}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
