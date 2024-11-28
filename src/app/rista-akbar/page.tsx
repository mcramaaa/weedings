import React from "react";
import JavaneseGold from "../template/javanese-gold/JavaneseGold";
import { ristaAkbar } from "./data.constant";
import PageLayout from "./layout";

export default function Page() {
  return (
    <>
      <PageLayout>
        <JavaneseGold data={ristaAkbar} />
      </PageLayout>
    </>
  );
}
