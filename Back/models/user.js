const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password:{
    required: true,
    type: String,
  },
  roleId:{
    required: true,
    type: mongoose.Schema.Types.ObjectId, ref: "Role",
  }
});

module.exports = mongoose.model("User", dataSchema);
