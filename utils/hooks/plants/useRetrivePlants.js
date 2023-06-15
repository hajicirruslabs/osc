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
