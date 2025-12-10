const express = require("express");
const router = express.Router();
const requireLogin = require("../middleware/requiredLogin");

router.get("/dashboard", requireLogin, (req, res) => {
  res.render("dashboard");
});

module.exports = router;
