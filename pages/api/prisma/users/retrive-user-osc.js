import prisma from "lib/prisma";

export default async function handler(req, res) {
  let { name } = req.body;

  try {
    //check if keyword exists
    const existing = await prisma.user.findUnique({
      where: {
        name,
      },

      select: {
        osc: true,
      },
    });

    if (!existing) {
      res.status(404).json({
        error: "User not found",
      });
    } else {
      res.status(200).json({
        osc: existing.osc,
      });
    }
  } catch (e) {
    console.log(e);
  }
}
