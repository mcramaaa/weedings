"use client";

import React, { useState, useEffect } from "react";
import Opener from "./components/Opener";
import { IWeddingData } from "@/interfaces/IWeedingData";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Event from "./components/Event";
import Gift from "./components/Gift";

interface IProps {
  to?: string;
  conditions?: unknown;
  data: IWeddingData;
}

export default function SweetWhite(props: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const { data } = props;

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsHide(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div className={`${isOpen ? "" : "h-screen overflow-hidden "} relative`}>
      <div
        className={`z-50 absolute top-0 h-screen bg-white transition-transform duration-1000 ease-in-out ${
          isOpen ? "-translate-y-full" : "translate-y-0"
        } ${isHide && "hidden"}`}
      >
        <Opener
          data={data}
          openMail={() => {
            setIsOpen(true);
          }}
        />
      </div>
      <>
        <Hero data={data} />
        <div className=" bg-[url('/pink-one/pinkBg.jpg')] bg-cover bg-center bg-pink-200">
          <Profile data={data} />
          <Event data={data} />
          <Gift data={data} />
          <div className="sticky bottom-0 mt-10">
            <Navbar />
          </div>
        </div>
      </>
    </div>
  );
}
