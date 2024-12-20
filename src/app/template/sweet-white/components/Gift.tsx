import { IWeddingData } from "@/interfaces/IWeedingData";
import Link from "next/link";
import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { TfiGift } from "react-icons/tfi";

interface IProps {
  data: IWeddingData;
}
export default function Gift(props: IProps) {
  const { data } = props;
  return (
    <div className="mt-16">
      <div className="flex justify-center">
        <div className="font-fancy2 text-slate-700 font-bold text-5xl w-fit relative">
          <p>Wedding</p>
          <p className="font-dancing text-pinky text-6xl absolute top-6 -right-4">
            Gift
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-x-10 gap-y-10 mt-20">
        {data.gift?.map((item, i) => (
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

      <div className="flex justify-center items-center flex-wrap gap-x-10 gap-y-10 mt-20">
        {data.stuffGift?.map((data, i) => (
          <div
            key={i}
            className="relative p-3 w-[374px] rounded-2xl bg-white bg-[url('/pink-one/pinkBg.jpg')] bg-cover bg-center drop-shadow-md"
          >
            <div className="border-b-2 flex items-center font-bold justify-center gap-2 border-pinky pb-2 text-gold-dark">
              {/* <BsGiftFill /> */}
              <TfiGift className="text-3xl" />
              <p className="text-2xl">Kirim Hadiah</p>
            </div>
            <div className="">
              <p className="font-bold">Penerima :</p>
              <p>{data.name}</p>
            </div>
            <div className="">
              <p className="font-bold">Telepon :</p>
              <Link
                target="_blank"
                href={`https://api.whatsapp.com/send?phone=${data.phone}&text=Mau%20kirim%20Wedding%20Gift`}
              >
                {data.phone}
              </Link>
            </div>
            <div className="">
              <p className="font-bold">Alamat :</p>
              <p>{data.address}</p>
              <p>
                {data.kecamatan}, {data.kabupaten}, {data.provinsi},{" "}
                {data.posCode}
              </p>
              <div className="flex justify-center mt-5">
                <Link
                  href={data.location}
                  target="_blank"
                  className="px-4 w-fit py-1 flex items-center text-sm gap-3 bg-pinky text-white rounded-lg hover:scale-110 duration-500"
                >
                  <FaMapLocationDot />
                  Cek Lokasi
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
