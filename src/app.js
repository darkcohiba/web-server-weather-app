const path = require('path');
const express = require('express');

const app = express();


console.log(path.join(__dirname, '../public'));
const directoryPath = path.join(__dirname, '../public');


app.set('view engine', 'hbs');
app.use(express.static(directoryPath));

app.get('/', (req, res) => {
    res.render('index',{
        title: 'Weather',
        name: 'Andrew Mead'
    });
});

app.get("/about", (req, res) => {
    res.render('about',{
        title: 'About Me',
        name: 'Andrew Mead'
    } )
}) 

app.get("/help", (req, res) => {
    res.render('help',{
        title: 'Help',
        message: 'This is a help message',
        
        } )
})

app.get("/weather", (req, res) => {
    res.send({"Weather Page": "Sunny","Temperature": "25"});
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
    }
);