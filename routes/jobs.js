const express = require("express");
const router = express.Router();

// RESTFUL -- framework
// get (read)
router.get("/jobs", (req, res) => {
  // ..
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
