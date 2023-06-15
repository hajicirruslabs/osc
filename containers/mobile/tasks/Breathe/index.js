import * as S from "./styles";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Header from "foundations/tasks/Header";

import useSocket from "utils/hooks/sockets/useSocketMobile";
import useResize from "utils/hooks/useResize";
import useUpdateOSC from "utils/hooks/useUpdateOSC";

import { useSpring } from "react-spring";
import * as easings from "d3-ease";

import { toast, Toast } from "loplat-ui";

const SCRIPTS = [
  {
    h1: "A moment of reflection",
    p: "Consider the prompts on the screen",
    instruction: "Prepare your answers in alignment with our flourishing world’s values",
    imageURL: "/assets/tasks/breathe-1.svg",
  },
  {
    h1: "Pick up a Lifepaper card",
    p: "Speak your name and response to its question into the microphone",
    instruction: "Carefully consider your words as they contribute directly to your plant’s growth",
    button: "Finalize the sendoff",
    imageURL: "/assets/tasks/breathe-2.svg",
  },
  {
    h1: "Great! Now plant the card",
    p: "Place the card under the activated soil",
    instruction: "Your dedicated care contributes to the rejuvenation of your region. We see your hard work.",
    button: "Complete donation",
    imageURL: "/assets/tasks/breathe-3.svg",
  },
];

export default function Comp({ userName = "Cyan", plantName = "Sage038", osc }) {
  const router = useRouter();

  const [state, setState] = useState(0);
  const [errorState, setErrorState] = useState(0);

  const [triggerUpdate, setTriggerUpdate] = useState(false);

  function handleBackClick() {
    router.push(`/home?userName=${userName}&osc=${osc}`);
  }

  function handleButtonClick() {
    if (state !== 2) return;
    router.push(`/home?userName=${userName}&osc=${osc + (triggerUpdate ? 26 : 0)}`);
  }

  const [secCountDown, setSecCountDown] = useState(25);
  useEffect(() => {
    const interval = setInterval(() => {
      setSecCountDown((d) => {
        if (d > 0) return d - 1;
        else return 0;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [displayOsc, setDisplayOsc] = useState(osc);
  useEffect(() => {
    setDisplayOsc(osc);
  }, [osc]);

  useSpring({
    from: { progress: 0 },
    to: { progress: triggerUpdate ? 1 : 0 },
    config: { duration: 3000, easing: easings.easeCubicOut },
    onChange: ({ value }) => {
      setDisplayOsc(osc + 15 * value.progress);
    },
    onRest: () => {},
  });

  useEffect(() => {
    if (state === 0 && secCountDown === 0) {
      setState(1);
    }
    if (state === 2) {
      toast.success("25 OSC added", 2000);
      setTriggerUpdate(true);
    }
  }, [state, secCountDown]);

  useEffect(() => {
    if (state === 1) {
      //timeout
      const timeout = setTimeout(() => {
        setErrorState(1);
      }, 25 * 1000);
      return () => clearTimeout(timeout);
    }
  }, [state]);

  useUpdateOSC({
    updateOSC: osc + 25,
    triggerUpdate,
    setTriggerUpdate,
    name: userName,
  });

  return (
    <S.Container>
      <Header
        color={"#649973"}
        data={{
          name: "Breathe Life",
          osc: 26,
        }}
        osc={displayOsc.toFixed(0)}
        handleBackClick={handleBackClick}
      />
      <S.Text>
        <h1>{SCRIPTS[state].h1}</h1>
        <p>{SCRIPTS[state].p}</p>
      </S.Text>

      <S.ImageZone>
        <img src={SCRIPTS[state].imageURL} />
      </S.ImageZone>

      <S.Instruction>{SCRIPTS[state].instruction}</S.Instruction>
      <S.ButtonZone onClick={handleButtonClick}>
        <S.Button activated={state === 2 || (state === 0 && secCountDown === 0)}>{state === 0 ? `Keep watching for ${secCountDown}s` : SCRIPTS[state].button}</S.Button>
      </S.ButtonZone>
      {errorState > 0 && <ErrorComponent errorState={errorState} setErrorState={setErrorState} setState={setState} />}
    </S.Container>
  );
}

const MSGS = ["INSTILL PROPER FLOURISHING VALUES!!", "Manifesto breached! -23 OSC", "Failed manifesto check! - 23OSC"];
const ARR = ["SAY:", "LOVE", "IS", "AN", "ESSENTIAL", "LABOUR."];

const getRandom = (min, max) => Math.random() * (max - min) + min;
const getRandomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

function ErrorComponent({ errorState, setErrorState, setState }) {
  const [windowWidth, windowHeight] = useResize();
  const windowWidthRef = useRef(windowWidth);
  const windowHeightRef = useRef(windowHeight);
  useEffect(() => {
    windowWidthRef.current = windowWidth;
    windowHeightRef.current = windowHeight;
  }, [windowWidth, windowHeight]);

  useEffect(() => {
    if (errorState === 1) handleStateOne();
    if (errorState === 2) handleStateTwo();
    if (errorState === 3) handleStateThree();
  }, [errorState]);

  const [warningLocations, setWarningLocations] = useState([]);

  function handleStateOne() {
    const interval = setInterval(() => {
      addWarningLocations();
    }, 100);
    const timeout = setTimeout(() => {
      setErrorState(2);
      clearInterval(interval);
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }

  function addWarningLocations() {
    if (windowWidthRef.current === 0) return;
    setWarningLocations((loc) => [
      ...loc,
      {
        x: getRandom(0, windowWidthRef.current),
        y: getRandom(0, windowHeightRef.current),
        scale: getRandom(1, 6),
      },
    ]);
  }

  function handleStateTwo() {
    const interval = setInterval(() => {
      toast.danger(getRandomFromArray(MSGS));
    }, 100);
    const timeoutA = setTimeout(() => {
      clearInterval(interval);
    }, 3000);
    const timeout = setTimeout(() => {
      setErrorState(3);
    }, 6500);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      clearTimeout(timeoutA);
    };
  }

  const [threeIdx, setThreeIdx] = useState(0);

  function handleStateThree() {
    const interval = setInterval(() => {
      setThreeIdx((i) => i + 1);
    }, 600);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setErrorState(0);
      setState(2);
    }, 12 * 1000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }

  return (
    <>
      <S.ErrorContainer>
        {warningLocations.map((location, i) => (
          <S.SingleWarning
            key={i}
            style={{
              transform: `translate(${location.x}px, ${location.y}px) scale(${location.scale}) translate(-50%, -50%)`,
            }}
          >
            <img src="/assets/tasks/warning.png" alt="warning" />
          </S.SingleWarning>
        ))}
        <Toast />
      </S.ErrorContainer>

      {errorState === 3 && (
        <S.ThreeContianer>
          <S.ThreeText>{ARR[threeIdx % ARR.length]}</S.ThreeText>
        </S.ThreeContianer>
      )}
    </>
  );
}
