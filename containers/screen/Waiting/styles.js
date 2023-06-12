import { FlexCenterStyle, Inner, WholeContainer } from "styles/common";
import * as C from "styles/common/color";
import styled from "styled-components";

import { Appear } from "@/styles/common";

export const Container = styled.div`
  ${FlexCenterStyle};
  ${WholeContainer};
  color: #fff0e8;
  font-family: Poppins;
`;
export const Background = styled.div`
  ${FlexCenterStyle};
  ${WholeContainer};
  img {
    width: 80%;
    height: 80%;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 2vw;
  left: 2vw;
  width: 15vw;

  img {
    width: 15vw;
  }
`;

export const Left = styled.div`
  width: 23vw;
  height: calc(100% - 7vw);
  margin-top: 7vw;
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const CurrencyContainer = styled.div`
  position: relative;
  width: 23vw;
  background: rgba(0, 0, 0, 0.5);
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const Table = styled.div`
  ${FlexCenterStyle};
  margin: 1vw;
  margin-bottom: 0.5vw;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 15vw;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 5vw;
`;

export const TableTitle = styled.div`
  font-family: Poppins;
  font-weight: semi-bold;
  margin: 0.5vw 0;
  height: 3vw;
  font-size: 1.2vw;
  display: flex;
  align-items: center;
  border-bottom: 0.1vw solid #fff0e8;

  img {
    width: 1.8vw;
  }
`;

export const Item = styled.div`
  font-family: Poppins;
  color: #ddd;
  margin: 0.2vw 0;
  height: 1.4vw;
  font-size: 1.1vw;
  display: flex;
  align-items: center;
  span {
    font-size: 0.9vw;
    opacity: 0.7;
    margin-left: 0.3vw;
    padding-left: 0.3vw;
  }

  b {
    font-size: 1vw;
    margin-left: 0.6vw;
    margin-top: 0.3vw;
  }

  img {
    width: 0.9vw;
    margin-top: 0.1vw;
    opacity: 0.9;
    margin-right: 0.3vw;
  }

  ${({ up }) => (up ? "color: hsl(346, 87%, 83%);" : "color: hsl(160, 87%, 83%);")}
`;

export const Span = styled.div`
  font-size: 1.1vw !important;
  opacity: 1 !important;
  margin: 0 !important;
  width: 3vw !important;
`;

export const Title = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  height: 4vw;
  margin-top: -2vw;
  width: 16vw;

  background: linear-gradient(92.1deg, #9a2901 13.61%, #e25b2d 68.62%, #f0b6ab 129.97%);
  border: 0.1vw solid rgba(255, 240, 232, 0.35);
  border-radius: 1vw;
  font-family: Poiret One;

  h1 {
    font-size: 1.4vw;
    margin: 0;
  }
  p {
    font-size: 1.1vw;
  }
`;

export const Time = styled.div`
  width: 100%;

  padding: 0.5vw 0;
  font-size: 2vw;
  margin-bottom: 0.5vw;
  // background: rgba(0, 0, 0, 0.5);

  ${FlexCenterStyle};

  div {
    width: 10vw;

    &:first-child {
      text-align: left;
      font-size: 1.2vw;
    }

    &:last-child {
      text-align: right;
      font-size: 1.8vw;
    }
  }
`;

export const QRContainer = styled.div`
  ${FlexCenterStyle};
  width: 100%;
  margin-top: 3vw;
`;

export const QRWrapper = styled.div`
  width: 8vw;
  height: 8vw;

  img {
    width: 8vw;
    height: 8vw;
  }
`;

export const Text = styled.div`
  margin-left: 1.5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1vw;
  height: 8vw;
  line-height: 1.1;
`;

export const Right = styled.div`
  width: 70vw;
  height: 100%;
  ${FlexCenterStyle};
  flex-direction: column;
  h1 {
    margin: 1vw 0;
    font-family: Poiret One;
    font-size: 2.5vw;
    text-align: center;
    color: #fff0e8;
  }
`;
export const RankingSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin-top: 1vw;
`;

export const SingleEl = styled.div`
  width: 18vw;
  height: 10.125vw;
  margin: 0.3vw 0.5vw;
  background: rgba(0, 0, 0, 0.5);
  position: relative;

  ${({ border }) => `border: .4vw solid ${border ? "white" : "transparent"};`}
`;

export const Ranking = styled.div`
  position: absolute;
  top: -2.5vw;
  left: -2.5vw;
  width: 5vw;
  height: 5vw;
  ${FlexCenterStyle};

  img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: ${({ big }) => (big ? "5vw" : "3vw")};
    height: ${({ big }) => (big ? "5vw" : "3vw")};
  }
`;

export const BottomInfo = styled.div`
  ${FlexCenterStyle};
  height: 25vh;
  margin-top: 1vw;
  width: 58vw;

  //align
  justify-content: space-between;
`;

export const NewsSection = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  position: relative;
  width: 25vw;
  height: 11vw;
`;

export const SingleNewsEl = styled.div`
  position: absolute;
  transform: translateY(${({ index }) => index * 5.5 - 3}vw);
  opacity: ${({ index }) => (index === 0 || index === 1 ? 1 : 0)};
  transition: all 1.5s;

  width: 25vw;
  height: 5vw;
  border-radius: 0.8vw;
  background: #fff0e8;
  margin: 0.2vw 0;
  ${FlexCenterStyle};
`;

export const NewsLeft = styled.div`
  text-align: left;
  margin-left: 1vw;
  width: 22vw;
  h3 {
    font-family: Newsreader;
    font-size: 0.8vw;
    color: #b3b3b3;
  }
  p {
    font-family: Poppins;
    font-size: 0.9vw;
    color: #333;
  }
`;
export const NewsRight = styled.div`
  width: 4.4vw;
  height: 4.4vw;
  margin-right: 0.3vw;
  border-radius: 0.8vw;
  margin-top: 0.3vw;
  margin-bottom: 0.3vw;

  img {
    width: 4.4vw;
    height: 4.4vw;
  }
`;

export const WeatherSection = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  width: 35vw;
  margin-left: 5vw;
`;
export const WeatherUpper = styled.div`
  ${FlexCenterStyle};
  height: 5vw;
`;

export const WeatherLeft = styled.div`
  width: 8vw;
  height: 8vw;
  margin-right: 1vw;
  ${FlexCenterStyle};
  img {
    width: 8vw;
    height: 8vw;
  }

  animation: image-rotate-slightly 3s infinite;

  @keyframes image-rotate-slightly {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(12deg);
    }
    40% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(-12deg);
    }
    80% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const WeatherRight = styled.div`
  font-family: Poppins;
  display: flex;
  flex-direction: column;
  margin-left: 2vw;

  text-align: left;
  h1 {
    color: #333333;
    text-align: left;
    margin: 0;
    font-size: 2vw;
  }

  h2 {
    color: #4e4d4d;
    margin: 0;
    font-size: 1vw;
  }
  h3 {
    color: #4e4d4d;
    opacity: 0.7;
    font-size: 0.9vw;
    line-height: 0.95;
  }
`;
export const WeatherLower = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;

  img {
    width: 100%;
  }

  p {
    color: #ac4141;
    text-align: center;
    font-size: 0.7vw;
    line-height: 0.95;
    margin-top: 0.5vw;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 1.5vw;
  width: 100%;
  color: #fff0e8;
  opacity: 0.7;
  font-size: 1.3vw;
  text-align: center;
`;
