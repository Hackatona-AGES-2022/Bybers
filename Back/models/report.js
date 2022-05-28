const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  start_date: {
    required: true,
    type: Date,
  },
  end_date: {
    required: true,
    type: Date,
  },
  feedbacksIds: [
    {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Feedback",
    },
  ],
});

module.exports = mongoose.model("Report", dataSchema);
