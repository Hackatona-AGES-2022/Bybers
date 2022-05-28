const express = require("express");
const Feedback = require("../models/feedback");

const router = express.Router();

//cria o feedback no final do dia
router.post("/sendFeedback/:user_dayId/:user_id", async (req, res) => {
  const feedback = new Feedback({
    user_id: req.params.user_id,
    date: req.body.date,
    user_dayId: req.params.user_dayId,
    question: req.body.question,
    humorValue: req.body.humorValue,
  });
  try {
    const dataToSave = await feedback.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getNumFeedback/:user_id", async (req, res) => {
  try {
    let data = await Feedback.find({
      user_id: {
        $eq: req.params.user_id,
      },
    });
    data = data.length;
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
