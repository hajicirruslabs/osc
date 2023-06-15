import { useState, useEffect } from "react";
import axios from "axios";

export default function useRetriveOSC({ name, initOsc = 0 }) {
  //update latest osc
  const [osc, setOsc] = useState(initOsc);
  useEffect(() => {
    getOSC();
  }, [name]);

  async function getOSC() {
    if (!name) return;
    let res = await axios.post("/api/prisma/users/retrive-user-osc", {
      name,
    });
    setOsc(res.data.osc);
  }

  return osc;
}
