import * as S from "./styles";

import { useState, useEffect, Suspense } from "react";
import axios from "axios";

import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";

export default function Comp({ show = false, handleNext }) {
  const [inputVal, setInputVal] = useState("");

  async function handleClick() {
    const res = await axios.post("/api/prisma/register-user", {
      name: inputVal,
      plant: "Salvia",
    });

    console.log(res.data);

    handleNext({
      name: inputVal,
    });
  }

  return (
    <S.Container show={show}>
      <S.LogoContainer>
        <img src="/assets/images/logo-small.svg" alt="logo" />
      </S.LogoContainer>

      <S.Main>
        <S.Text>
          <p>
            <b>Sage0238</b> is currently 14th
          </p>
          <p>most flourishing!</p>
        </S.Text>

        <S.ModelContainer>
          <Suspense fallback={null}>
            <Canvas>
              <ambientLight intensity={0.5} />

              <pointLight position={[10, 10, 10]} />
              <Model />
              <OrbitControls />
            </Canvas>
          </Suspense>
        </S.ModelContainer>

        <S.Text>
          <p>Give yourself for its survival</p>
          <p>and earn OSC.</p>
        </S.Text>

        <S.InputContainer>
          <S.Input type="text" placeholder="Enter your name" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
          <S.Button onClick={handleClick}>Log in</S.Button>
        </S.InputContainer>
      </S.Main>
    </S.Container>
  );
}

function Model() {
  //usegltf
  const gltf = useGLTF("/assets/model/3d_plant.glb", true);

  return <primitive object={gltf.scene} dispose={null} scale={[20, 20, 20]} rotation={[0, Math.PI / 2, 0]} />;
}
