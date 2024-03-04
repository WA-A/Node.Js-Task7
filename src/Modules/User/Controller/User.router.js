import { Router } from "express";
import *as UserController from "./User.controller.js";

const router = Router();

router.get("/getusers",UserController.GetUsers);
router.delete("/deleteuser/:id",UserController.DeleteUser);
router.put("/updateuser/:id",UserController.UpdateUser);

export default router;