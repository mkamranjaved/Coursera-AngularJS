(function(){
  'use strict';

  angular.module('lunchCheck', [])
  .controller('lunchCheckController', lunchCheckController);

    lunchCheckController.inject = ['$scope'];

    function lunchCheckController($scope){
    $scope.inputDishes = "";
    $scope.outputMsg = "";

    $scope.checkDishes = function(){
      $scope.outputMsg = countDishes($scope.inputDishes);
    };

    function countDishes(inputDishes){

      var arrayOfDishes = inputDishes.split(',');
      var totalDishes = 0; //arrayOfDishes.length;

      for (var i = 0; i < arrayOfDishes.length; i++){
        if (arrayOfDishes[i].trim().length != 0)
           totalDishes ++;
      }
      if (totalDishes === 0)
        return "Empty Dishes are not allowed. Please enter valid Dishes.";
      else {
      if (totalDishes <= 3)
        return "Enjoy the Lunch! ";
      else if (totalDishes > 3)
        return "Sorry, too much dishes. Dishes count should not exceed 3.";
      }
    };

  }
})();
