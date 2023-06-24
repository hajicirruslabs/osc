import * as S from "./styles";

import { useState, useEffect, Suspense, useMemo } from "react";
import axios from "axios";

import Loading from "foundations/Loading";

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
    //localplants ranking
    setPlant(getRandomFromArray(localPlants));
  }

  const [loading, setLoading] = useState(false);

  const [textVer, setTextVer] = useState(0);

  async function handleClick() {
    if (textVer === 0) {
      setTextVer(1);
    } else {
      setLoading(true);
      const res = await axios.post("/api/prisma/users/register-user", {
        name: inputVal,
        plant: plant.name,
      });
      handleNext(res.data);
    }
  }

  return (
    <S.Container show={show}>
      <S.LogoContainer>
        <img src="/assets/images/logo-small.svg" alt="logo" />
      </S.LogoContainer>

      <S.Main>
        <S.Text>
          {textVer === 0 && (
            <>
              <p>
                Your region is the <b>Northeastern</b>
              </p>
              <p>
                <b>Urban Temperate</b> Zone and you
              </p>
              <p>
                are supporting <b>{plant.name}</b>
              </p>
            </>
          )}
          {textVer === 1 && (
            <>
              <p>
                <b>{plant.name}</b> is currently {prefixGenerator(plant.ranking || 10)}
              </p>
              <p>most flourishing!</p>
            </>
          )}
        </S.Text>

        <S.ImageContainer>
          <img src={`/assets/plants/img/` + plant.placeholderImg} />
        </S.ImageContainer>

        <S.Text>
          {textVer === 0 && (
            <>
              <p>As you act in favour of its </p>
              <p>
                flourishing, you earn <b>Organic</b>
              </p>
              <p>
                <b>Social Capital</b>–our world’s{" "}
              </p>
              <p>most meaningful currency.</p>
            </>
          )}
          {textVer === 1 && (
            <>
              <p>Your dedicated care makes</p>
              <p>the ecology grow.</p>
            </>
          )}
        </S.Text>

        <S.InputContainer>
          {textVer === 1 && <S.Input type="text" placeholder="Enter your name" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />}
          <S.Button onClick={handleClick}>{textVer === 0 ? "Continue" : "Log in"}</S.Button>
        </S.InputContainer>
      </S.Main>
      <Loading isLoading={loading} />
      <S.BottomLayer>
        <h1>OSC: Organic Social Capital</h1>
        <h2>A Speculative Worldbuilding Artwork by Cyan D'Anjou</h2>
        <h3>Artist: Cyan D'Anjou, Designer: Cyan D'Anjou, Developer: Jeanyoon Choi</h3>
        <h4>
          Royal College of Art Information Experience Design project, web art, sacrifice of motherhood, organic social capital, posthumanism, information experience design, experiential art,
          interactive art, interspecies living, labor of care, labours of care, post-capitalism, Royal college of art
        </h4>
      </S.BottomLayer>
    </S.Container>
  );
}
