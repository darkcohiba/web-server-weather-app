const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();


// view paths
const directoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

// view set up
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

// setup static path for delivery
app.use(express.static(directoryPath));



app.get('/', (req, res) => {
    res.render('index',{
        title: 'Weather',
        name: 'Sam Waters'
    });
});

app.get("/about", (req, res) => {
    res.render('about',{
        title: 'About Me',
        name: 'Sam Waters'
    } )
}) 

app.get("/help", (req, res) => {
    res.render('help',{
        title: 'Help',
        name: 'Sam Waters',
        message: 'This is a help message',
        } )
})

app.get("/weather", (req, res) => {
    res.send({"Weather Page": "Sunny","Temperature": "25"});
});

app.get('/products', (req, res) => {
    res.send({
        Products:[]
    });
})

app.get("/help/*", (req, res) => {
    res.render("404", {
        error: "Help article not found",
        name: 'Sam Waters'
    });
});


app.get("*", (req, res) => {
    res.render("404", {
        error: "Page not found",
        name: 'Sam Waters'
    });
});



app.listen(3000, () => {
    console.log('Listening on port 3000');
    }
);