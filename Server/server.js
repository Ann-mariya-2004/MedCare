// Import authentication routes.
const authRoutes = require("./routes/authRoutes");

// Import the Express framework to create the backend server
const express = require("express");

// Import CORS to enable communication between frontend and backend
const cors = require("cors");

// Import dotenv to load environment variables
const dotenv = require("dotenv");

// Import the MongoDB connection function
const connectDB = require("./config/db");

// Load environment variables from the .env file
dotenv.config();

// Create an Express application instance
const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Enable JSON parsing for incoming requests
app.use(express.json());

// Register authentication API routes.
app.use("/api/auth", authRoutes);

// Define the default API route for backend testing
app.get("/", (req, res) => {

    // Send a successful response to the client
    res.status(200).json({
        success: true,
        message: "Welcome to MedCare AI Backend!"
    });

});

// Get the port number from environment variables
const PORT = process.env.PORT || 5000;

// Define an asynchronous function to start the server
const startServer = async () => {

    // Connect to MongoDB before starting the server
    await connectDB();

    // Start the Express server
    app.listen(PORT, () => {

        // Display a message when the server starts successfully
        console.log(`MedCare AI Server running on port ${PORT}`);

    });

};

// Execute the server startup function
startServer();
