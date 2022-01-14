const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const httpCode = require("./lib/httpCodes");
// eslint-disable-next-line no-unused-vars
const { colors } = require("./helpers");

dotenv.config({ path: "./config/.env" });

const authRouter = require("./routes/api/auth");
const userRouter = require("./routes/api/user");
const contactsRouter = require("./routes/api/contacts");
// console.log(authRouter);
// console.log(contactsRouter);

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const UPLOAD_DIR = process.env.UPLOAD_DIR;
const AVATARS_DIR = process.env.AVATARS_DIR;

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/avatars", express.static(`${UPLOAD_DIR}/${AVATARS_DIR}`));
app.use("/users", authRouter);
app.use("/user", userRouter);
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res
    .status(httpCode.NOT_FOUND)
    .json({ status: "error", code: httpCode.NOT_FOUND, message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(httpCode.INTERNAL_SERVER_ERROR).json({
    status: "error",
    code: httpCode.INTERNAL_SERVER_ERROR,
    message: err.message,
  });
});

module.exports = app;
