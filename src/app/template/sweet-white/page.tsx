import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

interface IProps {
  to?: string;
  conditions?: unknown;
}

export default function SweetWhite(props: IProps) {
  console.log(props);
  return (
    <div className="relative overflow-hidden">
      {/* <Navbar /> */}
      <Hero />
    </div>
  );
}
