import express from "express";
import {
    authUser,
    reggirterUer,
    logoutUser,
    getUserProfile,
    updateUserProfile,
} from "../controllers/userControllers.js";

const router = express.Router();

router.post("/", reggirterUer);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
