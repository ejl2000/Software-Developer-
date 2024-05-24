import React, { useState } from 'react'; // Import React and the useState hook for state management
import axios from 'axios'; // Import Axios for making HTTP requests

// Define the WeatherForm component which takes onFormSubmit as a prop
const WeatherForm = ({ onFormSubmit }) => {
    // Define state variables for city, temperature, and description, with initial values as empty strings
    const [city, setCity] = useState('');
    const [temperature, setTemperature] = useState('');
    const [description, setDescription] = useState('');

    // Define the handleSubmit function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        // Send a POST request to the backend API with the form data
        const response = await axios.post('http://localhost:3000/', {
            city,
            temperature,
            description
        });
        // Call the onFormSubmit prop function with the newly created form response ID
        onFormSubmit(response.data.id);
    };

    // Render the form
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>City:</label>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} // Update city state on input change
                    required
                />
            </div>
            <div>
                <label>Temperature:</label>
                <input
                    type="text"
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)} // Update temperature state on input change
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} // Update description state on input change
                    required
                />
            </div>
            <button type="submit">Submit</button> {/* Submit button for the form */}
        </form>
    );
};

export default WeatherForm; // Export the WeatherForm component as the default export
