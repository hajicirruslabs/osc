import { useState, useEffect, useRef } from "react";
import axios from "axios";
import useRandomInterval from "utils/hooks/useRandomInterval";
import { useRetriveLocalPlants } from "utils/hooks/plants/useRetrivePlants";

const getRandom = (min, max) => Math.random() * (max - min) + min;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export default function useRealTimeUpdate() {
  const plants = useRetriveLocalPlants();

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
    3000
  );

  useRandomInterval(
    () => {
      handleRandomlyParams();
    },
    10,
    1000
  );

  function handleRandomlyParams() {
    if (!realTimePlants || realTimePlants.length === 0) return;

    try {
      let randomPlant = realTimePlants[getRandomInt(0, realTimePlants.length - 1)];

      let rand = Math.random();
      let newAverageCare = rand ? Math.round(randomPlant.averageCare * getRandom(1 / 1.01, 1.01) * 100) / 100 : randomPlant.averageCare;
      let newTime = !rand ? Math.round(randomPlant.time * getRandom(1 / 1.01, 1.01)) : randomPlant.time;

      setRealTimePlants((prev) => {
        let newPlants = prev.map((plant) => {
          if (plant.id === randomPlant.id) {
            return {
              ...plant,
              averageCare: newAverageCare,
              time: newTime,
            };
          } else {
            return plant;
          }
        });
        return newPlants;
      });
    } catch (e) {
      console.log(e);
    }
  }

  function handleRandomlyAdjustOSC() {
    if (!realTimePlants || realTimePlants.length === 0) return;
    let randomPlant = realTimePlants[getRandomInt(0, realTimePlants.length - 1)];
    let randomAdjustment = getRandomInt(-40, getRandomInt(-5, getRandomInt(0, getRandomInt(0, 300))));
    let newOSC = randomPlant.osc + randomAdjustment;
    let newPerformance = randomPlant.totalPerformance + randomAdjustment;
    // if (newOSC < 0) newOSC = 0;

    setRealTimePlants((prev) => {
      let newPlants = prev.map((plant) => {
        if (plant.id === randomPlant.id) {
          return {
            ...plant,
            osc: newOSC,
            totalPerformance: newPerformance,
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
    if (Math.random() > 0.005) return;
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
  }, [oscArray]);

  async function handleUpdate(singlePlant) {
    if (!singlePlant) return;
    let res = await axios.post("/api/prisma/plants/update-plant-osc", singlePlant);
  }
}
