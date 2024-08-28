import { Router } from "express";
import { create,getTarefa  } from "../controllers/tarefaController.js";

const router = Router();

router.post("/criar", create)
router.get("/:id", getTarefa)

export default router;
