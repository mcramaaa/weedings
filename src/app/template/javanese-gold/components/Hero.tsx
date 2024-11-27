import { IWeddingData } from "@/interfaces/IWeedingData";
import Image from "next/image";
import React from "react";
import Countdown from "../../sweet-white/components/Countdown";

interface IProps {
  data: IWeddingData;
}
export default function Hero(props: IProps) {
  const { data } = props;
  const eventDate = new Date(data.eventDate);
  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    weekday: "long", // Hari (contoh: Senin)
    day: "numeric", // Tanggal
    month: "long", // Nama bulan lengkap (contoh: Januari)
    year: "numeric", // Tahun (contoh: 2024)
    timeZone: "Asia/Jakarta", // WIB timezone
  }).format(eventDate);
  const firstPerson = data.ladiesFirst ? data.woman.name : data.man.name;
  const secondPerson = data.ladiesFirst ? data.man.name : data.woman.name;
  return (
    <div className="relative bg-[url('/javanese-gold/bgCouple.png')] overflow-hidden bg-center bg-cover h-[100vh]">
      <div className="absolute -top-52 sm:-top-60 w-full z-0 flex justify-center">
        <div className="relative w-full scale-125 aspect-[1/1] sm:aspect-square sm:max-w-[425px]">
          <Image
            // src={"/javanese-gold/heroTop.svg"}
            src={"/javanese-gold/roundBatik.svg"}
            alt=""
            fill
            className="object-contain sm:hidden scale-150 animate-spinsverylow"
          />
          <Image
            src={"/javanese-gold/roundBatik.svg"}
            alt=""
            fill
            className="hidden sm:block object-contain animate-spinsverylow"
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center bg-black/85">
        <div className="w-80 z-30">
          <div className="relative aspect-[3/1]">
            <Image
              src={"/javanese-gold/triangle.svg"}
              alt=""
              fill
              className="object-cover opacity-95"
            />
          </div>
          <div className="bg-black/95">
            <div className=" text-white relative flex flex-col items-center">
              <Image
                src={"/javanese-gold/gunungan.svg"}
                alt=""
                fill
                className="object-contain opacity-10"
              />
              <div className="relative w-10 aspect-[1/2]">
                <Image
                  src={"/javanese-gold/gunungan.svg"}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-dancing2 py-4 text-4xl">The Wedding</p>
              <div className="relative w-40 aspect-[3/1]">
                <Image
                  src={"/javanese-gold/borderTop.svg"}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center mt-10">
                <div className="font-dancing text-center gap-3 pb-10 text-4xl flex">
                  <p>{firstPerson}</p>
                  <p className="text-javanese-secondary">&</p>
                  <p>{secondPerson}</p>
                </div>
                <p className="font-fancy2 pt-2">{formattedDate}</p>
              </div>
              <div className="relative w-40 mt-3 aspect-[3/1]">
                <Image
                  src={"/javanese-gold/borderBottom.svg"}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="relative rotate-180 aspect-[3/1]">
            <Image
              src={"/javanese-gold/triangle.svg"}
              alt=""
              fill
              className="object-cover opacity-95"
            />
          </div>
          <div className="flex justify-center w-full mt-10 gap-4">
            <Countdown eventDate={data.eventDate} />
          </div>
        </div>
      </div>
      <div className="absolute flex justify-center -bottom-10 w-full">
        <div className="relative w-full aspect-square max-w-[425px]">
          <Image
            src={"/javanese-gold/roundBatik.svg"}
            alt=""
            fill
            className="animate-spinslow"
          />
        </div>
      </div>
      <div className="bg-gradient-to-t from-black to-black/0 absolute bottom-0 w-full h-1/2"></div>
    </div>
  );
}
