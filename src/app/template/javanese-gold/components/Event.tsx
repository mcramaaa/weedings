import AnimatedCard from "@/components/motion/AnimatedCard";
import { IWeddingData } from "@/interfaces/IWeedingData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";

interface IProps {
  data: IWeddingData;
}

export default function Event(props: IProps) {
  const { data } = props;
  return (
    <div className="mt-10 relative pb-20 overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute w-full md:w-1/2">
        <div className="relative aspect-square scale-150 md:scale-100">
          <Image
            src={"/javanese-gold/batikBckR.svg"}
            alt=""
            fill
            className="object-contain object-center animate-smallbig opacity-10"
          />
        </div>
      </div>
      <div className="hidden lg:block absolute top-0 w-full bg-gradient-to-b from-black h-24 text-white"></div>

      <div className="grid place-items-center">
        <AnimatedCard
          animationType="scale"
          className="relative aspect-[3/1] w-72 animate-smallbig overflow-hidden"
        >
          <Image
            src={"/pink-one/saveDate.png"}
            alt=""
            fill
            quality={100}
            className="object-cover object-center"
          />
        </AnimatedCard>
      </div>
      <div className="pb-10 px-5 mt-3">
        <AnimatedCard
          animationType="scale"
          className="text-center text-white text-sm px-5 lg:text-lg md:mx-40"
        >
          Kami sangat berharap Bapak/Ibu/Saudara/i dapat menghadiri rangkaian
          acara.
        </AnimatedCard>
        {/* <p className="text-center text-sm lg:text-lg md:mx-40">
          Hormat Kami Yang Berbahagia Kel. Bapak Moh Umar & Ibu Lusi Agustina
          Kel. Bapak Achmad Saechoni & Ibu Sri Harcicik
        </p> */}
      </div>

      {/* AKAD */}
      <div className="flex flex-wrap gap-y-10 gap-x-4 justify-center items-start">
        {data.event.map((event, i) => (
          <AnimatedCard animationType="slide" key={i} toLeft={i % 2 === 0}>
            <div className="px-5 text-sm w-[370px] font-fancy2 drop-shadow-lg">
              <div className="relative p-4 text-white">
                <div className="flex font-bold border-b pb-2 text-lg border-javanese flex-col items-center te">
                  <p>{event.tittle}</p>
                </div>
                <p className="text-center mt-2">{event.description}</p>
                <div className="mt-5 flex flex-col items-center">
                  <p className="font-dancing border-b border-javanese font-bold w-1/3 text-3xl text-center">
                    {event.day}
                  </p>
                  <p className="text-javanese-secondary font-bold text-6xl border-b border-javanese text-center w-1/3">
                    {event?.date?.split(" ")[0]}
                  </p>
                  <p className=" font-dancing text-2xl">
                    {event?.date?.split(" ")[1] +
                      " " +
                      event?.date?.split(" ")[2]}
                  </p>
                  <p className="text-javanese-secondary text-xl mt-2">
                    Pukul {event.time}
                  </p>
                  <p className="text-center font-bold text-lg mt-4">
                    {event.placeName}
                  </p>
                  <p className="text-center mt-2">{event.address}</p>
                  {event.locations && (
                    <Link
                      href={event.locations}
                      target="_blank"
                      className="py-1 mt-5 hover:scale-110 rounded-xl duration-300 flex items-center gap-2 bg-javanese text-white w-fit px-3"
                    >
                      <FaMapLocationDot />
                      Lokasi Acara
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
      <div className="hidden lg:block absolute bottom-0 w-full bg-gradient-to-b from-black/0 to-black h-24 text-white"></div>
    </div>
  );
}
