const express = require('express');
const mongoose = require('mongoose');
const donorRoutes = require('./routes/donorRoutes');
// Repeat for other routes

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/bloodbridge');

app.use('/api', donorRoutes);
// Repeat for other routes

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
