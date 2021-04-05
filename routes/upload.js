const express = require('express');

const router = express.Router();
const { uploadImg, resize } = require('../controllers/upload');

router.post('/', uploadImg, resize);

module.exports = router;
