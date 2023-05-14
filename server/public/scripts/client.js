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
$.ajax({
    method:'POST',
    url:'/input',
    data: {
        inputOne: inputA,
        inputTwo: inputB
    }//end of data
    }).then (function(response){
        console.log('nice, working so far!');


    }
    
    )//end of response
    //end of ajax

}//end of post2Server



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
