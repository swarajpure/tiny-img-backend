/* eslint-disable no-console */
const { ImgurClient } = require('imgur');
const config = require('config');
const { dirname, join } = require('path');
const fs = require('fs');

const PROJECT_PATH = dirname(__dirname);

const { oauth: { clientId } } = config.get('imgur');
const client = new ImgurClient({ clientId });

const uploadToImgur = async (req, res) => {
  try {
    const { originalname } = req.file;
    const resizedImage = join(PROJECT_PATH, 'resized', originalname);

    const response = await client.upload(resizedImage);

    fs.unlink(resizedImage, (err) => {
      if (err) console.log(err);
      console.log('Resized file deleted');
    });

    return res.json({
      link: response.data.link,
      message: 'Successfully resized and uploaded the image!',
    });
  } catch (err) {
    console.log('error', err);
    return res.status(400).json(err);
  }
};

module.exports = { uploadToImgur };
