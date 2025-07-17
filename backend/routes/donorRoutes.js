const express = require('express');
const router = express.Router();
const { getAllDonors } = require('../controllers/donorController');

router.get('/donors', getAllDonors);

module.exports = router;
