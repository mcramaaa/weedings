import React from "react";
import JavaneseGold from "../template/javanese-gold/JavaneseGold";
import { ristaAkbar } from "./data.constant";
import PageLayout from "./layout";

export default async function Page(props: any) {
  return (
    <>
      <PageLayout>
        <JavaneseGold data={ristaAkbar} pageParams={props} />
      </PageLayout>
    </>
  );
}
