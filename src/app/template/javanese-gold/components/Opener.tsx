import { IWeddingData } from "@/interfaces/IWeedingData";
import Image from "next/image";
import React from "react";
import { FiMail } from "react-icons/fi";

interface IProps {
  openMail: () => void;
  data: IWeddingData;
}

export default function Opener(props: IProps) {
  const { openMail, data } = props;
  const firstPerson = data.ladiesFirst ? data.woman.name : data.man.name;
  const secondPerson = data.ladiesFirst ? data.man.name : data.woman.name;
  return (
    <div className="bg-black relative h-screen w-screen grid place-items-center ">
      <div className="bg-[url('/javanese-gold/bgCouple2.png')] flex flex-col items-center h-full w-full bg-center bg-cover">
        <div className="bg-gradient-to-b from-black via-black/80 to-black/0 absolute w-full h-1/2"></div>
        <div className="aspect-[3/1] relative w-64 z-20 top-5">
          <Image src={"/javanese-gold/UpperHero.svg"} alt="" fill />
        </div>
        <div className="aspect-square absolute bottom-5 z-20 left-3 w-40">
          <Image src={"/javanese-gold/cornerLeft.svg"} alt="" fill />
        </div>
        <div className="aspect-square absolute bottom-5 z-20 right-3 w-40 ">
          <Image src={"/javanese-gold/cornerRight.svg"} alt="" fill />
        </div>
        <div className="bg-gradient-to-t from-black via-black/80 to-black/0 absolute bottom-0 w-full h-1/2"></div>

        <div className="text-white absolute w-full h-full grid place-items-center bg-black/70">
          <Image
            src={"/javanese-gold/gunungan.svg"}
            alt=""
            fill
            className="object-contain opacity-5"
          />
          <div className="flex w-full flex-col relative items-center">
            <div className="relative w-10 aspect-[1/2]">
              <Image
                src={"/javanese-gold/gunungan.svg"}
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <p className="font-dancing2 font-bold py-4 text-5xl">The Wedding</p>
            <div className="relative w-40 aspect-[3/1]">
              <Image
                src={"/javanese-gold/borderTop.svg"}
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-center mt-10">
              <div className="font-dancing2 text-center gap-3 pb-10 text-4xl flex">
                <p>{firstPerson}</p>
                <p>&</p>
                <p>{secondPerson}</p>
              </div>
              <p className="font-fancy2 pt-2">{data.eventDate}</p>
            </div>
            <button
              onClick={openMail}
              className="bg-white my-5 text-black flex items-center gap-2 px-4 py-1 rounded-lg"
            >
              <FiMail />
              Buka undangan
            </button>

            <div className="relative w-40 aspect-[3/1]">
              <Image
                src={"/javanese-gold/borderBottom.svg"}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
