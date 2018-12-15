(function () {
'use strict';

var shoppingList = [
  "Maths", "Physics", "Chemistry", "Biology", "English", "Sanskrit", "Hindi", "Marathi"
];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.shoppingList = shoppingList;
}

})();
