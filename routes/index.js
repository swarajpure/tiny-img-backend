const express = require('express');

const app = express();

app.use('/upload', require('./upload'));

module.exports = app;
