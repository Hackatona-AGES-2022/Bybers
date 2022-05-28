const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  date:{
    required: true,
    type: Date
  },
  break:{
      duration:{
          required: true,
          type: Number,
          max: 86400
      },
      interval:{
        required: true,
        type: Number,
        max: duration.max-1
    }
  },
  activities:[
      {
          category:{
              required: true,
              type: String
          },
          description:{
              required: false,
              type: String,
              maxLength: 255
          },
          time_start:{
              required: true,
              type: Number,
              max: 86400
          },
          time_end:{
            required: true,
            type: Number,
            max: time_start.max-1
          }
      }
  ]
});

module.exports = mongoose.model("User_Day", dataSchema);
