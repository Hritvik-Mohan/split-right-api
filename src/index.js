const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const dashboardRoute = require("./routes/dashboardRoute");

const cors = require("cors");
require('dotenv').config()

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routes Middleware
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
