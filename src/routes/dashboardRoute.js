const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../models/user");

router.get("/user", verify, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    console.log(user);
    res.json({
      greet: `Hello ${user.username}!`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
