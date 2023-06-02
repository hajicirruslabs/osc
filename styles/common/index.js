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
  color: #fff0e8;
  left: ${({ theme }) => (theme.windowWidth - Math.min(theme.windowWidth, 768)) / 2}px;
  width: ${({ theme }) => Math.min(theme.windowWidth, 768)}px;
  height: ${({ theme }) => theme.windowHeight}px;
  overflow: hidden;
`;

export const BackgroundContainer = styled.div`
  ${WholeContainer};
  ${FlexCenterStyle};
  background: linear-gradient(118.05deg, #9a2901 5.83%, #e25b2d 42.75%, #f0b6ab 90.92%);
`;

export const Appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
