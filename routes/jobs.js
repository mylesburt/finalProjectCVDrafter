const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// RESTFUL -- framework
// get (read)
router.get("/jobs", (req, res) => {
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
});

// update
router.patch("/jobs/:id", (req, res) => {});

// delete
router.delete("/jobs/:id", (req, res) => {});

module.exports = router;
