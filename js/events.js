//define functions here
function getIt() {
  $("p").on("click", () => alert("Hey!"));
}

function frameIt() {
  $("img").on("load"), () => image.addClass('tasty')
}


$(document).ready(function(){

// call functions here
getIt();
frameIt();

});
