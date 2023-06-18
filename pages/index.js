import Head from "next/head";
import { BackgroundContainer } from "styles/common";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Intro from "containers/mobile/Intro";
import Login from "containers/mobile/Login";

import { NextSeo } from "next-seo";

export default function Page() {
  const [state, setState] = useState("intro");
  const [mountLogin, setMountLogin] = useState(false);
  const [userName, setUserName] = useState("Cyan");

  useEffect(() => {
    if (state === "intro") {
      const timeoutA = setTimeout(() => {
        setMountLogin(true);
      }, 300);
      const timeout = setTimeout(() => {
        setState("login");
      }, 1000);
      return () => {
        clearTimeout(timeout);
        clearTimeout(timeoutA);
      };
    }
  }, [state]);

  const router = useRouter();

  function handleNext({ name, osc, plant }) {
    setUserName(name);
    router.push(`/home?userName=${name}&osc=${osc}&plant=${plant}`);
  }

  return (
    <>
      <Head>
        <title>Organic Social Capital</title>
        <meta name="description" content="Organic Social Capital: For a flourishing life" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <NextSeo title="Organic Social Capital<" description="Organic Social Capital: For a flourishing life, a speculative design artwork by Cyan D'Anjou" />
      </Head>
      <BackgroundContainer>
        {mountLogin && <Login show={state === "login"} handleNext={handleNext} />}
        <Intro show={state === "intro"} />
      </BackgroundContainer>
    </>
  );
}
