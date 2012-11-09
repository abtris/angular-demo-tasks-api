'use strict';

angularDemoTasksApiApp.controller('MainCtrl', function($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://private-b5e4-abtris.apiary.io/tasks/');

  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      alert('Status: '+this.status+'\nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'\nBody: '+this.responseText);
    }
  };
  xhr.send("");
});
