const express = require('express');
const router = express.Router();
const { getDonors, createDonor } = require('../controllers/donorController');

// GET all donors
router.get('/', getDonors);

// POST a new donor
router.post('/', createDonor);

module.exports = router;
