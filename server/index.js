require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/users");
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (err) => {
  console.log("error", err);
});
db.once("open", () => {
  console.log("Connected to the database..");
});

app.use('/users',router)

app.listen(3000, () => {
  console.log("server started..");
});
