import * as S from "./styles";

import { useState, useEffect, Suspense } from "react";

const SCRIPTS = [
  `Nature is the most valuable 
  asset we own.`,
  `Love is an essential labour.`,
  `We relinquish the need for 
  humans to roam the world forever.`,
  `Our ecology exists due to
  the pursuit of social capital.`,
  `We look forward to returning to
  the earth once our bodies
  have been expunged.`,
  `Your care makes the 
  ecology grow.`,
  `Jinhua knows you care.`,
];

export default function Comp({ show, bringBack }) {
  const [scriptIdx, setScriptIdx] = useState(0);

  useEffect(() => {
    if (!show) return;
    const interval = setInterval(() => {
      setScriptIdx((prev) => (prev + 1) % SCRIPTS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [show]);

  useEffect(() => {
    if (!show) return;
    const timeout = setTimeout(() => {
      bringBack();
    }, 2000 * SCRIPTS.length);
    return () => clearTimeout(timeout);
  }, [show]);

  const [transition, setTransition] = useState(false);
  useEffect(() => {
    setTransition(true);
  }, [scriptIdx]);

  //after .3s transition, set transition to false
  useEffect(() => {
    if (!transition) return;
    const timeout = setTimeout(() => {
      setTransition(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [transition]);

  return (
    <S.Container show={show}>
      <S.Background>
        <img src="/assets/screen/Company-Logo.svg" alt="logo" />
      </S.Background>
      <S.LogoContainer>
        <img src="/assets/images/logo-small.svg" alt="logo" />
      </S.LogoContainer>
      <S.Top>Core Principles</S.Top>

      <S.MainText transition={transition}>{SCRIPTS[scriptIdx]}</S.MainText>

      <S.Footer>Powered by Jinhua Group Ltd.</S.Footer>
    </S.Container>
  );
}
