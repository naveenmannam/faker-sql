require("dotenv").config();
const path = require("path");
const express = require("express");
const logger = require("morgan");

const app = express();

const { userRouter } = require("./routes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use("/", userRouter);
app.use("/person", userRouter);

module.exports = app;
