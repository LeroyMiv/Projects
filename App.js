// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define a route handler for the main page
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});