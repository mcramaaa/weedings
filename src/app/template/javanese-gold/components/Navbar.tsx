import { useSection } from "@/hooks/zustand/useNav";
import React from "react";
import { BiSolidHomeHeart } from "react-icons/bi";
import { BsFillCalendar2HeartFill } from "react-icons/bs";
import { FaGift, FaUserCheck } from "react-icons/fa";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { RiHeartsFill } from "react-icons/ri";

interface IProps {
  isAudio: boolean;
  toggleAudio: () => void;
}

export default function Navbar(props: IProps) {
  const { isAudio, toggleAudio } = props;
  const { setSection } = useSection();
  const navItem = [
    {
      icon: <BiSolidHomeHeart className="text-xl" />,
      id: "home",
      label: "Home",
    },
    {
      icon: <RiHeartsFill className="text-xl" />,
      id: "profile",

      label: "Pasangan",
    },
    {
      icon: <BsFillCalendar2HeartFill className="text-xl" />,
      id: "event",
      label: "Acara",
    },
    {
      icon: <FaGift className="text-xl" />,
      id: "gift",
      label: "Gift",
    },
    {
      icon: <FaUserCheck className="text-xl" />,
      id: "guest",
      label: "Tamu",
    },
  ];
  function handleSection(key: string) {
    setSection(key);
  }

  return (
    <div className="flex justify-center">
      <div className="p-5 duration-500 w-full lg:w-1/2 drop-shadow-md">
        <div className="bg-white/95 backdrop-blur-xl md:px-8 rounded-full gap-2 grid grid-flow-col p-3">
          {navItem.map((item) => (
            <button
              key={item.label}
              onClick={() => handleSection(item.id)}
              className="grid place-items-center "
            >
              <p className="">{item.icon}</p>
              {/* <p className="text-xs">{item.label}</p> */}
            </button>
          ))}
          <button
            onClick={toggleAudio}
            className="flex justify-center items-center flex-col"
          >
            <div
              className={`p-2 bg-javanese-secondary rounded-full ${
                isAudio && "animate-spinslow"
              }`}
            >
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
