const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JSECRET, { expiresIn: "3d" });
};

// sign up user

const signUpUser = async (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;

  try {
    const user = await User.signup(
      username,
      email,
      password,
      firstName,
      lastName
    );

    const token = createToken(user._id);
    res
      .status(200)
      .json({ success: "signing up user", userEmail: email, userToken: token });
  } catch (error) {
    res
      .status(400)
      .json({ message: `Errror: ${error.message}` });
  }
};

// login user

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    // creating a new user token
    const token = createToken(user._id);
    res
      .status(200)
      .json({ success: "login user", userEmail: email, token: token });
  } catch (error) {
    res.status(400).json({ message: `errror: ${error.message}` });
  }
};

module.exports = {
  signUpUser,
  loginUser,
};
