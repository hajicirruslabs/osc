import prisma from "lib/prisma";

export default async function handler(req, res) {
  let { name, plant } = req.body;

  try {
    //check if keyword exists
    const existing = await prisma.user.findUnique({
      where: {
        name,
      },
      select: {
        osc: true,
        plant: true,
      },
    });
    const plantRes = await prisma.plants.findUnique({
      where: {
        name: plant,
      },
      select: {
        id: true,
      },
    });
    console.log(existing, plantRes);

    if (!existing) {
      const result = await prisma.user.create({
        data: {
          name,
          plantId: plantRes.id,
          osc: 310,
        },
      });
      res.status(200).json({
        name,
        osc: 310,
        plant,
        type: "created",
      });
    } else {
      res.status(200).json({
        name,
        osc: existing.osc,
        plant: existing.plant,
        type: "existing",
      });
    }
  } catch (e) {
    console.log(e);
  }
}
