const express = require("express");
const router = express.Router();
const { registerUser, authUser } = require("../contoller/userController");

// Signup route
router.route('/signup').post(registerUser);

// Login route
router.route('/login').post(authUser);

module.exports = router;    