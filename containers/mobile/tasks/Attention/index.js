import * as S from "./styles";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import Header from "foundations/tasks/Header";
import useResize from "utils/hooks/useResize";
import useSocket from "utils/hooks/sockets/useSocketMobile";
import useRandomInterval from "utils/hooks/useRandomInterval";
import useUpdateOSC from "utils/hooks/users/useUpdateOSC";

import { useRetriveSinglePlant } from "@/utils/hooks/plants/useRetrivePlants";

import { useSpring } from "react-spring";
import * as easings from "d3-ease";

import { toast, Toast } from "loplat-ui";

const getRandom = (min, max) => Math.random() * (max - min) + min;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

export default function Comp({ userName = "Cyan", plant, osc }) {
  const plantInfo = useRetriveSinglePlant({ name: plant });
  console.log(plantInfo);
  const [second, setSecond] = useState(10);
  const router = useRouter();
  const socket = useSocket({
    pageURL: "/screen/livestream",
  });

  const [displayOsc, setDisplayOsc] = useState(osc);
  useEffect(() => {
    setDisplayOsc(osc);
  }, [osc]);

  useSpring({
    from: { progress: 0 },
    to: { progress: second === 0 ? 1 : 0 },
    config: { duration: 3000, easing: easings.easeCubicOut },
    onChange: ({ value }) => {
      setDisplayOsc(osc + 15 * value.progress);
    },
    onRest: () => {},
  });

  const [triggerUpdate, setTriggerUpdate] = useState(false);
  useEffect(() => {
    if (second === 0) {
      setTriggerUpdate(true);
      toast.success("15 OSC added", 2000);
    }
  }, [second]);

  useUpdateOSC({
    updateOSC: osc + 15,
    triggerUpdate,
    setTriggerUpdate,
    name: userName,
  });

  //back click
  function handleBackClick() {
    router.push(`/home?userName=${userName}&osc=${osc + (second === 0 ? 15 : 0)}`);
  }

  //inteval
  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  //livestream

  const [liveStream, setLiveStream] = useState(234);

  useRandomInterval(
    () => {
      setLiveStream((prev) => Math.floor(Math.max(prev + getRandomInt(-1, 1), 0)));
    },
    10,
    500
  );

  useEffect(() => {
    //on livestream change
    if (!socket.current) return;
    socket.current.emit("handle-livestream-number", liveStream);
  }, [liveStream]);

  //heartel
  const [heartEls, setHeartEls] = useState([]);
  function onTap(e) {
    const startPos = {
      x: e.clientX,
      y: e.clientY,
    };

    const numbers = Math.floor(getRandom(1, getRandom(1, getRandom(1, 20))));
    const toAddArray = new Array(numbers).fill(0).map((_, i) => ({
      id: Date.now() + i,
      startPos,
    }));

    setHeartEls((prev) => [...prev, ...toAddArray]);
  }

  return (
    <>
      <S.Container>
        <Header
          color={"#F46D22"}
          data={{
            name: "Pay Attention",
            osc: 15,
          }}
          osc={displayOsc.toFixed(0)}
          handleBackClick={handleBackClick}
        />
        <S.Text>
          <h1>Show your love</h1>
          <p>Those who pay the most attention have their names spoken to your plant</p>
        </S.Text>
        <S.LiveStream>
          <p>{plant}'s livestream</p>
          <S.LiveVideoEl>
            <S.VideoUpper>
              <S.Live>Live</S.Live>
              <img src="/assets/icons/viewers.svg" />
              {liveStream}
            </S.VideoUpper>

            {plantInfo && <video src={`/assets/plants/` + plantInfo.liveVid} type="video/mp4" autoPlay="autoplay" loop playsInline muted preload="auto" controls={false} />}
          </S.LiveVideoEl>
        </S.LiveStream>

        <S.TapZone onClick={onTap}>Tap to show your love</S.TapZone>

        <S.ButtonZone>
          <S.Button completed={second === 0} onClick={() => second === 0 && router.push(`/home?userName=${userName}&osc=${osc + 15}`)}>
            {second === 0 ? "Complete" : `Keep watching for ${second}s`}
          </S.Button>
        </S.ButtonZone>
      </S.Container>
      {heartEls.slice(-200).map((el) => (
        <SingleHeartEl key={el.id} startPos={el.startPos} socket={socket} />
      ))}
      <Toast />
    </>
  );
}

function SingleHeartEl({ startPos, socket }) {
  const [windowWidth, windowHeight] = useResize();
  const duration = useMemo(() => getRandom(500, 4000), []);
  const tension = useMemo(() => getRandom(10, 200), []);
  const friction = useMemo(() => getRandom(10, 40), []);

  const STATIC_POS = useMemo(() => {
    const initialPos = {
      x: startPos.x,
      y: startPos.y,
      rotation: getRandom(0, 0.3) * Math.PI,
      scale: getRandom(0.4, 1.2),
    };

    const targetPos = {
      x: startPos.x + getRandom(-getRandom(0.15, 0.1), getRandom(0.1, 0.15)) * windowWidth,
      y: startPos.y - getRandom(0.3, 0.7) * windowHeight,
      rotation: getRandom(-getRandom(0.2, 0.6), getRandom(0.5, 0.7)) * Math.PI,
      scale: getRandom(0.8, 1.4),
    };

    return {
      initialPos,
      targetPos,
    };
  }, [windowWidth, windowHeight, startPos]);

  const [pos, setPos] = useState(STATIC_POS.initialPos);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!STATIC_POS) return;
    const { initialPos, targetPos } = STATIC_POS;
    const x = initialPos.x + (targetPos.x - initialPos.x) * progress;
    const y = initialPos.y + (targetPos.y - initialPos.y) * progress;
    const rotation = initialPos.rotation + (targetPos.rotation - initialPos.rotation) * progress;
    const opacity = progress > 0.9 ? 1 - (progress - 0.9) * 10 : 1;
    const scale = initialPos.scale + (targetPos.scale - initialPos.scale) * progress;
    setPos({ x, y, rotation, opacity, scale });
  }, [STATIC_POS, progress]);

  useEffect(() => {
    const { initialPos, targetPos } = STATIC_POS;
    if (progress === 1) {
      try {
        socket.current.emit("handle-heart", {
          x: targetPos.x / windowWidth,
          y: targetPos.y / windowHeight,
          rotation: targetPos.rotation,
          scale: targetPos.scale,
          duration,
          tension,
          friction,
        });
      } catch (e) {
        console.log(e);
      }
    }
  }, [progress]);

  useSpring({
    from: { progress: 0 },
    to: { progress: 1 },
    config: { duration: duration, tension: tension, friction: friction },
    onChange: ({ value }) => {
      setProgress(value.progress);
    },
    onRest: () => {},
  });

  return (
    <S.SingleHeart
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%) rotate(${pos.rotation}rad) scale(${pos.scale})
      `,
        opacity: pos.opacity,
      }}
    >
      <img src="/assets/icons/heart.svg" />
    </S.SingleHeart>
  );
}
