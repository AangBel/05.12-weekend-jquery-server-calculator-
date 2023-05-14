const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
let mathCalcs = [];

app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));


app.get('/mathCalcs', function(req, res) {
    console.log('Request for /mathCalcs was made');
  
    // send back list of quotes to client
    res.send(mathCalcs);
    
    // If I want to send an error: 
    // res.sendStatus(500);
  });
  
  // Post route
  app.post('/mathCalcs', function(req, res) {
    // req.body is the data that the client has sent in the request
    // req.body is a thing we get from bodyParser
    console.log('POST some data!', req.body);
  
    // Add my new quote to the quoteList
    mathCalcs.push(req.body);
  
  
    // The server always needs to respond!
    // Status 201 = 'Created'
    res.sendStatus(201);
  
  })



function mathing(){

function addFunc() {
    console.log("addFunc is working");
    inputA + inputB;
    // return (inputA + inputB = )
  }
  
  function subFunc() {
    console.log("subFunc is working");
    inputA - inputB;
  }
  
  function multiFunc() {
    console.log("multiFunc is working");
    inputA * inputB;
  }
  
  function divFunc() {
    console.log("divFunc is working");
    inputA / inputB;
  }
  
  function submitFunc() {
    console.log("submitFunc is working");
  }
  
  function clearFunc() {
    console.log("clearFunc is working");
  }

  }






// GET & POST Routes go here


app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
});