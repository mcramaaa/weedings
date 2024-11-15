import React from "react";
import Image from "next/image";
import { IWeddingData } from "@/interfaces/IWeedingData";

interface IProps {
  data: IWeddingData;
}

export default function Profile(props: IProps) {
  const { data } = props;
  const { ladiesFirst } = data;

  const firstPerson = ladiesFirst ? data.woman : data.man;
  const secondPerson = ladiesFirst ? data.man : data.woman;

  return (
    <div className="relative">
      <div className="flex flex-col mt-6 items-center">
        <div className="relative aspect-[3/2] w-52">
          <Image
            src={"/javanese-gold/ourWeeding.png"}
            alt=""
            fill
            className="object-contain object-center"
            quality={100}
          />
        </div>
      </div>
      <div className="font-fancy2">
        <p className="text-center text-xs lg:text-lg md:mx-40">
          Tanpa mengurangi rasa hormat, kami bermaksud mengundang
          Bapak/Ibu/Saudara/I untuk menghadiri acara pernikahan kami
        </p>
        <div className="grid pt-10 lg:grid-cols-9 text-sm lg:text-lg lg:mx-20">
          {/* Bagian untuk First Person */}
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:col-span-4">
            <div className="flex justify-center">
              <div className="relative aspect-[1/2] rounded-b-full flex justify-center rounded-t-full overflow-hidden w-40 lg:w-52">
                <Image
                  src={firstPerson.img}
                  alt=""
                  fill
                  className="object-contain object-center"
                  quality={100}
                />
                {/* <div className="absolute font-dancing font-bold text-3xl bottom-7 py-1 bg-white w-full text-center">
                  {firstPerson.name}
                </div> */}
              </div>
            </div>
            <div className="md:order-first flex text-javanese-white text-center lg:col-span-2 p-4 gap-y-3 justify-center flex-col">
              <p className="text-white">
                {ladiesFirst ? "Mempelai Wanita" : "Mempelai Pria"}
              </p>
              <p className="font-dancing text-3xl lg:text-4xl text-wrap">
                {firstPerson.fullName}
              </p>
              <div className="border-y border-javanese py-3">
                <p className="font-bold text-white">{firstPerson.anak}</p>
                <p>
                  {firstPerson.bapak} & {firstPerson.ibu}
                </p>
              </div>
            </div>
          </div>

          <div className="grid place-items-center w-full text-8xl text-javanese-secondary font-dancing">
            <p>&</p>
          </div>

          {/* Bagian untuk Second Person */}
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:col-span-4 h-fit">
            <div className="flex text-center text-javanese-white p-4 lg:col-span-2 justify-center gap-y-3 flex-col">
              <p className="text-white">
                {ladiesFirst ? "Mempelai Wanita" : "Mempelai Pria"}
              </p>
              <p className="font-dancing text-2xl lg:text-4xl text-wrap">
                {secondPerson.fullName}
              </p>
              <div className="border-y border-javanese py-3">
                <p className="font-bold text-white">{secondPerson.anak}</p>
                <p>
                  {secondPerson.bapak} & {secondPerson.ibu}
                </p>
              </div>
            </div>
            <div className="flex md:order-first justify-center">
              <div className="relative aspect-[1/2] rounded-b-full flex justify-center rounded-t-full overflow-hidden w-40 lg:w-52">
                <Image
                  src={secondPerson.img}
                  alt=""
                  fill
                  className="object-contain object-center"
                  quality={100}
                />
                {/* <div className="absolute font-dancing font-bold text-3xl bottom-7 py-1 bg-white w-full text-center">
                  {secondPerson.name}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
