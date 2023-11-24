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
// In case that different requests use the same url
// router.route("/profile").get(getUserProfile).put(updateUserProfile); // before 'protect' middleware
router
    .route("/profile")
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

export default router;
