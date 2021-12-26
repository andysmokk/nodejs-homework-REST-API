// const { connect } = require("mongoose");
const { MongoClient } = require("mongodb");

const uri = process.env.URI_DB;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = client.connect();
// const db = connect(uri);

process.on("SIGINT", async () => {
  const client = await db;
  client.close();
  console.log("Connection DB closed");
});

module.exports = db;
