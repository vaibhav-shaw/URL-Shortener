const express = require('express');
const { createShortUrl, getAnalytics } = require('../controllers/url');
const router = express.Router();

const URL = require('../models/url');

router.post('/', createShortUrl);

router.get('/analytics/:shortId', getAnalytics);

module.exports = router; 