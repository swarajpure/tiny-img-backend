const express = require('express');

const router = express.Router();
const { uploadImg, resize } = require('../controllers/upload');
const { uploadToImgur } = require('../utils/imgur');

router.post('/', uploadImg, resize, uploadToImgur);

module.exports = router;
