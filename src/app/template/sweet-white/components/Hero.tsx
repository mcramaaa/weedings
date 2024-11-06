import { IWeddingData } from "@/interfaces/IWeedingData";
import Image from "next/image";
import React from "react";

interface IProps {
  data?: IWeddingData;
}
export default function Hero(props: IProps) {
  const { data } = props;
  return (
    <div className="relative h-[80vh]">
      <Image
        src={"/pink-one/bgHero.jpg"}
        alt=""
        fill
        className="object-cover object-center -z-10"
      />
      <div className="bg-gradient-to-b from-white flex flex-col items-center justify-center gap-9 via-white/30 to-pinky/25 top-0 left-0 z-50 h-full">
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
              <p>The Wedding of</p>
            </div>
          </div>
        </div>
        <>
          <div className="relative rounded-full aspect-[1/1] w-52 overflow-hidden ">
            <Image
              src={data ? data?.img : "/public/pink-one/imgone.jpeg"}
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center ">
            <div className="font-dancing text-3xl flex gap-2 items-center font-bold">
              <p className="">{data?.man.name}</p>
              <p className="">&</p>
              <p className="">{data?.woman.name}</p>
            </div>
            <p className=" font-fancy2 mt-2">Sabtu, 5 Oktober 2024</p>
          </div>
        </>

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
  );
}
