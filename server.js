require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", require("./routes/authentication/auth"));

// Database connection
mongoose.connect(process.env.MONGO_SECRET_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo db");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting", err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App running at port ${PORT}`));
