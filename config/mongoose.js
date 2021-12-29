const mongoose = require("mongoose");
mongoose.connect(process.env.db);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connecting to db"));

db.once("open", function () {
  console.log("Connection To DB Successful");
});
