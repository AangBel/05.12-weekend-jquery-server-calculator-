const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

let mathCalcs = [];
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


app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));



// GET & POST Routes go here


app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
});