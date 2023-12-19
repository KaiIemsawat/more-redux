import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @description : Auth : user, set token
// @route : POST : /api/users/auth
// @access : Public
const authUser = asyncHandler(async (req, res) => {
    // ERROR TEST
    // res.status(401);
    // throw new Error("Something went wrong");

    res.status(200).json({ message: "Auth User" });
});

// @description : Register a new user
// @route : POST : /api/users
// @access : Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const isUserExit = await User.findOne({ email });

    if (isUserExit) {
        res.status(400);
        throw new Error("User already exits");
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error("Invalid User Data");
    }

    console.log(user);
});

// @description : Logout user
// @route : POST : /api/users/logout
// @access : Public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Logout User" });
});

// @description : Get user profile
// @route : GET : /api/users/profile
// @access : Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "User Profile" });
});

// @description : Update user profile
// @route : PUT : /api/user/profile
// @access : Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Update user profile" });
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
};
