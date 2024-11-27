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
    <div className="mt-10">
      <div className="from-white/0 grid place-items-center">
        <div className="relative aspect-[3/1] w-72 overflow-hidden">
          <Image
            src={"/pink-one/saveDate.png"}
            alt=""
            fill
            quality={100}
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="pb-10 px-5">
        <p className="text-center text-white text-sm px-5 lg:text-lg md:mx-40">
          Kami sangat berharap Bapak/Ibu/Saudara/i dapat menghadiri rangkaian
          acara.
        </p>
        {/* <p className="text-center text-sm lg:text-lg md:mx-40">
          Hormat Kami Yang Berbahagia Kel. Bapak Moh Umar & Ibu Lusi Agustina
          Kel. Bapak Achmad Saechoni & Ibu Sri Harcicik
        </p> */}
      </div>

      {/* AKAD */}
      <div className="flex flex-wrap gap-y-10 gap-x-4 justify-center items-center">
        {data.event.map((event, i) => (
          <div
            key={i}
            className="px-5 text-sm w-[370px] font-fancy2 drop-shadow-lg"
          >
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
        ))}
      </div>
    </div>
  );
}
