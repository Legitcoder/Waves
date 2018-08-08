const express = require('express');
const path = require('path');
const app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend/dist')));

app.get('/yo', (req, res, next) => {
    res.send({first: "kj" });
});

app.listen(8080, console.log(
    "Listening on port 8080"
));
