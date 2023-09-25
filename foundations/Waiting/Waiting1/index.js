import * as S from "./styles";

import useRealTimeUpdate from "utils/hooks/plants/useRealTimeUpdate";
import { useState, useEffect, useRef } from "react";
import useResize from "utils/hooks/useResize";
import useRandomInterval from "utils/hooks/useRandomInterval";

import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";

import { QRCodeSVG } from "qrcode.react";

const DUMMY_DATA = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

const ARR = ["Fragaria", "Salvia", "Orchidaceae"];

const URL = `https://www.organicsocialcapital.art?plant=`;
const getRandomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandom = (a, b) => Math.random() * (b - a) + a;
const parseOSC = (n) => {
  try {
    let str = Math.abs(n).toString();
    let res = "";
    for (let i = 0; i < str.length; i++) {
      if (i % 3 === 0 && i !== 0) {
        res = "," + res;
      }
      res = str[str.length - 1 - i] + res;
    }
    return n > 0 ? res : "-" + res;
  } catch (e) {
    return "53,000";
  }
};

export default function Comp({ show }) {
  const plants = useRealTimeUpdate();

  const [displayOSC, setDisplayOSC] = useState(0);
  //interval 2s

  useEffect(() => {
    setTimeout(() => {
      setDisplayOSC(1);
    }, 3 * 1000);
    setTimeout(() => {
      setDisplayOSC(2);
    }, 9 * 1000);
    const interval = setInterval(() => {
      setDisplayOSC(0);
      setTimeout(() => {
        setDisplayOSC(1);
      }, 3 * 1000);
      setTimeout(() => {
        setDisplayOSC(2);
      }, 9 * 1000);
    }, 12 * 1000);
    return () => clearInterval(interval);
  }, []);

  const [qrURL, setQRURL] = useState(URL + getRandomFromArray(ARR));
  const [windowWidth, windowHeight] = useResize();

  //download qr code svg

  return (
    <S.Container show={show}>
      <S.Background>
        <img src="/assets/screen/Company-Logo.svg" alt="logo" />
      </S.Background>
      <S.LogoContainer>
        <img src="/assets/images/logo-small.svg" alt="logo" />
      </S.LogoContainer>

      <S.Left>
        <Currency />

        <S.QRContainer>
          <S.QRWrapper>
            <QRCodeSVG value={qrURL} bgColor="transparent" fgColor="white" size={windowWidth * 0.1} />
          </S.QRWrapper>

          {/* <S.Text>
            <p>Your region is the 8th highest performing in the current climate zone.</p>
            <p>Please scan to contribute to its longevity.</p>
          </S.Text> */}
        </S.QRContainer>
      </S.Left>
      <S.Right>
        <h1>Top 9 Flourishing Regions of the Temperates</h1>
        <S.RankingSection>
          {(plants || DUMMY_DATA)
            .sort((a, b) => (b.osc || 0) - (a.osc || 0))
            .map((datum, i) => (
              <S.SingleEl key={i} border={datum.isLocal || false}>
                {i < 3 && (
                  <S.Ranking big={i === 0}>
                    <img src={`/assets/screen/Ribbon-${i + 1}.svg`} alt="ranking" />
                  </S.Ranking>
                )}
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
                <S.ElOSC>
                  {displayOSC === 0 && <p>{datum.name}</p>}
                  {displayOSC === 1 && <img src="/assets/screen/osc.svg" alt="osc" />}
                  {displayOSC === 1 && <b>{datum.osc ? parseOSC(datum.osc) : 0}</b>}
                  {displayOSC === 2 && <p>{datum.isLocal ? "NE Urban Temperate" : "Other Temperates"}</p>}
                </S.ElOSC>
              </S.SingleEl>
            ))}
        </S.RankingSection>
        <S.BottomInfo>
          <NewsSection />
          <S.WeatherSection>
            <S.WeatherUpper>
              <S.WeatherLeft>
                <img src="/assets/screen/sunny.svg" alt="Sunny" />
              </S.WeatherLeft>
              <S.WeatherRight>
                <h1>32.231ºC</h1>
                <h2>sun showers</h2>
                <h3>expect weather to affect circadian rhythm of resting plants</h3>
                <S.WeatherLower>
                  <S.Image>
                    <img src="/assets/screen/graph.svg" alt="graph" />
                    <S.ImageWrapper />
                  </S.Image>

                  <S.Caution>caution! higher than average precipitation</S.Caution>
                </S.WeatherLower>
              </S.WeatherRight>
            </S.WeatherUpper>
          </S.WeatherSection>
        </S.BottomInfo>
      </S.Right>
    </S.Container>
  );
}

function Time() {
  //time now in hh:mm:ss

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let now = new Date();
    //make year 2045, other time same
    now.setFullYear(2045);
    setDate(now);
    const interval = setInterval(() => {
      let now = new Date();
      //make year 2045, other time same
      now.setFullYear(2045);
      setDate(now);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.Time>
      <div>{date.toLocaleDateString()}</div>
      <div>{date.toLocaleTimeString()}</div>
    </S.Time>
  );
}

const NEWS_DATA = [
  {
    source: "Urban Times",
    title: "Tropic areas urge urban workforce to channel inherent mindset into new...",
    image: "/assets/screen/News-1.png",
  },
  {
    source: "FloraFeed",
    title: "Concerns grow as famed Rafflesia, supported by Jinhua, loses smell",
    image: "/assets/screen/News-2.png",
  },

  {
    source: "Seasons",
    title: "Breath proven to transfer small amounts of human DNA to plants",
    image: "/assets/screen/News-3.png",
  },
  {
    source: "EmbReal",
    title: "New hair extraction techniques cause fluctuation in urban exchange rates",
    image: "/assets/screen/News-4.png",
  },
];

function NewsSection() {
  const [displayIdx, setDisplayIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayIdx((prev) => (prev + 1) % NEWS_DATA.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.NewsSection>
      {NEWS_DATA.map((datum, i) => (
        <S.SingleNewsEl key={i} index={((displayIdx - i + NEWS_DATA.length) % NEWS_DATA.length) - 1}>
          <S.NewsLeft>
            <h3>{datum.source}</h3>
            <p>{datum.title}</p>
          </S.NewsLeft>
          <S.NewsRight>
            <img src={datum.image} alt="news" />
          </S.NewsRight>
        </S.SingleNewsEl>
      ))}
    </S.NewsSection>
  );
}

function Currency() {
  const [a, setA] = useState(1.5);
  const [b, setB] = useState(-90);
  const [c, setC] = useState(-45);
  const [d, setD] = useState(-18);
  const [e, setE] = useState(16);
  const [f, setF] = useState(-3);

  useRandomInterval(
    () => {
      let rand = Math.random();
      if (rand < 0.2) setA((a) => Math.floor((a + getRandom(-0.1, 0.1)) * 100) / 100);
      rand = Math.random();
      if (rand < 0.15) setB((b) => (Math.floor(b + getRandom(-0.1, 0.1)) * 10) / 10);
      rand = Math.random();
      if (rand < 0.2) setC((c) => (Math.floor(c + getRandom(-0.1, 0.1)) * 10) / 10);
      rand = Math.random();
      if (rand < 0.25) setD((d) => (Math.floor(d + getRandom(-0.1, 0.1)) * 10) / 10);
      rand = Math.random();
      if (rand < 0.3) setE((e) => (Math.floor(e + getRandom(-0.1, 0.1)) * 100) / 100);
      rand = Math.random();
      if (rand < 0.2) setF((f) => Math.floor((f + getRandom(-0.1, 0.1)) * 100) / 100);
    },
    10,
    1200
  );

  return (
    <S.CurrencyContainer>
      <S.Title>
        <h1>{"Currency Conversion"}</h1>
      </S.Title>

      <S.Table>
        <S.LeftColumn>
          <S.TableTitle>Donation per Unit</S.TableTitle>
          <S.Item up={a > 0}>
            Breath <span>per exhale</span>
          </S.Item>
          <S.Item up={b > 0}>
            Atenttion <span>per hr</span>
          </S.Item>
          <S.Item up={c > 0}>
            Blood plasma <span>per ml</span>
          </S.Item>
          <S.Item up={d > 0}>
            Hair follicle <span>per g</span>
          </S.Item>
          <S.Item up={e > 0}>
            Nail bed <span>per g</span>
          </S.Item>
          <S.Item up={f > 0}>
            Activated soil <span>per kg</span>
          </S.Item>
        </S.LeftColumn>
        <S.RightColumn>
          <S.TableTitle>
            {" "}
            <img src="/assets/screen/osc.svg" alt="osc" />
          </S.TableTitle>
          <S.Item up={a > 0}>
            <img src={`/assets/screen/osc-${a > 0 ? "up" : "down"}.svg`} alt="osc" />
            <S.Span>{Math.abs(a)}</S.Span>
            <b>{a > 0 ? <TbTriangleFilled /> : <TbTriangleInvertedFilled />}</b>
          </S.Item>
          <S.Item up={b > 0}>
            <img src={`/assets/screen/osc-${b > 0 ? "up" : "down"}.svg`} malt="osc" />
            <S.Span>{Math.abs(b)}</S.Span>
            {b > 0 ? <TbTriangleFilled /> : <TbTriangleInvertedFilled />}
          </S.Item>
          <S.Item up={c > 0}>
            <img src={`/assets/screen/osc-${c > 0 ? "up" : "down"}.svg`} alt="osc" />
            <S.Span>{Math.abs(c)}</S.Span>
            {c > 0 ? <TbTriangleFilled /> : <TbTriangleInvertedFilled />}
          </S.Item>
          <S.Item up={d > 0}>
            <img src={`/assets/screen/osc-${d > 0 ? "up" : "down"}.svg`} alt="osc" />
            <S.Span>{Math.abs(d)}</S.Span>
            {d > 0 ? <TbTriangleFilled /> : <TbTriangleInvertedFilled />}
          </S.Item>
          <S.Item up={e > 0}>
            <img src={`/assets/screen/osc-${e > 0 ? "up" : "down"}.svg`} alt="osc" />
            <S.Span>{Math.abs(e)}</S.Span>
            {e > 0 ? <TbTriangleFilled /> : <TbTriangleInvertedFilled />}
          </S.Item>
          <S.Item up={f > 0}>
            <img src={`/assets/screen/osc-${f > 0 ? "up" : "down"}.svg`} alt="osc" />
            <S.Span>{Math.abs(f)}</S.Span>
            {f > 0 ? <TbTriangleFilled /> : <TbTriangleInvertedFilled />}
          </S.Item>
        </S.RightColumn>
      </S.Table>

      <Time />
    </S.CurrencyContainer>
  );
}
