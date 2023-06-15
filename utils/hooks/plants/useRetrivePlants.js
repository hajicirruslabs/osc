import { useState, useEffect } from "react";
import axios from "axios";

export default function useRetrivePlants() {
  //update latest osc
  const [plants, setPlants] = useState(null);
  useEffect(() => {
    retrivePlant();
  }, []);
  async function retrivePlant() {
    let res = await axios.get("/api/prisma/plants/retrive-all-plants");
    let allPlants = res.data.sort((a, b) => b.osc - a.osc);

    setPlants(allPlants);
  }

  return plants;
}

export function useRetriveLocalPlants() {
  //update latest osc
  const [plants, setPlants] = useState(null);
  useEffect(() => {
    retrivePlant();
  }, []);
  async function retrivePlant() {
    let res = await axios.get("/api/prisma/plants/retrive-local-plants");
    let allPlants = res.data.sort((a, b) => b.osc - a.osc);

    setPlants(allPlants);
  }

  return plants;
}

export function useRetriveSinglePlant({ name }) {
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    retrivePlant();
  }, [name]);

  async function retrivePlant() {
    try {
      let res = await axios.post("/api/prisma/plants/retrive-single-plant", { name });
      setPlant(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  return plant;
}
