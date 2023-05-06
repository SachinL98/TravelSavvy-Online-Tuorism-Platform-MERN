const express = require("express");
const router = express.Router();

const { regsiter, login } = require("../controllers/authController");

//Register
router.post("/register",regsiter);

//login
router.post("/login",login);



    




module.exports = router
