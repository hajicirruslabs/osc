import Head from "next/head";
import { BackgroundContainer } from "styles/common";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Main from "containers/screen/Main";

export default function Page() {
  const router = useRouter();
  const { userName, osc } = router.query;

  return (
    <>
      <Head>
        <title>OSC: Screen</title>
        <meta name="description" content="OSC Screen" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <BackgroundContainer>
        <Main />
      </BackgroundContainer>
    </>
  );
}
