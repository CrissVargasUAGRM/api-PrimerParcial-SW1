import { Router } from "express";
import * as DialogController from "../controllers/dialog.controller";

const router = Router();

router.get("/webhook", DialogController.probando);

export default router;