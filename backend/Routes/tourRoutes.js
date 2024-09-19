const express = require('express');
const router = express.Router();
const londonController = require('../Controllers/tourController');
const { protect } = require('../Middleware/authMiddleware');

router.get('/london', protect, londonController.londondata);
router.get('/london/beach', protect, londonController.londonBeachData);
router.get('/london/pools', protect, londonController.londonPoolData);
router.get('/london/hotels', protect, londonController.londonHotelsData);
router.put('/reserve', express.json(), protect, londonController.reservation);

module.exports = router;
