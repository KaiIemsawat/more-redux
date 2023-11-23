import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import genToken from "../utils/generateToken.js";

/* Auth user/set token */
// route POST - /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPasswords(password))) {
        genToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(401);
        throw new Error("Invalid Credentials");
    }
});

/* Register a new user */
// route POST - /api/users
// @access Public
const reggirterUer = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {
        genToken(res, user._id);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error("Invalid User Data");
    }
});

/* Logout user */
// route POST - /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Logout user" });
});

/* Get User Profile */
// route POST - /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get User Profile" });
});

/* Update User Profile */
// route PUT - /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Update User Profile" });
});

export {
    authUser,
    reggirterUer,
    logoutUser,
    getUserProfile,
    updateUserProfile,
};
