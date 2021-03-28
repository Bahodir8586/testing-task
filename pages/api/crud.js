// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      await prisma.date.create({
        data: req.body,
      });
      res.status(200).end();
    } catch (error) {
      res.status(400).end();
    }
  }

  if (req.method === "GET") {
    try {
      const dates = await prisma.date.findMany();
      res.status(200).json({ message: "Success", data: dates });
    } catch (error) {
      res.status(404).json({ message: "Error" });
    }
  }

  if (req.method === "DELETE") {
    try {
      await prisma.date.deleteMany({
        where: {
          key: { contains: req.body.key },
        },
      });
      res.status(200).end();
    } catch (error) {
      res.status(404).end();
    }
  }
};
