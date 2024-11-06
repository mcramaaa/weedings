import React from "react";
import { BiSolidHomeHeart } from "react-icons/bi";
import { BsFillCalendar2HeartFill } from "react-icons/bs";
import { FaGift, FaUserCheck } from "react-icons/fa";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { RiHeartsFill } from "react-icons/ri";

export default function Navbar() {
  const navItem = [
    {
      icon: <BiSolidHomeHeart className="text-xl" />,
      label: "Home",
    },
    {
      icon: <RiHeartsFill className="text-xl" />,
      label: "Pasangan",
    },
    {
      icon: <BsFillCalendar2HeartFill className="text-xl" />,
      label: "Acara",
    },
    {
      icon: <FaGift className="text-xl" />,
      label: "Gift",
    },
    {
      icon: <FaUserCheck className="text-xl" />,
      label: "Tamu",
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="p-5 duration-500 w-full lg:w-1/2 drop-shadow-md">
        <div className="bg-white md:px-8 rounded-full gap-2 grid grid-flow-col p-3">
          {navItem.map((item) => (
            <button key={item.label} className="grid place-items-center ">
              <p className="">{item.icon}</p>
              {/* <p className="text-xs">{item.label}</p> */}
            </button>
          ))}
          <button className="flex justify-center items-center flex-col">
            <div className={`p-2 bg-pinky rounded-full animate-spin`}>
              <IoMusicalNotesSharp />
            </div>
            {/* <FaCirclePlay className="text-xl animate-spin" /> */}
            {/* <p className="text-xs">Musik</p> */}
          </button>
        </div>
      </div>
    </div>
  );
}
