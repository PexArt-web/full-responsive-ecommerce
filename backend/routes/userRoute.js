const express = require("express");
const { signUpUser, loginUser } = require("../controller/userController");
const router = express.Router();

// sign up routes
router.post("/login", loginUser);

// login routes

router.post("/signup", signUpUser);

module.exports = router;
