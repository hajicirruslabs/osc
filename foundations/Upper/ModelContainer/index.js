import * as S from "./styles";
import axios from "axios";
import { useState, useEffect } from "react";

const prefixGenerator = (num) => num + (num > 3 ? "th" : ["st", "nd", "rd"][num - 1]);

export default function Comp({ plant, isLarge = false }) {
  //retrive plant info
  useEffect(() => {
    retrivePlant();
  }, []);

  const [plantInfo, setPlantInfo] = useState(null);

  async function retrivePlant() {
    let res = await axios.get("/api/prisma/plants/retrive-all-plants");
    let targetPlant = res.data.find((p) => p.name === plant);
    setPlantInfo(targetPlant);
  }

  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <S.ModelContainer isLarge={isLarge}>
      {plantInfo && (
        <img
          style={{
            opacity: imgLoaded ? 1 : 0,
            transition: "opacity 0.5s",
          }}
          onLoad={() => setImgLoaded(true)}
          src={`/assets/plants/img/` + plantInfo.placeholderImg}
        />
      )}
      {plantInfo && <S.OverlayText>{prefixGenerator(plantInfo.ranking || 10)}</S.OverlayText>}
    </S.ModelContainer>
  );
}
