import React from "react";
import JavaneseGold from "../template/javanese-gold/JavaneseGold";
import { ristaAkbar } from "./data.constant";

export default function page() {
  return (
    <div>
      <JavaneseGold data={ristaAkbar} />
    </div>
  );
}
