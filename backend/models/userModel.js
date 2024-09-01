const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const saltRound = 10;
const validator = require("validator");

// Define the user schema

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: [validator.isEmail, "Please provide a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
});

// static sign up method

userSchema.statics.signup = async function (name, email, password) {
  try {
    if (!email || !password || !name) {
      throw Error(
        `It seems you've left some fields empty, please complete the form.`
      );
    }
    if (!validator.isEmail(email)) {
      throw Error(`Invalid email format: ${email}`);
    }
    if (!validator.isStrongPassword(password)) {
      throw Error(`Password not strong enough`);
    }

    const existingUser = await this.findOne({ email });
    if (existingUser) {
      throw Error(`User ${email} already exists`);
    }

    // generate salt for password hashing

    const salt = await bcrypt.genSalt(saltRound);

    // hash the password with the generated salt for security purposes

    const hashedPassword = await bcrypt.hash(password, salt);

    // creating or signing up new user
    const newUser = await this.create({
     name: name,
      password: hashedPassword,
      email: email,
    });

    return newUser;
  } catch (error) {
    throw Error(`${error.message}`);
  }
};

// static login method

userSchema.statics.login = async function (email, password) {
  try {
    if (!email || !password) {
      throw new Error(`All fields are required`);
    }

    const exisitingUser = await this.findOne({ email });

    if (!exisitingUser) {
      throw new Error(`invalid email`);
    }

    const matchPassword = await bcrypt.compare(
      password,
      exisitingUser.password
    );

    if (!matchPassword) {
      throw new Error(` passwords do not match`);
    }

    return exisitingUser;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

const user = mongoose.model("User", userSchema);

module.exports = user;
