// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const port = 3000; // Choose any available port you like
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
