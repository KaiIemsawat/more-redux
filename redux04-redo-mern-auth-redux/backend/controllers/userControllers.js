import asyncHandler from "express-async-handler";

/* Auth user/set token */
// route POST - /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Auth User" });
});

/* Register a new user */
// route POST - /api/users
// @access Public
const reggirterUer = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Register User" });
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
