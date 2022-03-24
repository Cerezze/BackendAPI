const express = require('express');
const userController = require('../Controllers/user');

const router = express.Router();

router.get('/', userController.getReview);

router.get('/CreateReview', userController.getCreateReview);

router.post('/CreateReview', userController.addReview);

module.exports = router;