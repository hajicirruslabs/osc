import * as S from "./styles";

import { useState, useEffect, Suspense } from "react";
import useResize from "utils/hooks/useResize";

const ARRAY_LEFT = ["Activated CO2 in %", "Care hours attended", "Blood-nitrogen in %", "Love given in Hearts", "OSC per capita"];

const ARRAY_RIGHT = [63, 12308, 3.4, 324589, 437];

export default function Comp() {
  const [windowWidth, windowHeight] = useResize();

  return (
    <S.Container>
      <S.LogoContainer>
        <img src="/assets/images/logo-small.svg" alt="logo" />
      </S.LogoContainer>

      <S.VideoContainer>
        <video
          width={Math.max(windowWidth, (windowHeight * 16) / 9)}
          height={Math.max(windowHeight, (windowWidth * 9) / 16)}
          style={{
            width: Math.max(windowWidth, (windowHeight * 16) / 9),
            height: Math.max(windowHeight, (windowWidth * 9) / 16),
          }}
          src="/assets/videos/vid.mp4"
          type="video/mp4"
          autoPlay="autoplay"
          loop
          playsInline
          muted
          preload="auto"
          controls={false}
        />
      </S.VideoContainer>

      <S.VideoUpper>
        <S.Live>Live</S.Live>
        <img src="/assets/screen/Viewers.svg" />
        {234}
      </S.VideoUpper>

      <S.InformationBoard>
        <S.Title>
          <h1>Northeastern Urban Temperates</h1>
          <p>Live Output</p>
        </S.Title>
        <S.Arrays>
          <S.ArrayLeft>
            {ARRAY_LEFT.map((item, index) => (
              <S.ArrayItem>{item}</S.ArrayItem>
            ))}
          </S.ArrayLeft>
          <S.ArrayRight>
            {ARRAY_RIGHT.map((item, index) => (
              <S.ArrayItem>{item}</S.ArrayItem>
            ))}
          </S.ArrayRight>
        </S.Arrays>
      </S.InformationBoard>
    </S.Container>
  );
}
