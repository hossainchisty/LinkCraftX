// Basic Lib Imports
const express = require("express");
const router = express.Router();

const {
  getURL,
  shortURL,
} = require("./url.controller");

const { authMiddleware } = require("../../middleware/authMiddleware");

// Routing Implement
router.get("/:urlId", getURL);
router.post("/", shortURL);


module.exports = router;
