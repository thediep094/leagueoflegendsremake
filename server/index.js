require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http").Server(app);
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

app.use(cors());
app.use("/images", express.static("public/uploads/images"));
app.use("/thumbnails", express.static("public/uploads/thumbnails"));
app.use("/news", express.static("public/uploads/news"));
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/v1", router);
app.get("/", (req, res) => {
    res.send("Hello World!?");
});

http.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
