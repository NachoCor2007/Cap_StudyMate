import express, {Express, Request, Response} from "express";
import {Prisma, PrismaClient } from "@prisma/client";
import {DefaultArgs} from "@prisma/client/runtime/library";
import TaskRouter from "./routes/task.route";
import cors from 'cors';

export const prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs> = new PrismaClient();

const app:Express = express();
const port:Number = 4567;

async function main():Promise<void> {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use("/task", TaskRouter);

  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

main()
    .then(async () => {
        await prisma.$connect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
