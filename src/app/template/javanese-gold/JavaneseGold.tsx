"use client";

import { IWeddingData } from "@/interfaces/IWeedingData";
import React, { useEffect, useState } from "react";
import Opener from "./components/Opener";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import OurStory from "./components/OurStory";
import Event from "./components/Event";
import Gift from "./components/Gift";
import CommentComponent from "./components/Comment";

interface IProps {
  to?: string;
  conditions?: unknown;
  data: IWeddingData;
}

export default function JavaneseGold(props: IProps) {
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
    <div
      className={`${
        isOpen ? "" : "h-screen overflow-hidden "
      } relative bg-black`}
    >
      <div
        className={`z-50 absolute top-0 h-screen bg-white transition-transform duration-1000 ease-in-out ${
          isOpen ? "-translate-y-full" : "translate-y-0"
        } ${isHide && "hidden"}`}
      >
        <Opener data={data} openMail={() => setIsOpen(true)} />
      </div>
      <Hero data={data} />
      <Profile data={data} />
      {data.loveStory && <OurStory storyData={data.loveStory} />}
      <Event data={data} />
      {data.gift && <Gift data={data} />}
      <CommentComponent />
    </div>
  );
}
