'use strict';

import express from 'express';
import { handleUsecureEvents } from './src/handleUsecureEvents.js';
import helmet from 'helmet';
const app = express();
const port = process.env.PORT || 3000;
import sanitizeAndValidate from './src/sanitizeAndValidate.js';

//Parse Json body
app.use(express.json());

//Use helmet
app.use(helmet());

// Define a route to handle incoming requests
app.get('/', (req, res) => {
  res.send('Hello world!');
});
app.get('/hello', (req, res) => {
  res.send(`Hello, ${req.query.person}!`);
});
app.post('/usecure', sanitizeAndValidate, handleUsecureEvents);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
