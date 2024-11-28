"use client";

import { IWeddingData } from "@/interfaces/IWeedingData";
import React, { useEffect, useState, useRef } from "react";
import Opener from "./components/Opener";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import OurStory from "./components/OurStory";
import Event from "./components/Event";
import Gift from "./components/Gift";
import CommentComponent from "./components/Comment";
import Navbar from "./components/Navbar";
import { useSection } from "@/hooks/zustand/useNav";
import Closing from "./components/Closing";
import FooterInvitation from "@/components/FooterInvitation";

interface IProps {
  to?: string;
  conditions?: unknown;
  data: IWeddingData;
}

export default function JavaneseGold(props: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const { data } = props;

  const { section } = useSection();

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // } else if (id === "contact") {
      //   window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Reference to audio element
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Handle play/pause functionality
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (section) {
      scrollToSection(section);
    }
  }, [section]);

  useEffect(() => {
    // setSection("home");
    audioRef.current?.play();
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsHide(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      <div className={`${isOpen ? "" : "h-screen overflow-hidden "} relative`}>
        <audio ref={audioRef} src={data.music} />
        <div className="bg-black">
          <div
            className={`z-50 absolute top-0 h-screen bg-white transition-transform duration-1000 ease-in-out ${
              isOpen ? "-translate-y-full" : "translate-y-0"
            } ${isHide && "hidden"}`}
          >
            <Opener data={data} openMail={() => setIsOpen(true)} />
          </div>
          <div id="home"></div>
          <Hero data={data} />
          <div id="profile"></div>
          <Profile data={data} />

          <div id="story"></div>
          {data.loveStory && <OurStory storyData={data.loveStory} />}
          <div id="event"></div>
          <Event data={data} />
          <div id="gift"></div>
          {data.gift && <Gift data={data} />}
          <div id="guest"></div>
          <CommentComponent />
          <Closing data={data} />
        </div>
        <FooterInvitation />
        {isOpen && (
          <div className="sticky bottom-0 z-50">
            <Navbar toggleAudio={toggleAudio} isAudio={isPlaying} />
          </div>
        )}
      </div>
    </>
  );
}
