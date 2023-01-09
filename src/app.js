const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const weather = require('./utils/weather');

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
    if (!req.query.address){
        return res.send({
            error: "You must provide an address"
        })
    }

    weather.callWeather(req.query.address, (error, forecastData) => {
        if(error){
            return res.send({
                error
            })
        }
        res.send({
            forcast: forecastData,
            location: req.query.address,
        })
    })
});

app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: "You must provide a search term"
        })
    }
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