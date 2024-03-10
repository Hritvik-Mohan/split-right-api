const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

// Connect to database
connectDB();

const app = express();
const PORT = 3000;

app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
