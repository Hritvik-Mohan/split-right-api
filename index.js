const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.connect(
  "mongodb+srv://hritvik5005:QUdygbamhJJg1X0v@cluster0.cweb7kn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const User = mongoose.model('User', {
    username: String,
    email: String,
    password: String
});

app.use(bodyParser.json());

app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: 'User register successfully '});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get("/", (req, res) => {
  res.json("Hello");
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
