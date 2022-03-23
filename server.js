/*step 1*/
'use strict';
/*step 2 console log for proof of life*/
console.log(' Our first server')
//REQUIRE
// In our servers, we have to use require' instead of import. Here we will list the requirements for server
/*step 3*/
const express = require('express');
/*step 5*/
require ('dotenv').config();


//USE
// Once we have required something, we have to use it. This is where we assigne the required field a variable.React does this in one step with 'import." express takes 2 steps: 'require" and 'use.'
/*step 4*/
const app = express();

//PORT
/*step 6*/
const PORT = process.env.PORT || 3002;

//ROUTES
//We will write our endpoints here
/*step 8 
params 1. Route '/' 2. call back function () 2.1 call back function takes two params 'request' 'response' 2.2 { response value}
*/
app.get('/',(request, response)=>{
  response.send('hello from our server'); 
})

// ERRORS
//handle errors

// LISTEN
// start the server 2:15
/*step 7*/
app.listen(PORT, () => console.log(`listening on port ${PORT}`));