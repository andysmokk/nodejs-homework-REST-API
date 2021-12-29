const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
// eslint-disable-next-line no-unused-vars
const { colors } = require("./helpers");

dotenv.config({ path: "./config/.env" });

const authRouter = require("./routes/api/auth");
const contactsRouter = require("./routes/api/contacts");
// console.log(authRouter);
// console.log(contactsRouter);

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/users", authRouter);
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
