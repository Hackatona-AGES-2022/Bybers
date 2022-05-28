const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  question: [
    {
      question: {
        required: true,
        type: String,
        maxlength: 255,
      },
      answer: {
        required: true,
        type: String,
        maxlength: 255,
      },
    },
  ],
  date: {
    required: true,
    type: Date,
  },
  humorValue: {
    required: true,
    type: Number,
    min: 0,
    max: 10,
  },
  user_dayId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "User_Day",
  },
});
module.exports = mongoose.model("Feedback", dataSchema);
