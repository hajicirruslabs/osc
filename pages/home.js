import Head from "next/head";
import { BackgroundContainer } from "styles/common";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Home from "containers/mobile/Home";

export default function Page() {
  const router = useRouter();
  const { userName, osc } = router.query;

  return (
    <>
      <Head>
        <title>OSC: Home</title>
        <meta name="description" content="OSC HOme" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <BackgroundContainer>
        <Home show={true} userName={userName || "Cyan"} osc={parseFloat(osc) || 310} />
      </BackgroundContainer>
    </>
  );
}
