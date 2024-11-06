import React from "react";
import SweetWhite from "./SweetWhite";
import { DEFAULTDATA } from "@/constant/DEFAULTDATA";

export default function page() {
  return (
    <div>
      <SweetWhite data={DEFAULTDATA} />
    </div>
  );
}
