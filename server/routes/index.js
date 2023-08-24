import { Router } from "express";
import { createUser,userData,userLogin } from "../controller/userController.js";
import { auth } from "../middleware/auth.js";

const router=Router();

router.use("/create",createUser);
router.use("/login",userLogin);
router.use("/getData",auth,userData);


export default router;
