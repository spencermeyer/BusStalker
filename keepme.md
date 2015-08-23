<div ng-app="myApp" ng-controller="busCtrl">
  <ul>
    <li ng-repeat="x in names">
      {{ x.vehicleId + ', ' + names.stationName }}
    </li>
  </ul>


original homepage as created by npm init:
"homepage": "https://github.com/spencermeyer/API_Example_TFL"


//  This section gets the data from TFL's JSON feed
var app = angular.module('myApp', []);
app.controller('busCtrl', function($scope, $http) {
  $http.get("https://api.tfl.gov.uk/line/25/arrivals")
  .success(function (response) {$scope.names = response.records;
  });
})

 
