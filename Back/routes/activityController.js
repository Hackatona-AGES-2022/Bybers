const express = require("express");
const User_Day = require("../models/user_day");

const router = express.Router();

router.get("/getAllActivitiesByDay/:user_id", async (req, res) => {
  const date = req.query.date;
  try {
    const data = await User_Day.find({
      $and: [
        {
          user_id: {
            $eq: req.params.user_id,
          },
        },
        {
          date: {
            $eq: date,
          },
        },
      ],
    });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.post("/create/:user_id", async (req, res) => {
  const filter = { user_id: req.params.user_id, date: req.body.date };
  const update = { activities: req.body.activity };
  const options = { new: true };
  const dayToSave = await User_Day.findOneAndUpdate(filter, update, options);

  //   let dayToSave = null;
  //   if (dayExistent.length > 0) {
  //     dayToSave = dayExistent[0];
  //     dayToSave.activities.append(req.body.activity);
  //   } else {
  //     dayToSave = new User_Day({
  //       user_id: req.params.user_id,
  //       date: req.body.date,
  //       break: {
  //         interval: 3600, // uma hora
  //         duration: 300, // 5 minutos de pausa
  //       },
  //       activities: [req.body.activity],
  //     });
  //   }
  try {
    const dataToSave = await dayToSave.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
