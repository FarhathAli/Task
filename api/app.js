const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/register.js");

mongoose
  .connect("mongodb://0.0.0.0:27017/Task")
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
  });

// Set up the server
const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRoute);

// // Handle POST requests to /api/users
// app.post("/api/users", async (req, res) => {
//   const { name, password } = req.body;
//   const user = new User({ name, password });
//   await user.save();
//   res.json(user);
// });

// Start the server
app.listen(4001, () => {
    console.log('Server started on port 4001');
  });
