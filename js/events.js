//define functions here
function getIt() {
  $("p").on("click", () => alert("Hey!"));
}

function frameIt() {
  $("img").on("load"), (image) => image.class = "tasty";
}


$(document).ready(function(){

// call functions here
getIt();
frameIt();

});
