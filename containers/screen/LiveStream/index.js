import * as S from "./styles";

import { useState, useEffect, Suspense } from "react";
import useResize from "utils/hooks/useResize";
import useRandomInterval from "utils/hooks/useRandomInterval";
import useSocket from "utils/hooks/sockets/screen/useSocketLiveStream";

const ARRAY_LEFT = ["Activated CO2 in %", "Care hours attended", "Blood-nitrogen in %", "Love given in Hearts", "OSC per capita"];

const ARRAY_RIGHT = [63, 12308, 3.4, 324589, 437];

const getRandom = (a, b) => Math.random() * (b - a) + a;
const getRandomInt = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);

export default function Comp() {
  const [windowWidth, windowHeight] = useResize();

  const [valA, setValA] = useState(63);
  const [valB, setValB] = useState(12308);
  const [valC, setValC] = useState(3.4);
  const [valD, setValD] = useState(324589);
  const [valE, setValE] = useState(437);

  const socket = useSocket({
    handleNewHeart,
  });

  function handleNewHeart(data) {
    console.log(data);
  }

  useRandomInterval(
    () => {
      if (Math.random() < 0.15) setValA((prev) => Math.max(prev + getRandom(-0.01, 0.01) * 63, 0));
      if (Math.random() < 0.1) setValB((prev) => Math.max(prev + getRandomInt(0, 2), 0));
      if (Math.random() < 0.2) setValC((prev) => Math.max(prev + getRandom(-0.01, 0.01) * 3.4, 0));
      setValD((prev) => Math.max(prev + getRandomInt(0, 2), 0));
      if (Math.random() < 0.1) setValE((prev) => Math.max(prev + getRandom(-0.01, 0.01) * 437, 0));
    },
    10,
    300
  );

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
              <S.ArrayItem key={index}>{item}</S.ArrayItem>
            ))}
          </S.ArrayLeft>
          <S.ArrayRight>
            {[valA.toFixed(1), valB.toFixed(0), valC.toFixed(2), valD.toFixed(0), valE.toFixed(0)].map((item, index) => (
              <S.ArrayItem key={index}>{item}</S.ArrayItem>
            ))}
          </S.ArrayRight>
        </S.Arrays>
      </S.InformationBoard>
    </S.Container>
  );
}
