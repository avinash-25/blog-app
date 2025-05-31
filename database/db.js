const mongoose = require("mongoose");

const Connection = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("Connected to database");
  } catch (error) {
    console.log("Failed to connect to database", error);
  }
};
module.exports = Connection;
