require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userController = require("./routes/usersController");
const userDayController = require("./routes/userDayController");
const activityController = require("./routes/activityController");

const app = express();

app.use(express.json());

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use("/api/user", userController);
app.use("/api/user-days", userDayController);
app.use("/api/activities", activityController);

app.listen(5000, () => {
  console.log(`Server Started at ${5000}`);
});
