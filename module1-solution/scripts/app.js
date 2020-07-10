(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.checkTooMuch = function () {
		// Check if the textbox is empty
		if ($scope.textbox) {
			// Check if the number of items in the textbox is less than or equal to 3
			var length = $scope.textbox.split(",").length;
			if (length <= 3) {
				$scope.message = "Enjoy!";
			}else{
				$scope.message = "Too much!";
			}	
		}else{
			$scope.message = "Please enter data first";
		}
	};
}

})();