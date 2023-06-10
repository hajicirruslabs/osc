import { FlexCenterStyle, Inner, WholeContainer } from "styles/common";
import * as C from "styles/common/color";
import styled from "styled-components";

import { Appear } from "@/styles/common";

export const Container = styled.div`
  ${Inner};
  ${WholeContainer};
  flex-direction: row !important;
  ${FlexCenterStyle};
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
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${FlexCenterStyle};
`;

export const LeftUpper = styled.div`
  margin-top: 11vw;
  height: 15vw;
  width: 15vw;
  position: relative;
  ${FlexCenterStyle};

  img {
    position: absolute;
    width: 13vw;
    height: 13vw;
  }
  p {
    margin-top: 2vw;
    font-size: 1.7vw;
  }
  font-family: Poiret One;

  text-align: center;
`;

export const LeftList = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const LeftListItem = styled.div`
  border: #fff0e8 0.1rem solid;
  font-family: Newsreader;
  font-weight: medium;
  width: 18vw;
  height: 3.5vw;
  font-size: 1.5vw;
  ${FlexCenterStyle};
  border-radius: 0.8vw;
  margin: 0.3vw 0;
  background: linear-gradient(93.25deg, #58af4c -31.13%, rgba(88, 175, 76, 0) 103.61%);
`;

export const LeftListBottom = styled.div`
  border: #fff0e8 0.1rem solid;
  font-family: Newsreader;
  font-weight: medium;
  width: 18vw;
  height: 3.5vw;
  font-size: 1.5vw;
  ${FlexCenterStyle};
  border-radius: 0.8vw;
  margin-top: 1.2vw;
  background: radial-gradient(57.53% 1062.75% at 42.47% 50%, #9a2901 22.4%, #e25b2d 78.86%, #e27c63 100%);
  font-weight: 700;
`;

export const Right = styled.div`
  width: 72vw;
  margin-right: 2vw;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${FlexCenterStyle};
  h1 {
    margin: 2.05vw 0;
    font-family: Poiret One;
    font-size: 2.5vw;
    text-align: center;
  }
`;

export const Plants = styled.div`
  ${FlexCenterStyle};
`;
export const SinglePlant = styled.div`
  width: 16vw;
  height: 16vw;
  margin: 0 1vw;
  margin-bottom: 1vw;
`;

export const Ranking = styled.div``;

export const List = styled.div`
  ${FlexCenterStyle};
`;
export const SingleColumn = styled.div`
  position: relative;
  width: 20vw;
  margin: 1vw;
  background: rgba(7, 7, 7, 0.41);
  border-radius: 1vw;
  border: 0.1vw solid #fff0e8;
  ${FlexCenterStyle};
  flex-direction: column;
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

export const SingleEl = styled.div`
  width: 100%;
  text-align: center;
  height: 3.5vw;
  border: 0.1vw solid transparent;
  font-size: 1.6vw;
  ${FlexCenterStyle};
  border-radius: 0.8vw;
  margin: 0.3vw 0;
`;

export const FinalEl = styled.div`
  width: 100%;
  text-align: center;
  height: 3.5vw;
  font-size: 2vw;
  ${FlexCenterStyle};
  border-radius: 0.8vw;
  margin: 0.3vw 0;
  margin-top: 1.2vw;
  -webkit-text-stroke: 0.05vw #fa8645;
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
