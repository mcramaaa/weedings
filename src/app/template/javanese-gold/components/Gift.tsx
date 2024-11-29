import AnimatedCard from "@/components/motion/AnimatedCard";
import { useLayout } from "@/hooks/zustand/layout";
import { IWeddingData } from "@/interfaces/IWeedingData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { TfiGift } from "react-icons/tfi";

interface IProps {
  data: IWeddingData;
}
export default function Gift(props: IProps) {
  const { data } = props;
  const { setError, setIsSuccess } = useLayout();

  const handleCopyId = (id: string) => {
    navigator.clipboard
      .writeText(id)
      .then(() => {
        setIsSuccess(true, "Berhasil salin rekening");
      })
      .catch(() => {
        setError(true, "Gagal salin rekening");
      });
  };

  return (
    <div className="mt-16">
      <div className="flex justify-center">
        <AnimatedCard
          animationType="slideToBottom"
          isFromTop
          className="relative w-72 aspect-[2/1]"
        >
          <Image
            src={"/javanese-gold/gift.png"}
            alt=""
            fill
            className="object-contain object-center animate-updown"
          />
        </AnimatedCard>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-x-10 gap-y-10 mt-14">
        {data?.gift?.map((item, i) => (
          <AnimatedCard animationType="scale" key={i}>
            <div className="relative w-[374px] h-[225px] scale-90 rounded-2xl bg-contain bg-no-repeat bg-[url('/pink-one/card.png')] bg-javanese/50">
              <p className="absolute top-5 text-xl left-16 text-white font-bold">
                {item.bankName}
              </p>
              <p className="absolute bottom-16 text-xl left-6 font-bold">
                {item.accountNumber}
              </p>
              <p className="absolute bottom-6 left-6 font-bold">{item.name}</p>
              <button
                onClick={() => handleCopyId(item.accountNumber)}
                className="absolute flex items-center gap-2 bg-javanese text-white px-2 rounded-lg hover:scale-110 duration-500 font-bold right-4 bottom-[66px]"
              >
                <FaRegCopy />
                Salin Nomor
              </button>
            </div>
          </AnimatedCard>
        ))}
      </div>

      {data.stuffGift && (
        <div className="flex justify-center items-center flex-wrap p-6 gap-x-10 gap-y-10 mt-20">
          {data?.stuffGift?.map((data, i) => (
            <AnimatedCard
              animationType="scale"
              key={i}
              className="relative p-3 w-[374px] rounded-2xl bg-white bg-cover bg-center drop-shadow-md"
            >
              <p>tes</p>
              <div className="border-b-2 flex items-center font-bold justify-center gap-2 border-javanese pb-2 text-gold-dark">
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
                    className="px-4 w-fit py-1 flex items-center text-sm gap-3 bg-javanese font-bold text-white rounded-lg hover:scale-110 duration-500"
                  >
                    <FaMapLocationDot />
                    Cek Lokasi
                  </Link>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      )}
    </div>
  );
}
