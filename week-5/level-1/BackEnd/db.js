const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI);

const businessCardSchema = mongoose.Schema({
  title: String,
  description: String,
  interest: [String],
  linkedIn: String,
  twitter: String,
  other: String,
});

const businessCard = mongoose.model("businesscard", businessCardSchema);

module.exports = { businessCard };
