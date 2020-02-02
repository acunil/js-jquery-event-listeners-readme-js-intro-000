//define functions here
function getIt() {
  $("p").on("click", () => alert("Hey!"));
}

function frameIt() {
  $("img").on("load", () => $("img").addClass('tasty'));
}

function pressIt() {
  $("input").on("keydown", (key) => {
    if (key.key === "g"){
      alert("G was pressed");
    }
  });
}

function submitIt() {
  
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
});
