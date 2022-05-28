const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  user_id: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    required: true,
    type: Date,
  },
  break: {
    interval: {
      required: true,
      type: Number,
      max: 86400,
    },
    duration: {
      required: true,
      type: Number,
      max: 86400 - 1,
    },
  },
  activities: [
    {
      category: {
        required: true,
        type: String,
      },
      description: {
        required: false,
        type: String,
        maxLength: 255,
      },
      time_start: {
        required: true,
        type: Number,
        max: 86400 - 1,
      },
      time_end: {
        required: true,
        type: Number,
        max: 86400,
      },
    },
  ],
});

module.exports = mongoose.model("User_Day", dataSchema);
