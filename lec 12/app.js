(function (){
  'use strict';

angular.module('MsgApp',[])
.controller('MsgController',MsgController);
.filter('loves',LovesFilter);
MsgController.$inject=['$scope','lovesFilter'];
function MsgController($scope,lovesFilter){
  $scope.name="Bahadur";
  $scope.stateofBeing="hungry";
  $scope.cookieCost =.45;

  $scope.sayLovesMessage=function(){
    var msg="Bahadur loves food!";
    msg =lovesFilter(msg);
    return msg;
  };

  $scope.feedBahadur=function(){
    $scope.stateofBeing="fed";
  };
}

function LovesFilter(){
  return function (input){
    input=input || "";
    input =input.replace("likes","loves");
    return input;
  }
}
})
