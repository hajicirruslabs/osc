import { FlexCenterStyle, Inner, WholeContainer } from "styles/common";
import * as C from "styles/common/color";
import styled from "styled-components";

import { Appear } from "@/styles/common";

export const Container = styled.div`
  ${FlexCenterStyle};
  ${WholeContainer};
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 2vw;
  left: 2vw;
  width: 15vw;
  z-index: 1;

  img {
    width: 15vw;
  }
`;

export const VideoContainer = styled.div`
  ${FlexCenterStyle};
  ${WholeContainer};
`;

export const VideoUpper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 2vw;
  right: 2vw;

  img {
    width: 2vw;
    margin-left: 1.2vw;
    margin-right: 0.5vw;
  }
  font-size: 1.5vw;
  color: white;
`;

export const Live = styled.div`
  width: 7vw;
  height: 2.5vw;
  ${FlexCenterStyle};

  background: #f02626;
  border-radius: 0.5vw;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5vw;

  display: flex;
  align-items: center;
  text-align: center;

  color: #fff0e8;
`;

export const InformationBoard = styled.div`
  position: absolute;
  bottom: 2vw;
  left: 2vw;
  background: black;
  width: 33vw;
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const Title = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  height: 4vw;
  margin-top: -2vw;
  width: 25vw;
  color: white;

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

export const Arrays = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1vw 0;
`;

export const ArrayLeft = styled.div`
  font-family: Newsreader;
  text-align: left;
  margin-left: 1vw;
  width: 16vw;
`;

export const ArrayRight = styled.div`
  font-family: Poppins;
  text-align: right;
  margin-right: 1vw;
  width: 10vw;
`;

export const ArrayItem = styled.div`
  font-size: 1.4vw;
  margin: 0.8vw 0;
  color: #fff0e8;
  height: 2vw;
`;

export const SingleHeart = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 700;
  width: 40px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;
