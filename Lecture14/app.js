(function () {
  'use strict';

  angular.module('CounterApp', [])
  .controller('CounterController', CounterController);

  CounterController.$inject = ['$scope'];
  function CounterController($scope){
    $scope.onceCounter = 0;
    $scope.counter = 0;
    $scope.name = "Kamran";

    $scope.showNumberOfWatchers = function () {
      console.log("# of Watchers:", $scope.$$watchersCount);
    };

    $scope.countOnce = function () {
      $scope.onceCounter = 1;
    };

    $scope.upCounter = function () {
      $scope.counter++;
    };

    //Part 2 Not recommended
    // $scope.$watch('onceCounter', function (newValue, oldValue){
    //   console.log("onceCounter old value: ", oldValue);
    //   console.log("onceCounter new calue: ", newValue);
    // });
    //
    // $scope.$watch('counter', function (newValue, oldValue){
    //   console.log("Counter old value: ", oldValue);
    //   console.log("Counter new calue: ", newValue);
    // });

    //Part 3
    $scope.$watch(function (){
      console.log("Digest Loop Fired!");
    });

  }

})();
