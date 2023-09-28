const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
  getLoggedinUser,
} = require("../controllers/auth");
const authenticate = require("../middleware/auth");
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/currentUser", authenticate, getLoggedinUser);

module.exports = router;
