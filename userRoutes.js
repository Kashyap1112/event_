const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

// User Registration
router.post("/register", registerUser);

// User Login
router.post("/login", loginUser);

// Get User Profile (Protected Route)
router.get("/profile", protect, getUserProfile);

module.exports = router;
