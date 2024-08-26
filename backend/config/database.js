require("dotenv").config();
const mongoose = require("mongoose");
let dbUrl = process.env.dbURL;
module.exports = {
  connectDatabase: async (cb) => {
    try {
      const connectDb = await mongoose.connect(dbUrl);
      return cb();
    } catch (error) {
      return cb(error);
    }
  },
};
