import React from "react";
import Countdown from "./Countdown";

export default function Profile() {
  return (
    <div className="relative bg-[url('/pink-one/pinkBg.jpg')] bg-cover bg-center bg-pink-200">
      <div className="bg-gradient-to-b from-pinky/95 h-10"></div>
      <div className="flex absolute -top-7 justify-center w-full gap-4">
        <Countdown />
      </div>
      <div className="font-fancy2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        corporis enim earum incidunt iste! Consequuntur eaque nemo unde minima
        odit aperiam esse ullam laboriosam voluptate eligendi doloribus eum
        reiciendis magnam maxime, nulla necessitatibus adipisci, dolor est ad.
        Repudiandae, praesentium odio aliquid quasi incidunt sapiente fugiat
        ipsa cum illo rem impedit laborum eaque! Possimus molestiae, architecto
        debitis ducimus dolorem aut esse ea unde a autem et, enim velit magni
        accusamus illum aspernatur similique excepturi impedit consequuntur
        natus illo, recusandae odio? Inventore blanditiis consequatur error
        repudiandae eius, sint ab magni ad, illum voluptates cupiditate
        necessitatibus esse itaque at temporibus fugiat eaque adipisci!
      </div>
    </div>
  );
}
