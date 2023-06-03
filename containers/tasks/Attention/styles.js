import { FlexCenterStyle, Inner, WholeContainer } from "styles/common";
import * as C from "styles/common/color";
import styled from "styled-components";

export const Container = styled.div`
  ${Inner};
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  min-height: ${({ theme }) => theme.windowHeight}px;
  transition: opacity 0.5s ease-in-out;
`;

export const Text = styled.div`
  margin-left: 20px;
  width: calc(100% - 40px);
  color: #f46d22;
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

export const LiveStream = styled.div`
  margin-left: 20px;
  margin-top: 14px;
  width: calc(100% - 40px);
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    font-family: Newsreader;
    color: #f46d22;
    margin-bottom: 4px;
  }
`;

export const LiveVideoEl = styled.div`
  width: 100%;
  height: ${({ theme }) => ((Math.min(theme.windowWidth, 768) - 40) * 9) / 16}px;
  position: relative;

  background: rgba(9, 9, 9, 0.6);
`;

export const VideoUpper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 6px;
  left: 6px;

  img {
    width: 11px;
    margin-left: 4px;
    margin-right: 2px;
  }
  font-size: 8px;
`;

export const Live = styled.div`
  width: 40px;
  height: 17px;
  left: 37px;
  top: 301px;
  ${FlexCenterStyle};

  background: #f02626;
  border-radius: 6px;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #fff0e8;
`;

export const TapZone = styled.div`
  ${FlexCenterStyle};

  width: 100%;
  height: 40vh;
  font-family: Newsreader;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
`;

export const ButtonZone = styled.div`
  width: calc(100% - 70px);
  margin-left: 35px;
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
    color: rgba(244, 109, 34, 0.5);
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

  color: #f46d22;

  border: 1px solid #f46d22;

  ${({ completed }) => completed && `background: #F46D22; color: #fff;`}
  transition: all 0.5s ease-in-out;
`;
