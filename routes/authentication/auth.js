const express = require("express");
const router = express.Router();
const User = require("../../models/user.js");
const bcrypt = require("bcryptjs");

router.post("/signup", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ error: "Please add all the fields" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (savedUser) {
      return res.json({ error: "User already exists with this email" });
    }
    bcrypt
      .hash(password, 12)
      .then((hashedpassword) => {
        const user = new User({
          email,
          password: hashedpassword,
        });
        user
          .save()
          .then((user) => {
            return res.json({ message: "Saved successfully" });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ error: "Please enter email or password" });
  }
  User.findOne({ email }).then((savedUser) => {
    if (!savedUser) {
      return res.json({ error: "Invalid Email or Password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          const { _id } = savedUser;
          res.json({
            user: {
              _id,
              email,
            },
            message: "Logged In Successfully!",
          });
        } else return res.json({ error: "Invalid Email or password" });
      })
      .catch((err) => console.log(err));
  });
});

module.exports = router;
