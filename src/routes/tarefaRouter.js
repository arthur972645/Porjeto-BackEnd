import { Router } from "express";
import { create } from "../controllers/tarefaController.js";

const router = Router();

router.post("/criar", create)

export default router;
