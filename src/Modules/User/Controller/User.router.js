import { Router } from "express";
import *as UserController from "./User.controller.js";

const router = Router();

router.get("/getusers",UserController.GetUsers);
router.delete("/deleteuser/:id",UserController.DeleteUser);
router.patch("/updateuser",UserController.UpdateUser);

export default router;