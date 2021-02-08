const express = require("express");
const router = express.Router();

const job = require("./jobs");
// const paragragh = require("./paragraphs");
// const user = require("./users");

router.use(job);

module.exports = router;
