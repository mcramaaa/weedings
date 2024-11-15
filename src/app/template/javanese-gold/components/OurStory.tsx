import Image from "next/image";
import React from "react";

export default function OurStory() {
  return (
    <div>
      <div className="relative aspect-[2/1]">
        <Image
          src={"/javanese-gold/ourStory.png"}
          alt=""
          fill
          className="object-contain object-center"
        />
      </div>
    </div>
  );
}