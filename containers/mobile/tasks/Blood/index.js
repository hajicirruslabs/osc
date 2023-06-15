import * as S from "./styles";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSocket from "utils/hooks/sockets/useSocketMobile";
import Header from "foundations/tasks/Header";

export default function Comp({ userName = "Cyan", plantName = "Sage038", osc }) {
  const router = useRouter();
  const socket = useSocket({
    pageURL: "/screen/coming-soon",
  });

  function handleBackClick() {
    router.push(`/home?userName=${userName}&osc=${osc}`);
  }

  return (
    <S.Container>
      <Header
        color={"#AC4141"}
        data={{
          name: "Transfuse Blood",
          osc: 450,
        }}
        osc={osc}
        handleBackClick={handleBackClick}
      />
      <S.Text>
        <h1>Not available in your area</h1>
        <p>Requires immediate natural land access</p>
      </S.Text>

      <S.ImageZone>
        <img src="/assets/tasks/blood-1.svg" />
      </S.ImageZone>

      <S.ButtonZone>
        <S.Button onClick={() => router.push(`/home?userName=${userName}&osc=${osc}`)}>{"Return Home"}</S.Button>
        <p>Nature access in your region grows with OSC </p>
      </S.ButtonZone>
    </S.Container>
  );
}
