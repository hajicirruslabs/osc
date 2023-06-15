import prisma from "lib/prisma";

export default async function handler(req, res) {
  let { name, osc } = req.body;
  console.log(name, osc);

  try {
    //check if keyword exists
    const existing = await prisma.user.findUnique({
      where: {
        name,
      },
    });

    if (!existing) {
      res.status(404).json({
        error: "User not found",
      });
    } else {
      await prisma.user.update({
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
