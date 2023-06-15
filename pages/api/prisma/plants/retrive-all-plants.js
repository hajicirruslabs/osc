import prisma from "lib/prisma";

export default async function handler(req, res) {
  try {
    const existing = await prisma.plants.findMany();
    res.status(200).json(existing);
  } catch (e) {
    console.log(e);
  }
}
