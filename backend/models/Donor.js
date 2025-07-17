const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: String,
  bloodGroup: String,
  city: String,
  contact: String,
});

module.exports = mongoose.model('Donor', donorSchema);
