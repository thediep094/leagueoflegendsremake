require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT;
const router = require("./route/index");
const url = process.env.URL;

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(error.message);
  }
};
connectDB();

app.use(bodyParser.json());
app.use(express.json());
app.use("/api/v1", router);
app.get("/", (req, res) => {
  res.send("Hello World!?");
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
