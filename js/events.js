//define functions here
function getIt() {
  $("p").on("click", () => alert("Hey!"));
}

function frameIt() {
  $("img").on("load"), () => $("img").addClass('tasty');
  $("img").on("click", () => alert("Hey!"));
}


$(document).ready(function(){

// call functions here
getIt();
frameIt();

});
