import AnimatedCard from "@/components/motion/AnimatedCard";
import Image from "next/image";
import React from "react";

interface Iprops {
  storyData: { label: string; description: string }[];
}

export default function OurStory(props: Iprops) {
  const { storyData } = props;
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-52 aspect-[2/1]">
        <Image
          src={"/javanese-gold/ourStory.png"}
          alt=""
          fill
          className="object-contain object-center animate-updown"
        />
      </div>
      <div className="relative w-full h-full bg-white mt-5 overflow-hidden">
        <div className="relative aspect-[10/2] scale-105 flex justify-center">
          <Image
            src={"/javanese-gold/roundFrame.svg"}
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className=" bg-[url(/javanese-gold/batikBckR.svg)] bg-transparent bg-cover md:bg-contain bg-opacity-85 bg-no-repeat w-full bg-center">
          <div className="bg-white/85 p-4 flex flex-col md:justify-center items-center md:items-start md:px-32 w-full md:flex-row md:flex-wrap gap-10">
            {storyData.map((data, i) => (
              <AnimatedCard key={i} isRigt={i % 2 === 0 ? true : false}>
                <div
                  key={i}
                  className="flex flex-col items-center lg:w-[360px]"
                >
                  <div className="flex items-center bg-black px-4 py-1 rounded-full gap-2 text-white font-bold">
                    <div className="aspect-square w-5 rotate-90 relative">
                      <Image
                        src={"/javanese-gold/borderBottom.svg"}
                        alt=""
                        fill
                      />
                    </div>
                    <p>{data.label}</p>
                    <div className="aspect-square w-5 -rotate-90 relative">
                      <Image
                        src={"/javanese-gold/borderBottom.svg"}
                        alt=""
                        fill
                      />
                    </div>
                  </div>
                  <p className="text-sm mt-3 text-justify">
                    {data.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
        <div className="relative rotate-180 aspect-[10/2] scale-105 flex justify-center">
          <Image
            src={"/javanese-gold/roundFrame.svg"}
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
