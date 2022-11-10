import { Router } from "express";
import * as AuthController from "../controllers/auth.controller";
import * as Verify from "../middlewares/verify";

const router = Router();

router.post("/singup",[Verify.emailDuplicate, Verify.userNameDuplicate], AuthController.singup);
router.post("/singin", AuthController.singin);

export default router;