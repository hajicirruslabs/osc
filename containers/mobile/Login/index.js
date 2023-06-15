import * as S from "./styles";

import { useState, useEffect, Suspense, useMemo } from "react";
import axios from "axios";

import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";

const DUMMY_PLANT = {
  id: 1,
  name: "Fragaria",
  osc: 87764,
  localVids: ["straw1.mp4", "straw2.mp4", "straw3.mp4", "straw4.mp4", "straw5.mp4"],
  liveVid: "straw_live.mp4",
  placeholderImg: "strawberry.png",
  ranking: 1,
  topContributor: "Wessen L.",
  averageCare: 3.09,
  seasonsBloomed: 3,
  //dummy ranking
  ranking: 10,
  time: 674,
  totalPerformance: 89074,
  isLocal: true,
};

const getRandomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
const prefixGenerator = (num) => num + (num > 3 ? "th" : ["st", "nd", "rd"][num - 1]);

export default function Comp({ show = false, handleNext }) {
  const [inputVal, setInputVal] = useState("");
  const [plant, setPlant] = useState(DUMMY_PLANT);

  useEffect(() => {
    retrivePlant();
  }, []);

  async function retrivePlant() {
    let res = await axios.get("/api/prisma/plants/retrive-all-plants");
    //order by ranking
    let allPlants = res.data.sort((a, b) => b.osc - a.osc);

    //add ranking info on rallplants
    allPlants = allPlants.map((plant, i) => ({ ...plant, ranking: i + 1 }));
    const localPlants = allPlants.filter((plant) => plant.isLocal);
    console.log(localPlants);
    //localplants ranking
    setPlant(getRandomFromArray(localPlants));
  }

  async function handleClick() {
    const res = await axios.post("/api/prisma/users/register-user", {
      name: inputVal,
      plant: plant.name,
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
            <b>{plant.name}</b> is currently {prefixGenerator(plant.ranking || 10)}
          </p>
          <p>most flourishing!</p>
        </S.Text>

        <S.ImageContainer>
          <img src={`/assets/plants/img/` + plant.placeholderImg} />
        </S.ImageContainer>

        <S.Text>
          <p>Increase your OSC by showing</p>
          <p> how much you care.</p>
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
