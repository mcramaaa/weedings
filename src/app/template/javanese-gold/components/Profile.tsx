import React from "react";
import Image from "next/image";
import { IWeddingData } from "@/interfaces/IWeedingData";
import AnimatedCard from "@/components/motion/AnimatedCard";

interface IProps {
  data: IWeddingData;
}

export default function Profile(props: IProps) {
  const { data } = props;
  const { ladiesFirst } = data;

  const firstPerson = ladiesFirst ? data.woman : data.man;
  const secondPerson = ladiesFirst ? data.man : data.woman;

  return (
    <div className="relative overflow-hidden pb-28 pt-10">
      <AnimatedCard
        animationType="slideToBottom"
        isFromTop
        className="flex flex-col mt-6 items-center"
      >
        <div className="relative aspect-[3/2] w-52 animate-updown">
          <Image
            src={"/javanese-gold/ourWeeding.png"}
            alt=""
            fill
            className="object-contain object-center"
            quality={100}
          />
        </div>
      </AnimatedCard>
      <div className="font-fancy2 mt-5">
        <AnimatedCard animationType="scale">
          <p className="text-center text-white px-10 w-full font-dancing text-2xl lg:text-lg md:mx-40">
            Assalamualaikum Wr.Wb
          </p>
          <p className="text-center text-white px-10 text-xs lg:text-lg md:mx-40 mt-2">
            Tanpa mengurangi rasa hormat, kami bermaksud mengundang
            Bapak/Ibu/Saudara/I untuk menghadiri acara pernikahan kami
          </p>
        </AnimatedCard>
        <div className="grid pt-10 lg:grid-cols-9 text-sm lg:text-lg lg:mx-20">
          {/* Bagian untuk First Person */}
          <div className="grid relative grid-cols-2 lg:grid-cols-3 lg:col-span-4">
            <div className="absolute w-full scale-150  left-0 -translate-x-1/2">
              <div className="relative w-full h-full aspect-square">
                <Image
                  src={"/javanese-gold/batikBckR.svg"}
                  alt=""
                  fill
                  className="object-contain object-center animate-smallrotate opacity-25"
                />
              </div>
            </div>
            <AnimatedCard animationType="slide" className="flex justify-center">
              <div className="relative aspect-[1/2] overflow-hidden w-52">
                <Image
                  src={firstPerson.img}
                  alt=""
                  fill
                  className="object-contain object-center"
                  quality={100}
                />
              </div>
            </AnimatedCard>

            <AnimatedCard
              animationType="slide"
              toLeft
              className="lg:order-first flex text-javanese-white text-center lg:col-span-2 p-4 gap-y-3 justify-center flex-col"
            >
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
            </AnimatedCard>
          </div>

          <div className="grid place-items-center w-full text-8xl text-javanese-secondary font-dancing">
            <p>&</p>
          </div>

          {/* Bagian untuk Second Person */}
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:col-span-4 h-fit relative">
            <div className="absolute w-full scale-150  left-0 translate-x-1/2">
              <div className="relative w-full h-full aspect-square">
                <Image
                  src={"/javanese-gold/batikBckL.svg"}
                  alt=""
                  fill
                  className="object-contain object-center animate-smallrotate opacity-25"
                />
              </div>
            </div>

            <AnimatedCard
              animationType="slide"
              // isRigt={false}
              className="flex text-center text-javanese-white p-4 lg:col-span-2 justify-center gap-y-3 flex-col"
            >
              <p className="text-white">
                {ladiesFirst ? "Mempelai  Pria" : "Mempelai Wanita"}
              </p>
              <p className="font-dancing text-3xl lg:text-4xl text-wrap">
                {secondPerson.fullName}
              </p>
              <div className="border-y border-javanese py-3">
                <p className="font-bold text-white">{secondPerson.anak}</p>
                <p>
                  {secondPerson.bapak} & {secondPerson.ibu}
                </p>
              </div>
            </AnimatedCard>
            <AnimatedCard
              animationType="slide"
              className="flex lg:order-first justify-center"
              toLeft
            >
              <div className="relative aspect-[1/2] w-52">
                <Image
                  src={secondPerson.img}
                  alt=""
                  fill
                  className="object-contain object-center"
                  quality={100}
                />
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </div>
  );
}
