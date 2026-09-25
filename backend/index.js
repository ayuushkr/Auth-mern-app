const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');

require('dotenv').config();
require('./models/db');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/ping', (req, res) => {
  res.send('AyuushKR');
});
app.use('/auth', AuthRouter);

// ✅ Export app instead of app.listen
module.exports = app;
