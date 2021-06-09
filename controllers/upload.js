/* eslint-disable no-console */
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const { dirname, join } = require('path');

const PROJECT_PATH = dirname(__dirname);

const IMAGE_SAVE_LOCATION = join(PROJECT_PATH, 'uploads');
const RESIZED_IMAGE_LOCATION = join(PROJECT_PATH, 'resized');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, IMAGE_SAVE_LOCATION);
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadImg = multer({ storage }).single('image');

const resize = async (req, res, next) => {
  const { originalname } = req.file;
  const originalFile = join(IMAGE_SAVE_LOCATION, originalname);
  const resizedFile = join(RESIZED_IMAGE_LOCATION, originalname);

  // TODO: Change only width or height
  await sharp(originalFile)
    .resize(320, 240)
    .toFile(resizedFile, (err, info) => {
      if (err) console.log(err);
      if (info) console.log('info', info);
    })
    .toBuffer();

  fs.unlink(originalFile, (err) => {
    if (err) console.log(err);
    console.log('file deleted');
  });
  next();
};

module.exports = { resize, uploadImg };
