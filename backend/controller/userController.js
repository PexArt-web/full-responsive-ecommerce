const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JSECRET, { expiresIn: "3d" });
};

// sign up user

const signUpUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.signup(
      name,
      email,
      password,
    );

    const token = createToken(user._id);
    res
      .status(200)
      .json({userEmail: email, userToken: token });
  } catch (error) {
    res
      .status(400)
      .json({error: error.message});
  }
};

// login user

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    if(!user){
      throw Error('Invalid email or password');
    }
    // creating a new user token
    const token = createToken(user._id);
    res
      .status(200)
      .json({ userEmail: email, token: token });
  } catch (error) {
    res.status(400).json({ error: `error: ${error.message}` });
  }
};

module.exports = {
  signUpUser,
  loginUser,
};
