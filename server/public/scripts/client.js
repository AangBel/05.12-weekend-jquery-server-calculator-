$(document).ready(onReady);

function onReady() {
  console.log("jquery is loaded");
  $("#add").on("click", addFunc);
  $("#subtract").on("click", subFunc);
  $("#multiply").on("click", multiFunc);
  $("#divide").on("click", divFunc);
  $("#enter").on("submit", submitFunc);
  $("#clear").on("click", clearFunc);
} //end of onReady

function post2Server(event) {
  console.log("post2SERVER is ready");
  event.preventDefault();
  let inputA = $("#inputA").val();
  let inputB = $("#inputB").val();
  "#inputA".val("");
  "#inputB".val("");

  $.ajax({
    method: "POST",
    url: "/input",
    data: {
      inputOne: inputA,
      inputTwo: inputB,
    }, //end of data
  })
    .then(function (response) {
      console.log("nice, working so far!");
      getFromServer();
    })
    .catch(function (error) {
      alert("ah shit catch-ed this thing wrong");
      console.log("Request failed", error);
    });
} //end of post2Server

function getFromServer() {
  $.ajax({
    method: "GET",
    url: "/input",
  })
    .then(function (response) {
      console.log("omg! get from server is working?!");
    })
    .catch(function (error) {
      alert("request failed!, try again...");
      console.log("request for GET failed!", error);
    });
} //end of get from server

function renderToDom(gotData){
    console.log('Got DaTA!');
    $('#mathHistory').append(`
        <li>${gotData[gotData.length -1].inputA}</li>
    `)

    
}//end of render to DOM



//FUNCTIONS for the items above

function addFunc() {
  console.log("addFunc is working");
  inputA + inputB;
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

//EVENT HANDLER

//DEFAULT EVENT PREVENT

//let _ = input...

//ajax(post/then/catch/get)

//clear inputs.val('')

//GET history of equations

//render (); &

//jquery for html <ul><li>$()
