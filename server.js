/*step 1*/
'use strict';
/*step 5*/
require('dotenv').config();
/*step 3*/
const express = require('express');
/*step 6*/
const cors = require('cors');

/*step 2 console log for proof of life*/
console.log(' Our first server')
//REQUIRE
// In our servers, we have to use require' instead of import. Here we will list the requirements for server
/*step 5b*/
// const res = require('express/lib/response');
/*step 10*/
let data = require('./data/weather.json');

//USE
// Once we have required something, we have to use it. This is where we assigne the required field a variable.React does this in one step with 'import." express takes 2 steps: 'require" and 'use.'
/*step 4*/
const app = express();
app.use(cors());

//PORT
/*step 6*/
const PORT = process.env.PORT || 3002;

//ROUTES
//We will write our endpoints here
/*step 8 
params 1. Route '/' 2. call back function () 2.1 call back function takes two params 'request' 'response' 2.2 { response value} 
*/
app.get('/', (request, response) => {
  response.send('hello from our server');
});


/*step 11 data  */

app.get('/weather', (req, res) => {
  try{
  let queryCity = req.query.city_name;
  console.log(queryCity);
  let weatherObject = data.find(city => city.city_name.toLowerCase() === queryCity.toLowerCase());
  let foundCity = new Location(weatherObject);
  // let foundCityFor = new Forecast(weatherObject);
  res.send(foundCity);
  }catch(error){
    next(error);
  }
});

//lecture 2:49

/*step 9 star route - error handling page*/
app.get('*', (request, response) => {
  response.send('uh oh something went wrong');
});
// ERRORS
//handle errors
app.use((error,request,response,next)=>{
  response.status(500).send(error.message);
})

//CLASSES
class Location {
  constructor(weatherObject){
    this.name = weatherObject.city_name;
    this.lat = weatherObject.lat;
    this.lon = weatherObject.lon;
    this.forecast = weatherObject.data[0].weather.description;
  }
}
// class Forecast {
//   constructor(weatherObject){
//     this.forecast = weatherObject.data[0].weather.description;
//     this.date = weatherObject.data[0].datetime;
//   }
// }

// LISTEN
// start the server 2:15
/*step 7*/
app.listen(PORT, () => console.log(`listening on port ${PORT}`));