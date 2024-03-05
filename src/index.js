const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(port, function () {
    console.log(`App listening on port ${port}`);
});