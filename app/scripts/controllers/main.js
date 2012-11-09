'use strict';

angularDemoTasksApiApp.controller('MainCtrl', function($scope, $http) {

  $scope.status = "";
  $http.get('http://private-b5e4-abtris.apiary.io/tasks/').success(function(data) {
    $scope.status = data;
  });


});
