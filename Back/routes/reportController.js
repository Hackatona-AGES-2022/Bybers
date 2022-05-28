const express = require("express");
const Feedback = require("../models/feedback");

const router = express.Router();

//cria o feedback no final do dia
router.get("/getReport/:user_id", async (req, res) => {
  try {
    let data = await Feedback.find({
      user_id: {
        $eq: req.params.user_id,
      },
    }).sort("date");
    data = data.slice(0, 7);
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
