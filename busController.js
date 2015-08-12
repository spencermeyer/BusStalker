

var app = angular.module('myApp', []);
app.controller('busCtrl', function($scope, $http) {
  $http.get("https://api.tfl.gov.uk/line/25/arrivals")
  .success(function (response) {$scope.names = response.records;
    console.log("and this is the success function callback");
    document.getElementById("station").innerHTML=response[1].stationName;
    // console.log(response[1].stationName)});
    console.log(response)});
});




