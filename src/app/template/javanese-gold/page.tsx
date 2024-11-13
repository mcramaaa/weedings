import React from "react";
import { DEFAULTDATA } from "@/constant/DEFAULTDATA";
import JavaneseGold from "./JavaneseGold";

export default function page() {
  return (
    <div>
      <JavaneseGold data={DEFAULTDATA} />
    </div>
  );
}
