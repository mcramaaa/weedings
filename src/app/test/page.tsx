import { IPageParams } from "@/interfaces/IPageParams";
import React from "react";
import SweetWhite from "../template/sweet-white/page";
import { DEFAULTDATA } from "@/constant/DEFAULTDATA";

export default function page(props: IPageParams) {
  console.log(props);
  return (
    <div>
      <SweetWhite data={DEFAULTDATA} />
    </div>
  );
}
