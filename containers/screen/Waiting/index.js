import * as S from "./styles";

import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/router";

import useSocket from "utils/hooks/sockets/screen/useSocketWaiting";

import Waiting1 from "foundations/Waiting/Waiting1";
import Waiting2 from "foundations/Waiting/Waiting2";

const DUMMY_DATA = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

export default function Comp() {
  const socket = useSocket({
    handleNewPageLocation,
  });
  ///page management
  const router = useRouter();
  function handleNewPageLocation(data) {
    router.push(data);
  }

  const [screenMode, setScreenMode] = useState(1);

  // useEffect(() => {
  //   if (screenMode === 1) {
  //     const timeout = setTimeout(() => {
  //       setScreenMode(2);
  //     }, 30 * 1000);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [screenMode]);

  return (
    <>
      <Waiting1 show={screenMode === 1} />
      <Waiting2 show={screenMode === 2} bringBack={() => setScreenMode(1)} />
    </>
  );
}
