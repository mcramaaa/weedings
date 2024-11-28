import { IWeddingData } from "@/interfaces/IWeedingData";
import React from "react";

interface IProps {
  data: IWeddingData;
}

export default function Closing(props: IProps) {
  const { data } = props;
  const firstPerson = data.ladiesFirst ? data.woman.name : data.man.name;
  const secondPerson = data.ladiesFirst ? data.man.name : data.woman.name;
  return (
    <div className="text-white">
      <p className="font-dancing text-center text-3xl">
        Wassalamu&apos;alaikum
      </p>
      <p className="font-dancing text-center text-3xl">
        Warahmatullahi wabarakatuh
      </p>
      <div className="flex justify-center items-center mt-3 w-full gap-2">
        <div className="h-[2px] w-full bg-gradient-to-l from-white to-white/0 "></div>
        <p className="font-fancy2 text-nowrap w-fit text-javanese-secondary text-center ">
          Atas kehadirannya kami ucapkan
        </p>
        <div className="h-[2px] w-full bg-gradient-to-r from-white to-white/0"></div>
      </div>
      <p className="font-dancing text-center text-3xl mt-1">Terimakasih</p>
      <div className="flex font-fancy2 flex-col items-center mt-10">
        <p>hormat kami</p>
        <div className="font-dancing mt-3 text-center gap-3 pb-10 text-4xl flex">
          <p>{firstPerson}</p>
          <p className="text-javanese-secondary">&</p>
          <p>{secondPerson}</p>
        </div>
      </div>
      <div className="bg-gradient-to-b from-white/0 to-white h-20"></div>
    </div>
  );
}
