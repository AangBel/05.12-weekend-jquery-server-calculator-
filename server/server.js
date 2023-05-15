const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;

const calculator = require("./modules/calculator");


//is this written correctly?

const calcHx = [];
// const calculator = require("./modules/calculator.js");
console.log(calcHx);

app.use(bodyParser.urlencoded({ extended: true }));

// calculator(server/modules/calcHx.js)

// Serve up static files (HTML, CSS, Client JS)
//is this correct?
app.use(express.static("server/public"));
//IS THIS APP.GET CORRECT?
// app.get("./modules/calcHx.js", calcHx());




app.get("/calculator", function (req, res) {
  console.log("Request for /calculator was made");
// req( calcHx)
  // send back list of quotes to client
  res.send(calcHx);

  // If I want to send an error:
  // res.sendStatus(500);
});

// Post route
app.post("/calculator", function (req, res) {
  // req.body is the data that the client has sent in the request
  // req.body is a thing we get from bodyParser
  console.log("POST some data!", req.body);
  // (req.body);
  // calculator(req.body);
  let postData = req.body;  
  
  let total = calculator(postData.inputOne, postData.operators, postData.inputTwo);
  let saveMemory = `${postData.inputOne}  ${postData.operators} ${postData.inputTwo} = ${total}`
  console.log(saveMemory);
  
  console.log(total);
  calcHx.push({total, saveMemory
  }); 


  // Add my new quote to the quoteList
  

  // The server always needs to respond!
  // Status 201 = 'Created'
  res.sendStatus(201);
});

// function math-ing(){

function addFunc() {
  console.log("addFunc is working");
  console.log(addFunc);
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

// GET & POST Routes go here

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
