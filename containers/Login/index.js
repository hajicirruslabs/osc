import * as S from "./styles";

import { useState, useEffect } from "react";

import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";

export default function Comp({ show, handleNext }) {
  const [inputVal, setInputVal] = useState("");

  return (
    <S.Container show={show}>
      <S.LogoContainer>
        <img src="/assets/images/logo-small.svg" alt="logo" />
      </S.LogoContainer>

      <S.Main>
        <S.Text>
          <p>
            <bold>Sage0238</bold> is currently 14th
          </p>
          <p>most flourishing!</p>
        </S.Text>

        <S.ModelContainer>
          <Canvas>
            <ambientLight intensity={0.5} />

            <pointLight position={[10, 10, 10]} />
            <Model />
            <OrbitControls />
          </Canvas>
        </S.ModelContainer>

        <S.Text>
          <p>Give yourself for its survival</p>
          <p>and earn OSC.</p>
        </S.Text>

        <S.InputContainer>
          <S.Input type="text" placeholder="Enter your name" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
          <S.Button onClick={() => handleNext(inputVal)}>Log in</S.Button>
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
