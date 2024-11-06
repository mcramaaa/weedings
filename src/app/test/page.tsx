import React from "react";
import SweetWhite from "../template/sweet-white/SweetWhite";
import { DEFAULTDATA } from "@/constant/DEFAULTDATA";

export default function page() {
  const data = DEFAULTDATA;
  return <div>{data && <SweetWhite data={data} />}</div>;
}
