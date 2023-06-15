import * as S from "./styles";

import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/router";

import useSocket from "utils/hooks/sockets/screen/useSocketWaiting";
import useResize from "utils/hooks/useResize";

export default function Comp() {
  const socket = useSocket({
    handleNewPageLocation,
  });
  ///page management
  const router = useRouter();
  function handleNewPageLocation(data) {
    router.push(data);
  }

  const [windowWidth, windowHeight] = useResize();

  return (
    <S.Container>
      <iframe
        src="https://www.youtube.com/embed/aTI9VhZXiWY?autoplay=1&mute=1&loop=1&controls=0"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        width={windowWidth}
        height={windowHeight}
        style={{
          width: `${windowWidth}px`,
          height: `${windowHeight}px`,
        }}
      />

      <S.Cover
        style={{
          top: "0",
        }}
      />
      <S.Cover
        style={{
          bottom: "0",
        }}
      />
    </S.Container>
  );
}
