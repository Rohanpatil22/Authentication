import { Router } from "express";
import { createUser,userLogin } from "../controller/userController.js";

const router=Router();

router.use("/create",createUser);
router.use("/login",userLogin);


export default router;
