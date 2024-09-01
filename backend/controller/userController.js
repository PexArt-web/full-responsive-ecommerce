const User = require("../models/userModel");
// sign up user

const signUpUser = async (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;

  try {
    const signup = await User.signup(username, email, password, firstName, lastName)
    res.status(200).json({ success: "signing up user" , user: email, signup});
  } catch (error) {
    res
      .status(400)
      .json({ message: `Errror signing up user: ${error.message}` });
  }
};

// login user

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    // const userLogin = await
    res.status(200).json({ success: "login user" });
  } catch (error) {
    res.status(400).json({ message: `errror login user: ${error.message}` });
  }
};

module.exports = {
  signUpUser,
  loginUser,
};
