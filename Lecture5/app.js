(function(){
//Enable to protect us to making mistakes.
'use strict';

  angular.module('myFirstApp', [])
  .controller('myFirstController', function($scope) {
    $scope.name = "Kamran";
    $scope.sayHello = function() {
      return " Hello Coursera";
    };
  });

})();
