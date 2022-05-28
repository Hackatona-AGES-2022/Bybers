const express = require("express");
const User_Day = require("../models/user_day");

const router = express.Router();

//TODO
router.post("/create", async (req, res) => {
  const user = new User_Day({
    user_id: req.body.user_id,
    date: req.body.date,
    break: req.body.break,
    activities: req.body.activities,
  });

  try {
    const dataToSave = await user.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getNext7Days/:user_id", async (req, res) => {
  try {
    let data = await User_Day.find({
      user_id: { $eq: req.params.user_id },
    }).sort("date");
    data = data.slice(0, 7);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getOnebyEmail", async (req, res) => {
  try {
    const user = User.findByEmail(req.body.email);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const options = { new: true };

    const result = await User.findByIdAndUpdate(id, updateData, options);
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findByIdAndDelete(id);
    res.send(`Document '${data.name}' has been deleted`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
