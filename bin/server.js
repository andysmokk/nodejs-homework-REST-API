const { mkdir } = require("fs/promises");
const app = require("../app");
const connectDB = require("../config/db");

const PORT = process.env.PORT || 3000;

connectDB();

const UPLOAD_DIR = process.env.UPLOAD_DIR;
const AVATARS_DIR = process.env.AVATARS_DIR;
const TMP_DIR = process.env.TMP_DIR;

const server = app.listen(PORT, async () => {
  await mkdir(`${UPLOAD_DIR}/${AVATARS_DIR}`, { recursive: true });
  await mkdir(`${UPLOAD_DIR}/${TMP_DIR}`, { recursive: true });
  console.log(`Server running. Use our API on port: ${PORT}`.yellow);
});

process.on("unhandledRejection", (error, _) => {
  if (error) {
    console.log(`Server not running. Error: ${error.message}`.red);
    server.close(() => process.exit(1));
  }
});
