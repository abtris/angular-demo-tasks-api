'use strict';

angularDemoTasksApiApp.controller('MainCtrl', function($scope, $http) {

  $scope.getAll = function () {
    $http.get('http://private-b5e4-abtris.apiary.io/tasks/').
      success(function(data) {
        $scope.tasks = data;
        $scope.statusHidden = false;
        $scope.taskHidden = true;
    });
  };

  $scope.getTask = function (id) {
    $http.get('http://private-b5e4-abtris.apiary.io/task/' + id).
      success(function(data) {
        $scope.status = data;
        $scope.statusHidden = true;
        $scope.taskHidden = false;
    });
  };

});

