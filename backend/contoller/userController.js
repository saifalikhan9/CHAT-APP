const asyncHandler = require('express-async-handler');
const User = require("../models/usermodel");
const genreateToken = require("../config/genreateToken.js");

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("please enter all these feilds");

    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("user already exists");


    }
    const user = await User.create({
        name,
        email,
        password,
        pic,
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            password: user.password,
            pic: user.pic,
            token: genreateToken(user._id),
        });
    } else {
        throw new Error("unable to create user")
    }
});

const authUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (user.matchpassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            password: user.password,
            pic: user.pic,
            token: genreateToken(user._id),
        })
    } else {
        res.status(401);
        throw new Error("invalid emial id and password");
    }
}

module.exports = { registerUser ,authUser };
