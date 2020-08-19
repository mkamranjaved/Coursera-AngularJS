//1
// (function(){
//   'use strict';
//
//   angular.module('DIApp', [])
//   .controller('DIController', ['$scope', '$filter', DIController]);
//
//   function DIController ($scope, $filter) {
//   $scope.name = "Kamran";
//
//   $scope.upper = function(){
//     var upCase = $filter('uppercase');
//     $scope.name = upCase($scope.name);
//   };
//
//   }
// })();

//minified by using https://javascript-minifier.com/
//!function(){"use strict";angular.module("DIApp",[]).controller("DIController",["$scope","$filter",function(n,e){n.name="Kamran",n.upper=function(){var r=e("uppercase");n.name=r(n.name)}}])}();

//2
// (function(){
//   'use strict';
//
//   angular.module('DIApp', [])
//   .controller('DIController', ['$scope', '$filter', function ($scope, $filter){
//                                                      $scope.name = "Kamran";
//
//                                                      $scope.upper = function(){
//                                                      var upCase = $filter('uppercase');
//                                                      $scope.name = upCase($scope.name);
//                                                      };
//}]);
//
// })();

//3
// (function(){
//   'use strict';
//
//   angular.module('DIApp', [])
//   .controller('DIController', DIController);
//
//   DIController.$inject = ['$scope', '$filter'];
//   function DIController ($scope, $filter) {
//   $scope.name = "Kamran";
//
//   $scope.upper = function(){
//     var upCase = $filter('uppercase');
//     $scope.name = upCase($scope.name);
//   };
//
//   }
// })();

//minified by using https://javascript-minifier.com/
!function(){"use strict";function n(n,e){n.name="Kamran",n.upper=function(){var r=e("uppercase");n.name=r(n.name)}}angular.module("DIApp",[]).controller("DIController",n),n.$inject=["$scope","$filter"]}();
