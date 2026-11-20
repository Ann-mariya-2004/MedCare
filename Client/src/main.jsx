
// Import global CSS styles.
import "./index.css";

// Import React and ReactDOM.
import React from "react";
import ReactDOM from "react-dom/client";

// Import BrowserRouter for application-wide navigation.
import { BrowserRouter } from "react-router-dom";

// Import the main App component.
import App from "./App";

// Render the application inside the root HTML element.
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* Enable routing throughout the application. */}
        <BrowserRouter>
            {/* Display the main application component. */}
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
