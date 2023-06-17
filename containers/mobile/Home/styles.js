import { FlexCenterStyle, Inner, Appear } from "styles/common";
import * as C from "styles/common/color";
import styled from "styled-components";

export const Container = styled.div`
  ${Inner};
  display: flex;
  opacity: 0;

  ${({ show }) =>
    show
      ? `
    opacity: 1;
    pointer-events: all;
  `
      : `
    opacity: 0;
    pointer-events: none;
  `}

  transition: opacity 0.5s ease-in-out;

  animation: ${Appear} 1s ease-in-out both;
  animation-delay: 0.5s;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  // justify-content: space-between;

  overflow-y: scroll;
  z-index: 1;

  width: 100%;

  min-height: 1000px;
  overflow-y: scroll;
`;

export const TopSection = styled.div`
  margin-left: 20px;
  margin-top: 100px;
  h1 {
    font-weight: bold;
    font-size: 28px;
    margin: 0;
  }

  h2 {
    font-weight: normal;
    font-size: 18px;
    margin: 0;
  }
`;

export const BalanceSection = styled.div`
  position: relative;
  height: 500px !important;
  margin: -80px 0;
  width: 500px;
  margin-left: ${({ theme }) => (Math.min(theme.windowWidth, 768) - 500) / 2}px;
  ${FlexCenterStyle};
  overflow-x: hidden;
  z-index: 0;

  animation: image-rotate-slightly 3s infinite;

  @keyframes image-rotate-slightly {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(8deg);
    }
    40% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(-8deg);
    }
    80% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const Balance = styled.div`
  width: 233px;
  height: 233px;
  position: relative;
  color: ${C.ORANGE_VIVID};
  ${FlexCenterStyle};
  flex-direction: column;
  border-radius: 50%;
  background: ${C.WHITE};
  z-index: 1;
  box-shadow: 4px 5px 8px 1px rgba(130, 57, 16, 0.37);

  animation: ${Appear} 1s ease-in-out both;
  animation-delay: 1.3s;
`;

export const SurroundingCirlces = styled.div`
  z-index: 0;
  width: ${({ idx }) => 233 + idx * 42}px;
  height: ${({ idx }) => 233 + idx * 42}px;
  background: ${C.WHITE_OPAQUE};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  border-radius: 50%;

  animation: ${Appear} 1s ease-in-out both, scale-move 1.8s infinite;
  animation-delay: ${({ idx }) => idx * 0.14 + 1.3}s;

  @keyframes scale-move {
    0% {
      transform: scale(1);
    }
    30% {
      transform: scale(1.11);
    }
    50% {
      transform: scale(1.11);
    }
    80% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const BalanceUpper = styled.div`
  font-weight: 700;
  font-size: 74px;
  line-height: 65px;
  ${FlexCenterStyle};

  img {
    width: 55px;
    color: ${C.ORANGE_VIVID};
  }
`;

export const BalanceLower = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

export const ListSection = styled.div`
  width: ${({ theme }) => Math.min(theme.windowWidth, 768) - 40}px;

  display: flex;
  flex-direction: column;

  h2 {
    color: ${C.WHITE};
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  margin: 20px;
`;

export const List = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  width: 100%;
`;

export const SingleItem = styled.div`
  display: flex;
  width: 100%;
  height: 73px;
  margin: 4px 0;
  border-radius: 10px;
  cursor: pointer;
`;

export const ItemLeft = styled.div`
  ${FlexCenterStyle};
  width: 73px;
  height: 73px;
  background: ${({ color }) => color};
  border-radius: 10px 0 0 10px;
`;

export const ItemRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-radius: 0 10px 10px 0;
  width: calc(100% - 73px);

  background: ${({ disabled }) => disabled && "hsla(22, 100%, 95%, 0.5)"};
`;

export const Description = styled.div`
  font-family: Newsreader;
  margin-left: 10px;
  h1 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 3px;
    color: ${({ color }) => color};
  }
  p {
    font-size: 13px;
    font-weight: normal;
    font-style: italic;
    color: black;
    color: ${({ disabled }) => disabled && "#444"};
  }
`;

export const Button = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  border-radius: 50%;
  background: ${({ color }) => color};
  ${FlexCenterStyle};

  img {
    width: 20px;
  }
`;
