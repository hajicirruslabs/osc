import * as S from "./styles";

import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/router";

import useSocket from "utils/hooks/sockets/screen/useSocketWaiting";

export default function Comp() {
  const socket = useSocket({
    handleNewPageLocation,
  });
  ///page management
  const router = useRouter();
  function handleNewPageLocation(data) {
    router.push(data);
  }

  return (
    <S.Container>
      <S.Background>
        <img src="/assets/screen/Coming-Soon.png" alt="Plant Image" />
      </S.Background>
      <S.BackgroundLogo>
        <img src="/assets/screen/Company-Logo.svg" alt="logo" />
      </S.BackgroundLogo>
      <S.LogoContainer>
        <img src="/assets/images/logo-small.svg" alt="logo" />
      </S.LogoContainer>
      <S.Top>Soon in the Northeastern Temperates</S.Top>

      <S.Info>
        <h1>Hair Follicle Extraction</h1>
        <h2>Share more by going back to your roots</h2>
      </S.Info>
      <S.Button>
        <div>Join the waitlist</div>
        <p>available Aug 23 </p>
      </S.Button>
      <S.Footer>Powered by Jinhua Group Ltd.</S.Footer>
    </S.Container>
  );
}
