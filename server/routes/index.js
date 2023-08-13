import { Router } from "express";
import { createUser } from "../controller/userController.js";

const router=Router();

router.use("/create",createUser);


export default router;
