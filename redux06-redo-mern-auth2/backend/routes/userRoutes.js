import express from "express";

import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
// incase of having different request methods with the same endpoint
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
