import { useState, useEffect, useRef } from "react";
import axios from "axios";
import useRandomInterval from "utils/hooks/useRandomInterval";
import useRetrivePlants from "utils/hooks/plants/useRetrivePlants";

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export default function useRealTimeUpdate() {
  const plants = useRetrivePlants();

  const [realTimePlants, setRealTimePlants] = useState(plants);
  useEffect(() => {
    setRealTimePlants(plants);

    return () => {
      setRealTimePlants(null);
    };
  }, [plants]);

  useRandomInterval(
    () => {
      handleRandomlyAdjustOSC();
    },
    10,
    10 * 1000
  );

  function handleRandomlyAdjustOSC() {
    ///
    if (!realTimePlants || realTimePlants.length === 0) return;
    let randomPlant = realTimePlants[getRandomInt(0, realTimePlants.length - 1)];
    let randomAdjustment = getRandomInt(-40, getRandomInt(-5, getRandomInt(0, getRandomInt(0, randomPlant.isLocal ? 100 : 400))));
    let newOSC = randomPlant.osc + randomAdjustment;
    if (newOSC < 0) newOSC = 0;

    setRealTimePlants((prev) => {
      let newPlants = prev.map((plant) => {
        if (plant.id === randomPlant.id) {
          return {
            ...plant,
            osc: newOSC,
          };
        } else {
          return plant;
        }
      });
      return newPlants;
    });
  }

  useUpdateOSCFromArray({ oscArray: realTimePlants });

  return realTimePlants;
}

export function useUpdateOSCFromArray({ oscArray }) {
  const storedOSCRef = useRef(null);

  useEffect(() => {
    //compare oscarray with storedoscref.current
    if (!oscArray) return;
    let ref = storedOSCRef.current;
    let differenceArray = oscArray.filter((item) => {
      if (!ref) return true;
      return !ref.includes(item);
    });

    for (const singlePlant of differenceArray) {
      handleUpdate(singlePlant);
    }
    storedOSCRef.current = oscArray;

    return () => {
      storedOSCRef.current = null;
    };
  }, [oscArray]);

  async function handleUpdate(singlePlant) {
    if (!singlePlant) return;
    console.log(singlePlant);
    let res = await axios.post("/api/prisma/plants/update-plant-osc", singlePlant);
  }
}
