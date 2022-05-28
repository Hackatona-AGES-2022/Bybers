const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  question: [{
    question: {
        required: false,
        type: String,
        maxlength: 255
    },
    answer: {
        required: false,
        type: String,
        maxlength: 255
    },
  }],
  user_dayId:{
      required: true,
      type: mongoose.Schema.Types.ObjectId, ref: "User_Day"
  }
});

module.exports = mongoose.model("Feedback", dataSchema);
