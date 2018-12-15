(function (){
  'use strict';


angular.module('DIApp',[])
.controller('DIController',['$scope','$filter',  DIController);

function DIController($scope,$filter){
  $scope.name="Yaakov";

  $scope.upper=function (){
    var upCase=$filter('uppercase');
    $scope.name =upCase($scope.name);
  };
}
})();