// app.js
const express = require('express');
const cors = require('cors');
const orderRoutes = require('./routes/orderRoutes'); // Import the order routes
const chatRoutes = require('./routes/chatRoutes'); // Import the chat routes

const app = express();

// Middlewares
app.use(cors({
  origin: ['http://localhost:3000', 'https://earnest-longma-cbb832.netlify.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// Set up routes
app.use('/api/orders', orderRoutes); // Order route
app.use('/api/chat', chatRoutes); // Chat route

module.exports = app; // Export app for server.js to use
