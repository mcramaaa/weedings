"use client";

import React, { useState } from "react";
import Opener from "./components/Opener";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

interface IProps {
  to?: string;
  conditions?: unknown;
}

export default function SweetWhite(props: IProps) {
  console.log(props);
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div
      className={`${
        isOpen ? "" : "h-screen overflow-hidden"
      } relative w-screen `}
    >
      <div
        className={`z-50 absolute top-0 left-0 h-screen w-screen bg-white transition-transform duration-1000 ease-in-out ${
          isOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <Opener
          openMail={() => {
            setIsOpen(true);
          }}
        />
      </div>
      <div>
        <Hero />
        <Profile />
      </div>
      <div className="sticky bottom-0">
        <Navbar />
      </div>
    </div>
  );
}
