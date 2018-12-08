(function () {
'use strict';
angular.module('myFirstApp',[])
.controller('MyFirstController',function($scope){
  $scope.name="Bahadur";
  $scope.sayHello=function(){
    return "Hello Coursera!";
  };
});

})();
