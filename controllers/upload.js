/* eslint-disable no-console */
const multer = require('multer');
const sharp = require('sharp');

const IMAGE_LOCATION = './uploads';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, IMAGE_LOCATION);
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadImg = multer({ storage }).single('image');

const resize = async (req, res) => {
  sharp(`${IMAGE_LOCATION}/${req.file.originalname}`)
    .resize(320, 240)
    .toFile('test.png', (err) => { if (err) console.log(err); });
  return res.sendFile('test.png', { root: './resized' });
};

module.exports = { resize, uploadImg };
