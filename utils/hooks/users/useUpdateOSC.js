import { useState, useEffect } from "react";
import axios from "axios";

export default function useRetriveOSC({ name, updateOSC, triggerUpdate, setTriggerUpdate }) {
  //update latest osc

  useEffect(() => {
    if (!triggerUpdate) return;
    handleUpdateOSC();
  }, [name, updateOSC, triggerUpdate]);

  async function handleUpdateOSC() {
    console.log(name, updateOSC);
    if (!name) return;
    let res = await axios.post("/api/prisma/users/update-user-osc", {
      name,
      osc: updateOSC,
    });
    setTriggerUpdate(false);
  }
}
