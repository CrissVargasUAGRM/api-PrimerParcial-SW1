import { Router } from "express";
import * as DialogController from "../controllers/dialog.controller";

const router = Router();

router.post("/webhook", DialogController.probando);
router.post("/reserva", DialogController.enviarEmail);

export default router;