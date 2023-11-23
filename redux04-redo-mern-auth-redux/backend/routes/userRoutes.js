import express from "express";
import {
    authUser,
    reggirterUer,
    logoutUser,
    getUserProfile,
    updateUserProfile,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", reggirterUer);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router
    .route("/profile")
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

export default router;
