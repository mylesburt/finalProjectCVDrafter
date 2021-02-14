const router = require("express").Router();

router.post("/signin", (req, res) => {
  res.send("Signin");
});

module.exports = router;
