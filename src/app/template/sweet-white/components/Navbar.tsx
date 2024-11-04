import React from "react";
import { BiSolidHomeHeart } from "react-icons/bi";
import { BsFillCalendar2HeartFill } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa";
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
      icon: <BsFillCalendar2HeartFill />,
      label: "Acara",
    },
    {
      icon: <FaUserCheck className="text-xl" />,
      label: "Tamu",
    },
  ];
  return (
    <div className="p-5 drop-shadow-md">
      <div className="bg-white rounded-full items-center flex p-2">
        {navItem.map((item) => (
          <div
            key={item.label}
            className="flex justify-center items-center flex-col w-full"
          >
            <p className="">{item.icon}</p>
            <p className="text-xs">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
