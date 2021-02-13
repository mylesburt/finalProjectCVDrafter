const express = require("express");
const { Mongoose } = require("mongoose");
const router = express.Router();
const User = require("../models/User");
const mongoose = require("mongoose");

router.get("/users", (req, res) => {
  console.log("called users");
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/users/:id", (req, res) => {});

router.post("/users", (req, res) => {
  console.log(req.body);
  User.create({
    userID: mongoose.Types.ObjectId(""),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });
  res.status(200);
});

module.exports = router;
