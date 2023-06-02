import * as S from "./styles";

import { useState, useEffect } from "react";

import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";

export default function Comp({ isLarge = false }) {
  return (
    <S.ModelContainer isLarge={isLarge}>
      <img src="/assets/images/plant.svg" alt="3d_plant" />
      {/* <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Model />
        <OrbitControls />
      </Canvas> */}
      <S.OverlayText>14th</S.OverlayText>
    </S.ModelContainer>
  );
}

function Model() {
  //usegltf
  const gltf = useGLTF("/assets/model/3d_plant.glb", true);

  return <primitive object={gltf.scene} dispose={null} scale={[20, 20, 20]} rotation={[0, Math.PI / 2, 0]} />;
}
