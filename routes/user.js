const express = require('express');
const userController = require('../Controllers/user');

const router = express.Router();

router.get('/', userController.getReview);

router.get('/CreateReview', userController.getCreateReview);

router.get('/UpdateReview/:reviewId', userController.getUpdateReview);

router.post('/CreateReview', userController.addReview);

router.post('/', userController.deleteReview);

router.post('/UpdateReview/:reviewId', userController.getUpdateReview);

module.exports = router;