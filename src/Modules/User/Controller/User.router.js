import { Router } from "express";
import *as UserController from "./User.controller.js";
import auth from "../../../../MiddleWare/auth.js";

const router = Router();

router.get("/getusers",UserController.GetUsers);
router.delete("/deleteuser",auth,UserController.DeleteUser);
router.patch("/updateuser",auth,UserController.UpdateUser);

export default router;