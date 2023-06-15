import prisma from "lib/prisma";

export default async function handler(req, res) {
  let { name, osc } = req.body;

  try {
    //check if keyword exists
    const existing = await prisma.plants.findUnique({
      where: {
        name,
      },
    });

    if (!existing) {
      res.status(404).json({
        error: "Plants not found",
      });
    } else {
      await prisma.plants.update({
        where: {
          name,
        },
        data: {
          osc,
        },
      });

      res.status(200).json({});
    }
  } catch (e) {
    console.log(e);
  }
}
