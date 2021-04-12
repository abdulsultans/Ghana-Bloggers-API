const mongoose = require("mongoose");

const bloggerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);
const Blogger = mongoose.model("Blogger", bloggerSchema);
module.exports = Blogger;
