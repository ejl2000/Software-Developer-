import React, { useState } from 'react'; // Import React and the useState hook for state management
import './App.css'; // Import the CSS file for styling
import WeatherForm from './WeatherForm'; // Import the WeatherForm component
import WeatherResponses from './WeatherResponses'; // Import the WeatherResponses component

// Define the App components
const App = () => {
    // Define a state variable to track form submission status, initially set to false
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Define the handleFormSubmit function to handle form submissions
    const handleFormSubmit = (id) => {
        alert(`Form submitted with ID: ${id}`); // Show an alert with the form response ID
        setFormSubmitted(!formSubmitted); // Toggle the formSubmitted state to trigger a re-render
    };

    // Render the App component
    return (
        <div className="App">
            <h1>Weather Form</h1> {/* Display a heading */}
            <WeatherForm onFormSubmit={handleFormSubmit} /> {/* Render the WeatherForm component and pass the handleFormSubmit function as a prop */}
            <WeatherResponses key={formSubmitted} /> {/* Render the WeatherResponses component, re-rendering it when formSubmitted changes */}
        </div>
    );
};

export default App; // Export the App component as the default export
