'use strict';

import express from 'express';
import { handleUsecureEvents } from './src/handleUsecureEvents.js';
const app = express();
const port = process.env.PORT || 3000;

//Parse Json body
app.use(express.json());

// Define a route to handle incoming requests
app.get('/', (req, res) => {
  res.send('Hello world!');
});
app.post('/usecure', handleUsecureEvents);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
