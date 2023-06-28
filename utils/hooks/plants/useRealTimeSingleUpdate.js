import { useState, useEffect, useRef } from "react";
import axios from "axios";
import useRandomInterval from "utils/hooks/useRandomInterval";
import { useRetriveSinglePlant } from "utils/hooks/plants/useRetrivePlants";

const getRandom = (min, max) => Math.random() * (max - min) + min;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default function useRealTimeUpdate({ name, updateActionCompletedOSC, setUpdateActionCompletedOSC, oscUpdateInterval }) {
  const plant = useRetriveSinglePlant({ name });
  const [realTimePlant, setRealTimePlant] = useState(plant);
  useEffect(() => {
    setRealTimePlant(plant);

    return () => {
      setRealTimePlant(null);
    };
  }, [plant]);

  useRandomInterval(
    () => {
      handleRandomlyAdjustOSC();
    },
    30,
    6000
  );

  function handleRandomlyAdjustOSC() {
    try {
      let randomAdjustment = getRandomInt(getRandomInt(-500, -50), getRandomInt(50, 500));
      let newOSC = plant.osc + randomAdjustment;
      let newPerformance = plant.totalPerformance + randomAdjustment;
      // if (newOSC < 0) newOSC = 0;

      setRealTimePlant((prev) => {
        return {
          ...prev,
          osc: newOSC,
          totalPerformance: newPerformance,
        };
      });
    } catch (e) {
      console.log(e);
    }
    if (!plant) return;
  }

  useUpdateOSCFromArray({ realTimePlant });

  return realTimePlant;
}

export function useUpdateOSCFromArray({ realTimePlant }) {
  useEffect(() => {
    if (Math.random() > 0.005) return;
    //compare oscarray with storedoscref.current
    if (!realTimePlant) return;
    handleUpdate(realTimePlant);
  }, [realTimePlant]);

  async function handleUpdate(singlePlant) {
    if (!singlePlant) return;
    let res = await axios.post("/api/prisma/plants/update-plant-osc", singlePlant);
  }
}
