import { FlexCenterStyle, Inner, WholeContainer, Appear } from "styles/common";
import * as C from "styles/common/color";
import styled from "styled-components";

//A15326

export const Container = styled.div`
  ${Inner};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: scroll;

  min-height: ${({ theme }) => theme.windowHeight}px;
  transition: opacity 0.5s ease-in-out;
`;

export const Text = styled.div`
  width: calc(100% - 40px);
  color: #649973;
  margin-top: 160px;

  h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    font-style: italic;
  }
`;

export const ImageZone = styled.div`
  width: ${({ theme }) => Math.min(theme.windowWidth * 0.5, 300)}px;
  margin: 20px 65px;

  img {
    width: 100%;
  }
`;

export const Instruction = styled.div`
  width: calc(100% - 40px);
  color: #649973;
  font-size: 16px;
  font-style: italic;
`;

export const ButtonZone = styled.div`
  width: calc(100% - 70px);
  position: relative;
  ${FlexCenterStyle};
  flex-direction: column;
  margin-bottom: 40px;
  color: white;

  p {
    font-style: italic;
    font-weight: 500;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    // color: #a15326;
    margin-top: 2px;
  }
`;

export const Button = styled.div`
  width: 100%;
  margin-top: 15px;

  border-radius: 10px;
  font-family: Newsreader;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  ${FlexCenterStyle};
  height: 40px;
  border: 1px solid transparent;

  ${({ activated }) =>
    activated
      ? `
  background: #649973;
  color: #fff;
  `
      : `
    border: 1px solid #649973;
    color: #649973;
  `}

  transition: all 0.5s ease-in-out;
`;

export const ErrorContainer = styled.div`
  ${WholeContainer};
  position: fixed;
  ${FlexCenterStyle};
  z-index: 5;
  background: red;
  mix-blend-mode: multiply;
`;

export const SingleWarning = styled.div`
  position: absolute;
  width: 7rem;
  z-index: 4;
  mix-blend-mode: multiply;
  animation: ${Appear} 0.5s ease-in-out;

  img {
    width: 100%;
  }
`;

export const ThreeContianer = styled.div`
  background: red !important;
  z-index: 6;
  ${WholeContainer};
  ${FlexCenterStyle};
  mix-blend-mode: none !important;
`;

export const ThreeText = styled.div`
  font-size: 4rem;
  font-family: Newsreader;
  color: white;
`;
