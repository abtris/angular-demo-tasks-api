'use strict';

angularDemoTasksApiApp.controller('MainCtrl', function($scope, $http) {
  $scope.url = "http://private-b5e4-abtris.apiary.io";

  $scope.getAll = function () {
    $http.get($scope.url + '/tasks/').
      success(function(data) {
        $scope.tasks = data;
        $scope.statusHidden = false;
        $scope.taskHidden = true;
    });
  };

  $scope.getTask = function (id) {
    $http.get($scope.url + '/task/' + id).
      success(function(data) {
        $scope.status = data;
        $scope.statusHidden = true;
        $scope.taskHidden = false;
    });
  };

  $scope.updateTask = function (data, id) {
    $http.put($scope.url + '/task/' + id);
  };

  $scope.createTask = function (data) {
    $http.post($scope.url + '/task/', data).success(function () {});
  };

  $scope.deleteTask = function (id) {
    $http.delete($scope.url + '/task/' + id);
  };

});

