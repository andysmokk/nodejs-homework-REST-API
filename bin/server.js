const app = require("../app");
const connectDB = require("../config/db");

const PORT = process.env.PORT || 3000;

connectDB();

const server = app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`.yellow);
});

process.on("unhandledRejection", (error, _) => {
  if (error) {
    console.log(`Server not running. Error: ${error.message}`.red);
    server.close(() => process.exit(1));
  }
});

// .then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server running. Use our API on port: ${PORT}`);
//   });
// })
// .catch((err) => {
//   console.log(`Server not running. Error: ${err.message}`);
// });
