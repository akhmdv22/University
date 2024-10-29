const express = require('express');
const router = express.Router();
const RatingController = require('../Controller/Rating');
const ratingController = new RatingController();

router.post('/employees/:id/rate', ratingController.addRatings);
router.get('/employees/:id/average-rating', ratingController.getRatings);

module.exports = router;