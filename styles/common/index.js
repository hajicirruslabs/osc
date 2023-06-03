import styled, { css, keyframes } from "styled-components";

export const FlexCenterStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WholeContainer = css`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
`;

export const Inner = css`
  position: absolute;
  top: 0;
  font-family: Poppins;
  margin: 0;
  padding: 0;
  color: #fff0e8;
  left: ${({ theme }) => (theme.windowWidth > 768 ? (theme.windowWidth - 768) / 2 : 0)}px;
  overflow: hidden;
  overflow-y: scroll;
  width: ${({ theme }) => (theme.windowWidth > 768 ? 768 : theme.windowWidth)}px;
  height: ${({ theme }) => theme.windowHeight}px;
`;

///TO DO: GLSL BACKGROUND
//https://webflow.com/made-in-webflow/website/webgl-glsl-gradient
export const BackgroundContainer = styled.div`
  ${WholeContainer};
  ${FlexCenterStyle};
  background: linear-gradient(118.05deg, #9a2901 5.83%, #e25b2d 42.75%, #f0b6ab 90.92%);
`;

export const TaskBackgroundContainer = styled.div`
  ${WholeContainer};
  ${FlexCenterStyle};
  background: ${({ color }) => color};
`;

export const Appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
