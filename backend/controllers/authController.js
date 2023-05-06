const express = require("express");
const bcrypt = require("bcrypt");
const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')



// REGISTER USER
const regsiter = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    var hashPassword = bcrypt.hashSync(req.body.password, salt);

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });
     const saveduser = await user.save();
    res.status(200).json(saveduser);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res) => {
  
  const user = await User.findOne({email:req.body.email})
   
   if(!user){
      return res.status(404).json({ message: "Invalid Login" });
   }

   const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password)

   if(!isPasswordCorrect){
      return res.status(400).json({ message: "Invalid Password or Email" });
   }
   
   const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT)
   const {password,isAdmin,...other} = user
   res.cookie("access_token",token,{httpOnly:true}).status(200).json({...other})


};

module.exports = {
  regsiter,
  login,
};
