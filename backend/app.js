const express = require("express");
const cors = require("cors");
const path = require("path");
const UserRoute = require("./routes/UserRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);

//config env
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}

//production;

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

module.exports = app;
