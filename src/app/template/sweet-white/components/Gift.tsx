import { IWeddingData } from "@/interfaces/IWeedingData";
import React from "react";

interface IProps {
  data: IWeddingData;
}
export default function Gift(props: IProps) {
  const { data } = props;
  return (
    <div className="mt-16">
      <div className="flex justify-center">
        <div className="font-fancy2 text-slate-700 font-bold text-5xl w-fit relative">
          <p>Weeding</p>
          <p className="font-dancing text-pinky text-6xl absolute top-6 -right-4">
            Gift
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-x-10 gap-y-10 mt-20">
        {data.gift.map((item, i) => (
          <div
            key={i}
            className="relative w-[374px] h-[225px] rounded-2xl bg-contain bg-no-repeat bg-[url('/pink-one/card.png')] bg-pinky"
          >
            <p className="absolute top-5 text-xl left-16 text-white font-bold">
              {item.bankName}
            </p>
            <p className="absolute bottom-16 text-xl left-6 font-bold">
              {item.accountNumber}
            </p>
            <p className="absolute bottom-6 left-6 font-bold">{item.name}</p>
            <button className="absolute bg-pinky text-white px-2 rounded-lg hover:scale-110 duration-500 font-bold right-4 bottom-[66px]">
              Salin Nomor
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
