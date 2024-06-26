'use strict';

import express from 'express';
import { handleEvents } from './script.js';
const app = express();
const port = process.env.PORT || 3000;

//Parse Json body
app.use(express.json());

// Define a route to handle incoming requests
app.post('/', handleEvents);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
