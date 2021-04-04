const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use('/', (req, res) => {
    res.json('Hello');
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
