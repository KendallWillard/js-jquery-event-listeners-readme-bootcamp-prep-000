//define functions here

function getIt() {
  $("p").on("click", function() {
    window.alert("Hey!");
  });
}

function frameIt() {
  $("img").on("laod", function() {
    $("img").addClass("tasty");
  });
}


$(document).ready(function(){

// call functions here
getIt()
frameIt()

});
