const Donor = require('../models/Donor');

const getAllDonors = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.status(200).json(donors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllDonors };

const createDonor = async (req, res) => {
  try {
    const newDonor = new Donor(req.body);
    const savedDonor = await newDonor.save();
    res.status(201).json(savedDonor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getDonors,
  createDonor,
};
