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
