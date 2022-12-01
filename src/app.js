const path = require('path');
const express = require('express');

const app = express();


console.log(path.join(__dirname, '../public'));
const directoryPath = path.join(__dirname, '../public');


app.use(express.static(directoryPath));

app.get("/weather", (req, res) => {
    res.send({"Weather Page": "Sunny","Temperature": "25"});
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
    }
);