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
