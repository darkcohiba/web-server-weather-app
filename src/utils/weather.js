const request = require('postman-request');
//https://weatherstack.com/dashboard weather docs
const apiKeyWeather = 'db56fd11ee89595a2da699cbbda005b4';


function callWeather(city, callback){
    const weatherUrl = `http://api.weatherstack.com/current?units=f&access_key=${apiKeyWeather}&query=${city}`;
    request({ url: weatherUrl, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        }else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.');
        }
        });
}

module.exports = {
    callWeather
}
    