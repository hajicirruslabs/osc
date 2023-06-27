import * as S from "./styles";

import { QRCodeSVG } from "qrcode.react";

export default function Comp({ show }) {
  return (
    <S.Container show={show}>
      <S.LogoContainer>
        <img src="/assets/images/logo.svg" alt="logo" />
      </S.LogoContainer>
      <S.Invisible>
        <h1>Organic Social Capital: OSC</h1>
        <h2>Speculative Design Worldbuilding project by Cyan D'Anjou</h2>
        <h3>As part of the RCA IED Project</h3>
        <h4>Website Developed by Jeanyoon Choi, RCA IED</h4>
      </S.Invisible>
    </S.Container>
  );
}
