import prisma from "lib/prisma";

export default async function handler(req, res) {
  const { name } = req.body;

  try {
    const existing = await prisma.plants.findUnique({
      where: {
        name,
      },
    });
    res.status(200).json(existing);
  } catch (e) {
    console.log(e);
  }
}
