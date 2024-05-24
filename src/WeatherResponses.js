import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherResponses = () => {
    const [responses, setResponses] = useState([]);

    useEffect(() => {
        const fetchResponses = async () => {
            const result = await axios.get('http://localhost:3000/');
            setResponses(result.data);
        };
        fetchResponses();
    }, []);

    return (
        <div>
            <h2>Form Responses</h2>
            {responses.map(response => (
                <div key={response.id}>
                    <p>ID: {response.id}, City: {response.city}, Temperature: {response.temperature}, Description: {response.description}</p>
                </div>
            ))}
        </div>
    );
};

export default WeatherResponses;
