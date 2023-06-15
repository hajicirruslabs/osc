import * as S from "./styles";
import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/router";

import useSocket from "utils/hooks/sockets/screen/useSocketMain";
import useRealTimeUpdate from "@/utils/hooks/plants/useRealTimeLocalUpdate";

const DATA = [
  {
    img: "",
    ranking: 3,
    name: "Alocasia",
    osc: 34610,
    topContributor: "Kimberly W.",
    averageCare: 4.34,
    seasonsBloomed: 3,
    time: 437,
    totalPerformance: 35781,
  },
  {
    img: "",
    ranking: 1,
    name: "Alocasia",
    osc: 87764,
    topContributor: "Wessen L.",
    averageCare: 3.09,
    seasonsBloomed: 3,
    time: 674,
    totalPerformance: 89047,
  },

  {
    img: "",
    ranking: 2,
    name: "Dendrobium",
    osc: 56993,
    topContributor: "June P.",
    averageCare: 16.2,
    seasonsBloomed: 13,
    time: 132,
    totalPerformance: 58845,
  },
];

const LIST = ["Total OSC given", "Top contributor", "Average care hours/day", "Seasons bloomed", "Time in flourish (in hrs)"];

export default function Comp() {
  const plants = useRealTimeUpdate();
  console.log(plants);

  const socket = useSocket({
    handleNewPageLocation,
  });
  ///page management
  const [mobileLocationCheckRequested, setMobileLocationCheckRequested] = useState(false);

  const router = useRouter();
  function handleNewPageLocation(data) {
    setMobileLocationCheckRequested(false);
    router.push(data);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!socket.current) return;
      socket.current.emit("handle-screen-to-mobile-location-check-request");
      setMobileLocationCheckRequested(true);
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (mobileLocationCheckRequested) {
      //wait for 10s, and then push to the waiting if no response
      const timeout = setTimeout(() => {
        router.push("/screen/waiting");
      }, 10 * 1000);
      return () => clearTimeout(timeout);
    }
  }, [mobileLocationCheckRequested]);

  return (
    <S.Container>
      <S.LogoContainer>
        <img src="/assets/images/logo-small.svg" alt="logo" />
      </S.LogoContainer>

      <S.Left>
        <S.LeftUpper>
          <img src="/assets/screen/Company-Logo.svg" alt="logo" />
          <p>Northeastern Urban Temperates</p>
        </S.LeftUpper>
        <S.LeftList>
          {LIST.map((item, index) => (
            <S.LeftListItem key={index}>{item}</S.LeftListItem>
          ))}
          <S.LeftListBottom>Total Performance</S.LeftListBottom>
        </S.LeftList>
      </S.Left>
      <S.Right>
        <h1>Local Flourishing Statistics</h1>
        <S.Plants>
          {(plants || DATA).map((datum, i) => (
            <S.SinglePlant key={i}>
              {datum.liveVid && (
                <video
                  src={"/assets/plants/" + datum.liveVid}
                  //autoplay
                  type="video/mp4"
                  autoPlay="autoplay"
                  loop
                  playsInline
                  muted
                  preload="auto"
                  controls={false}
                  alt="plant"
                />
              )}
              <S.Ranking>
                <img src={`/assets/screen/Ribbon-${datum.ranking}.svg`} alt="ranking" />
              </S.Ranking>
            </S.SinglePlant>
          ))}
        </S.Plants>
        <S.List>
          {(plants || DATA).map((datum, i) => (
            <S.SingleColumn key={i}>
              <S.Title>
                <h1>{datum.name}</h1>
                <p>Current Status</p>
              </S.Title>
              <S.SingleEl>
                <img src="/assets/screen/osc.svg" alt="osc" />
                {datum.osc}
              </S.SingleEl>
              <S.SingleEl>{datum.topContributor}</S.SingleEl>
              <S.SingleEl>{datum.averageCare}</S.SingleEl>
              <S.SingleEl>{datum.seasonsBloomed}</S.SingleEl>
              <S.SingleEl>{datum.time}</S.SingleEl>
              <S.FinalEl>{datum.totalPerformance}</S.FinalEl>
            </S.SingleColumn>
          ))}
        </S.List>
      </S.Right>
      {/* <S.Footer>Powered by Jinhua Group Ltd.</S.Footer> */}
    </S.Container>
  );
}
