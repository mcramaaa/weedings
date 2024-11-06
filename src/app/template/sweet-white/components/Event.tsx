import { IWeddingData } from "@/interfaces/IWeedingData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";

interface IProps {
  data: IWeddingData;
}

export default function Event(props: IProps) {
  const { data } = props;
  return (
    <div>
      <div className="bg-gradient-to-b from-white/0 grid place-items-center via-white to-white/0">
        <div className="relative aspect-[3/2] w-72 overflow-hidden">
          <Image
            src={"/pink-one/saveDate.png"}
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="pb-10 px-5">
        <p className="text-center text-sm px-5 lg:text-lg md:mx-40">
          Kami sangat berharap Bapak/Ibu/Saudara/i dapat menghadiri acara
          tersebut .
        </p>
        {/* <p className="text-center text-sm lg:text-lg md:mx-40">
          Hormat Kami Yang Berbahagia Kel. Bapak Moh Umar & Ibu Lusi Agustina
          Kel. Bapak Achmad Saechoni & Ibu Sri Harcicik
        </p> */}
      </div>

      {/* AKAD */}
      <div className="flex flex-wrap gap-y-10 gap-x-4 justify-center items-center">
        {data.event.map((event, i) => (
          <div key={i} className="px-5 text-sm w-[370px] font-fancy2">
            <div className="relative p-4 rounded-xl bg-white">
              <p className=" text-pinky text-6xl font-bold absolute -top-4 -left-4">
                <GiSelfLove />
              </p>
              <div className="flex font-bold border-b pb-2 text-lg border-pinky flex-col items-center te">
                <p>{event.tittle}</p>
              </div>
              <p className="text-center mt-2">{event.description}</p>
              <div className="mt-5 flex flex-col items-center">
                <p className="font-dancing border-b border-pinky font-bold w-1/3 text-3xl text-center">
                  {event.day}
                </p>
                <p className="text-pinky font-bold text-6xl border-b border-pinky text-center w-1/3">
                  {event.date.split(" ")[0]}
                </p>
                <p className=" font-dancing text-2xl">
                  {event.date.split(" ")[1] + " " + event.date.split(" ")[2]}
                </p>
                <p className="text-pinky text-xl mt-2">Pukul {event.time}</p>
                <p className="text-center font-bold text-lg mt-4">
                  {event.placeName}
                </p>
                <p className="text-center mt-2">{event.address}</p>
                <Link
                  href={event.locations}
                  target="_blank"
                  className="py-1 mt-5 hover:scale-110 rounded-xl duration-300 flex items-center gap-2 bg-pinky text-white w-fit px-3"
                >
                  <FaMapLocationDot />
                  Lokasi Acara
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
