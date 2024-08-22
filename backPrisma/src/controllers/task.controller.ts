import { Request, Response } from "express";
import { prisma } from "../server";

const getTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const savedTasks = await prisma.task.findMany();
        res.status(200).json(savedTasks);
    } catch (e) {
        res.status(500).json({error: e});
    }
};

const createTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const {name} = req.body;
        const newTask = await prisma.task.create({
            data: {
                name,
                isDone: false
            }
        });
        res.status(200).json(newTask);
    } catch (e) {
        res.status(500).json({error: e});
    }
};

const updateTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id, name, isDone} = req.body;
        const updatedTask = await prisma.task.update({
            where: {
                id: Number(id),
            },
            data: {
                name,
                isDone
            }
        });

        res.status(200).json(updatedTask);
    } catch (e) {
        res.status(500).json({error: e});
    }
};

const deleteTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.params;
        const deletedTask = await prisma.task.delete({
            where: {
                id: Number(id)
            }
        })
        res.status(200).json(deletedTask);
    } catch (e) {
        res.status(500).json({error: e});
    }
};

export default {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}
