const express = require("express");
const User = require("../models/user")

const router = express.Router();

//TODO
router.post("/user/create", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    roleId: req.body.roleId,
  });

  try {
    const dataToSave = await user.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/user/getAllUsers", async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/user/getOne/:id", async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/user/getOnebyEmail", async (req, res) => {
    try {
        const user = User.findByEmail(req.body.email)
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

router.patch("/user/update/:id", async (req, res) => {
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

router.patch("/user/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    //const options = { new: true };

    const result = await User.findByIdAndUpdate(id, updateData);
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/user/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findByIdAndDelete(id);
    res.send(`Document '${data.name}' has been deleted`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
