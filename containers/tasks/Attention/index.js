import * as S from "./styles";

import { useState, useEffect } from "react";
import useRandomInterval from "utils/hooks/useRandomInterval";
import { useRouter } from "next/router";
import Header from "foundations/tasks/Header";

export default function Comp({ userName = "Cyan", plantName = "Sage038", osc }) {
  const [second, setSecond] = useState(10);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function onTap() {}

  function handleBackClick() {
    router.push(`/home?userName=${userName}`);
  }

  const [liveStreamNumber, setLiveStreamNumber] = useState(234);

  //randomly adjust  using userandominterval
  useRandomInterval(
    () => {
      const delta = Math.floor(Math.random() * 4 - 2);
      setLiveStreamNumber((prev) => Math.max(prev + delta, 0));
    },
    300,
    2400
  );

  return (
    <S.Container>
      <Header
        color={"#F46D22"}
        data={{
          name: "Pay Attention",
          osc: 15,
        }}
        osc={osc}
        handleBackClick={handleBackClick}
      />
      <S.Text>
        <h1>Show your love</h1>
        <p>Those who pay the most attention have their names spoken to your plant</p>
      </S.Text>
      <S.LiveStream>
        <p>{plantName}'s livestream</p>
        <S.LiveVideoEl>
          <S.VideoUpper>
            <S.Live>Live</S.Live>
            <img src="/assets/icons/viewers.svg" />
            {liveStreamNumber}
          </S.VideoUpper>
          <video src="/assets/videos/live.mp4" autoPlay loop muted />
        </S.LiveVideoEl>
      </S.LiveStream>

      <S.TapZone>Tap to show your love</S.TapZone>

      <S.ButtonZone>
        <S.Button completed={second === 0}>{second === 0 ? "Complete" : `Keep watching for ${second}s`}</S.Button>
        <p>Zone as directed by local airtender</p>
      </S.ButtonZone>
    </S.Container>
  );
}
