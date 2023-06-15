import { FlexCenterStyle, Inner, Appear } from "styles/common";
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

  animation: ${Appear} 1s ease-in-out both;
  animation-delay: 0.5s;
`;

export const Text = styled.div`
  width: calc(100% - 40px);
  color: #a15326;
  margin-top: 180px;

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
  width: ${({ theme }) => Math.min(theme.windowWidth * 0.5, 400)}px;
  margin: 20px 35px;

  img {
    width: 100%;
  }
`;

export const ButtonZone = styled.div`
  width: calc(100% - 70px);
  position: relative;
  ${FlexCenterStyle};
  flex-direction: column;
  margin-bottom: 40px;

  p {
    font-style: italic;
    font-weight: 500;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    color: #a15326;
    margin-top: 2px;
  }
`;

export const Button = styled.div`
  width: 100%;

  border-radius: 10px;
  font-family: Newsreader;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  ${FlexCenterStyle};
  height: 40px;

  background: #a15326;
  color: #fff;

  transition: all 0.5s ease-in-out;
`;
