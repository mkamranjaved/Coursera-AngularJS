(function(){
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];

  function MsgController($scope){
    $scope.name = "Kamran";
    $scope.stateOfBeing = "hungry";

    $scope.sayMessage = function(){
      return "Kamran likes to eat healthy snacks at night!";
    };

    $scope.feedYaakov = function(){
      $scope.stateOfBeing = "fed";
    };
  }

})();
