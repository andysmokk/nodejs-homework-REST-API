const { connect } = require("mongoose");
// const { MongoClient } = require("mongodb");

const connectDB = async () => {
  const uri = process.env.URI_DB;
  // eslint-disable-next-line no-unused-vars
  const db = await connect(uri);
  const { name, port, host } = db.connection;
  console.log(
    `Database (name: ${name}) connection successful for port: ${port}, host: ${host}`
      .cyan
  );
};

module.exports = connectDB;

// const uri = process.env.URI_DB;

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = client.connect();
// const db = connect(uri);

// process.on("SIGINT", async () => {
//   const client = await db;
//   client.close();
//   console.log("Connection DB closed");
// });

// module.exports = db;
