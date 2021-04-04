const express = require('express');
const cors = require('cors');
const indexRouter = require('./routes/index');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', indexRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on PORT ${PORT}`);
});
