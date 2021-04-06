/* eslint-disable no-console */
const { ImgurClient } = require('imgur');
const config = require('config');

const uploadToImgur = async () => {
  try {
    const { oauth: { clientId } } = config.get('imgur');

    const client = new ImgurClient({ clientId });
    const response = await client.upload('/home/swaraj/Projects/tiny-img-backend/test.png');
    console.log(response.data.link);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { uploadToImgur };
