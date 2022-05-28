const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  Id:{
    required: true,
    type: Number
  }
});

module.exports = mongoose.model("Role", dataSchema);
