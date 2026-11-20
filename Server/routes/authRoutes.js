
 // Import Express to create authentication routes.
const express = require("express");

// Import authentication controller functions.
const {
    registerUser,
    loginUser
} = require("../controllers/authController");

// Create an Express router instance.
const router = express.Router();

// Register a new Patient or Doctor.
router.post("/register", registerUser);

// Login an existing user.
router.post("/login", loginUser);

// Export the authentication router.
module.exports = router;
