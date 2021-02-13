const express = require("express");
const { Mongoose } = require("mongoose");
const router = express.Router();
const Job = require("../models/Job");
const mongoose = require("mongoose");

// RESTFUL -- framework
// get (read)
router.get("/jobs", (req, res) => {
  console.log("called jobs");
  Job.find({})
    .then((jobs) => {
      res.json(jobs);
    })
    .catch((err) => {
      res.json(err);
    });
});

// get a specific item
router.get("/jobs/:id", (req, res) => {});

// create
router.post("/jobs", (req, res) => {
  // ...
  console.log(req.body);
  Job.create({
    userID: mongoose.Types.ObjectId("4edd40c86762e0fb12000003"),
    title: req.body.title,
    company: req.body.company,
    dueDate: req.body.dueDate,
    jobLink: req.body.jobLink,
  });
  res.status(200);
});

// update
router.patch("/jobs/:id", (req, res) => {});

// delete
router.delete("/jobs/:id", (req, res) => {});

module.exports = router;
