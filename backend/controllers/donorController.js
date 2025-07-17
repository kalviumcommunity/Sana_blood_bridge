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

// Update an existing donor by ID
const updateDonor = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDonor = await Donor.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedDonor) {
      return res.status(404).json({ message: 'Donor not found' });
    }

    res.status(200).json(updatedDonor);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update donor', error });
  }
};

module.exports = {
  getDonors,
  createDonor,
  updateDonor // ← Add this to export
};

