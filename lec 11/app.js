(function (){
  'use strict';

angular.module('MsgApp',[])
.controller('MsgController',MsgController);

MsgController.$inject=['$scope'];

function MsgController($scope){
  $scope.name="Bahadur";
  $scope.stateofBeing="hungry";

  $scope.sayMessage=function () {
    return "Bahadur likes food!";
  }
}


})();
