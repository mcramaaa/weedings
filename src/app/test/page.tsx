import { IPageParams } from "@/interfaces/IPageParams";
import React from "react";
import SweetWhite from "../template/sweet-white/page";

export default function page(props: IPageParams) {
  console.log(props);
  return (
    <div>
      <SweetWhite />
    </div>
  );
}
