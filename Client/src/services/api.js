
// Import Axios to make HTTP requests to the backend.
import axios from "axios";

// Create a reusable Axios instance for MedCare API requests.
const api = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// Export the API instance for use in other frontend files.
export default api;
