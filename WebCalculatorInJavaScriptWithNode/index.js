const express = require('express');
const path = require('path');

// Create application server.
const app = express();

// Body parser middleware.
app.use(express.json());
app.use(express.urlencoded({
    extended: false 
}));

// Set static folder.
app.use(express.static(path.join(__dirname, 'public')));

// Define port number.
const PORT = process.env.PORT || 5000;

// Listen on port.
app.listen(PORT, () => {
	// Do any task required with the application server start.
});