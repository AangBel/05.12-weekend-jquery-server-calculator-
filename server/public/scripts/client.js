// const calcHx = require("./server/modules/calcHx.js");

$(document).ready(onReady);

let operators = "";

let inputA = 0;

let inputB = 0;

function onReady() {
  console.log("jquery is loaded");
  $(".operators").on("click", saveOperators);
  $("#add").on("click", addFunc);
  $("#subtract").on("click", subFunc);
  $("#multiply").on("click", multiFunc);
  $("#divide").on("click", divFunc);
  $("#enter").on("click", submitFunc);
  $("#clear").on("click", clearFunc);
} //end of onReady

function post2Server(event) {
  console.log("post2SERVER is ready");
  event.preventDefault();
  inputA = $("#inputA").val();
  console.log($("#inputA").val());
  inputB = $("#inputB").val();
  console.log($("#inputB").val());
  //i want this to console.log inputA, operators, inputB
  console.log(inputA, operators, inputB);

  $.ajax({
    method: "POST",
    url: "/calculator",
    data: {
      inputOne: inputA,
      inputTwo: inputB,
      operators: operators,
    }, //end of data
  })
    .then(function (response) {
      console.log("nice, working so far!");
      console.log(response);
      getFromServer();
    })
    .catch(function (error) {
      //why is this not working?
      //
      alert("ah shit catch-ed this thing wrong");
      console.log("Request failed", error);
    });
} //end of post2Server

//missing something in the middle i think

function getFromServer() {
  $.ajax({
    method: "GET",
    url: "/calculator",
  })
    .then(function (response) {
      console.log(response);
      console.log("omg! get from server is working?!");
      renderToDom(response);
    })
    .catch(function (error) {
      alert("request failed!, try again...");
      console.log("request for GET failed!", error);
    });
  calculator();
} //end of get from server

// + Number(operators)+ potato.inputB

// function getFromCalc() {
//   console.log("getFromCalc is working");
//   $.ajax({
//     method: "GET",
//     url: "/calculator",
//     data: {
//       inputOne: inputA,
//       inputTwo: inputB,
//       operators: operators,
//     }, //end of data
//   })
//     .then(function (response) {
//       console.log(response);
//       console.log("omg! get from server is working?!");
//       renderToDom(response);
//     })
//     .catch(function (error) {
//       alert("request failed!, try again...");
//       console.log("request for GET failed!", error);
//     });
//   calculator();
// }

//end of get from calc

//post to server
//is this the part that is posting the data that we got?
function renderToDom(calcHx) {
  console.log("Got Data!");
  let potato = calcHx;
  console.log(potato);
  let total = calcHx[calcHx.length-1].saveMemory;
  
$('#answer').text(total)


  // let total = $(inputA) + potato + $(inputB);
  // console.log("total", total);
  // for (let i of calcHx{length-1});

  $("#calcHx").append(`
        <li>${total}</li>
    `);
} //end of render to DOM
//FUNCTIONS for the items above

function saveOperators() {
  operators = $(this).attr("val");
} ///end of save

function addFunc(event) {
  event.preventDefault();
  console.log("addFunc is working");
  operators = "+";
  console.log(operators);
  inputA + inputB;
}

function subFunc(event) {
  event.preventDefault();
  console.log("subFunc is working");
  operators = "-";
  console.log(operators);
  inputA - inputB;
}

function multiFunc(event) {
  event.preventDefault();
  console.log("multiFunc is working");
  operators = "*";
  console.log(operators);
  inputA * inputB;
}

function divFunc(event) {
  event.preventDefault();
  operators = "/";
  console.log(operators);
  console.log("divFunc is working");
  inputA / inputB;
}

function submitFunc(event) {
  event.preventDefault();
  console.log("submitFunc is working");
  post2Server();
}

function clearFunc(event) {
  event.preventDefault();
  console.log("clearFunc is working");
}

//i want this to be my response
function post2Server(response) {
  console.log("response is ready");
  event.preventDefault();
  inputA = $("#inputA").val();
  inputB = $("#inputB").val();
  console.log(inputA, operators, inputB);
  $("#inputA").val("");
  $("#inputB").val("");

  $.ajax({
    method: "POST",
    url: "/calculator",
    data: {
      inputOne: inputA,
      inputTwo: inputB,
      operators: operators,
    }, //end of data
  })
    .then(function (response) {
      console.log("nice, working so far!");
      console.log(response);
      getFromServer();
    })
    .catch(function (error) {
      alert("ah shit catch-ed this thing wrong");
      console.log("Request failed", error);
    });
  // renderToDom();
} //end of post2Server


function calculator(inputA, operators, inputB) {

  console.log(inputA, operators, inputB);
  console.log("calculator is working");

  switch (operators) {
    case "+":
      return Number(inputA) + Number(inputB);
      break;

    case "-":
      return  inputA - inputB;
      break;

    case "*":
      return inputA * inputB;
      break;

    case "/":
      return inputA / inputB;
      break;
  }
}
// //
//  $('#inputA).val("");
//   "#inputB".val("");
//EVENT HANDLER

//DEFAULT EVENT PREVENT

//let _ = input...

//ajax(post/then/catch/get)

//clear inputs.val('')

//GET history of equations

//render (); &

//jquery for html <ul><li>$()
