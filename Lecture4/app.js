(function() {
'use strict';

angular.module('myFirstApp', [])

.controller('myFirstCotroller', function($scope){
  $scope.name = "Javed";
  $scope.sayHello = function(){
    return "Kamran";
  };
});

})();
