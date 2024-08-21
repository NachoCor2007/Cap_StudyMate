import { Router } from "express";
import TaskController from "../controllers/task.controller";

const router:Router = Router();

router.get("/items", TaskController.getTasks);
router.post("/post", TaskController.createTask);
router.put("/put/:id", TaskController.updateTask);
router.delete("/delete/:id", TaskController.deleteTask)

export default router;
