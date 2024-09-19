const express = require('express');
const router = express.Router();
const adminController = require("../Controllers/adminController");
const { protect } = require('../Middleware/authMiddleware');

router.get('/data', protect, adminController.adminData);
router.get('/newUser', protect, adminController.newUser);
router.get('/allUsers', protect, adminController.allUsers);
router.put('/updateUser', protect, adminController.updateUser);
router.get('/tourData', protect, adminController.tourData);
router.put('/updateTour', protect, adminController.updateTour);

module.exports = router;
