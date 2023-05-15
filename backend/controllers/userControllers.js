const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken=require('../config/generateToken')

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Plase complete the form");// code will stop here if condition is true, means this is like return statement
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  if (user) {
    res.status(201)
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token:generateToken(user.id)
    });
  } else {
    res.status(400);
    throw new Error("Failed to create user");
  }

});
// this is to check email and password and let user login.
const authUser = asyncHandler( async(req,res)=>{
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateToken(user.id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
})

module.exports = {registerUser, authUser};