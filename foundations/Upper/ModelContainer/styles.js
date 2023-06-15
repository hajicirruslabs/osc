import { FlexCenterStyle, Inner, WholeContainer } from "styles/common";
import * as C from "styles/common/color";
import styled from "styled-components";

export const ModelContainer = styled.div`
  ${({ isLarge }) =>
    isLarge
      ? `
width: 300px;
height: 259px;
margin: 15px 0;
`
      : `
width: 81.22px;
height: 93px;
position: absolute;
top: 13px;
right: 10px;
`}

  transition: all 0.5s ease-in-out;

  img {
    width: 100%;
    height: 100%;
  }

  // animation: scale-move 1.8s infinite;

  @keyframes scale-move {
    0% {
      transform: scale(1);
    }
    30% {
      transform: scale(1.09);
    }
    50% {
      transform: scale(1.09);
    }
    80% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const OverlayText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${FlexCenterStyle};

  font-family: Poppins;
  font-size: 15px;
  font-weight: 700;
  backdrop-filter: blur(0.6px);
  color: white;
`;
