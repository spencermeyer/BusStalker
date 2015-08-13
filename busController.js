//  API Demo by Spencer M.

$( document ).ready(function() {
// First to pick up the desired bus from the user input
  busSelected = document.getElementById("usr").value;
  console.log("and the selected bus is " + busSelected);
  console.log( "ready!" );
  $( "#clickBus1" ).click(function() {
  console.log("Handler for busSelected.click() called." );
  });
});

// check the on click action


//  This section gets the data from TFL's JSON feed

var app = angular.module('myApp', []);
app.controller('busCtrl', function($scope, $http) {
  $http.get("https://api.tfl.gov.uk/line/25/arrivals")
  .success(function (response) {$scope.names = response.records;
    console.log("and this is the success function callback");

    for (i=0; i<response.length; i++) {
      $("#station").append('<div class="row"><div class="col-sm-3"><div class="form-group"><p>'+response[i].stationName+'</p></div></div><div class="col-sm-4"><div class="form-group"><p>'+response[i].vehicleId+'</p></div></div></div>');
    }


  console.log(response)});
});

