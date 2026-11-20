
// Import Mongoose to connect Node.js with MongoDB
const mongoose = require("mongoose");

// Define an asynchronous function to connect to MongoDB
const connectDB = async () => {
    try {
        // Connect to the MongoDB database using the environment variable
        await mongoose.connect(process.env.MONGO_URI);

        // Display a success message after database connection
        console.log("MongoDB Connected Successfully!");

    } catch (error) {
        // Display the database connection error
        console.error("MongoDB Connection Failed:", error.message);

        // Stop the application if database connection fails
        process.exit(1);
    }
};

// Export the database connection function
module.exports = connectDB;
