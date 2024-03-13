import React, { useState } from 'react';

function MyComponent() {
    // State variable to hold the input value
    const [inputValue, setInputValue] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any actions here (e.g., submitting data)

        // Clear the input field by updating the state variable to an empty string
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Update state variable on input change
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default MyComponent;
