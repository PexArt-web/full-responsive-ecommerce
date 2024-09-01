const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const saltRound = 10;
const validator = require("validator");

// Define the user schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static sign up method

userSchema.statics.signup = async function (
  username,
  email,
  password,
  firstName,
  lastName
) {
  try {
    if (!email || !password || !firstName || !lastName || !username) {
      throw new Error(`all fields must be filled`);
    }
   if(!validator.isEmail(email)){
     throw new Error(`Invalid email format: ${email}`)
   }
   if (!validator.isStrongPassword(password)){
     throw new Error(`Password not strong enough`)
   }

    const existingUser = await this.findOne({ email });
    if (existingUser) {
      throw new Error(`User ${email} already exists`);
    }

    // generate salt for password hashing

    const salt = await bcrypt.genSalt(saltRound);

    // hash the password with the generated salt for security purposes

    const hashedPassword = await bcrypt.hash(password, salt);

    // creating or signing up new user
    const newUser = await this.create({
      username: username,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
      email: email,
    });

    return newUser;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

const user = mongoose.model("User", userSchema);

module.exports = user;
