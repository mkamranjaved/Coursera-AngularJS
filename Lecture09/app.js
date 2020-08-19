(function(){
  'use strict';

  angular.module('DIApp', [])
  .controller('DIController', DIController);

  function DIController ($scope, $filter, $injector) {
  $scope.name = "Kamran";

  $scope.upper = function(){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  console.log(DIController.toString());
  console.log($injector.annotate(DIController));
  }

})();
