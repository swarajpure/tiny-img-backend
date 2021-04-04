const express = require('express');
const indexRouter = require('./routes/index');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use('/', indexRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on PORT ${PORT}`);
});
