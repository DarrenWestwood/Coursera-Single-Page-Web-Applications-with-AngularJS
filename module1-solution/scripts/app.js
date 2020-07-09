(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	// Check if the textbox contains more than 3 comma seperated items
	$scope.checkTooMuch = function () {
		if ($scope.textbox) {
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