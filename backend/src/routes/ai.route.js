import express from "express"

import { signup, login, logout, updateProfile, checkAuth } from "../controller/auth.controller.js";

import { protectRoute } from "../middleware/auth.middleware.js";
import { dexterchat } from "../controller/dexter.controller.js";

import { harleyChat } from "../controller/harley.controller.js";
import { tylerChat } from "../controller/tyler.controller.js";

const router= express.Router();


router.post("/dexter",protectRoute,dexterchat)
router.post("/harley",protectRoute,harleyChat)
router.post("/tyler",protectRoute,tylerChat)




export default router;