(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MyInfoService'];
function SignUpController(MyInfoService) {
  var $ctrl = this;

  $ctrl.submitForm = function () {
  	$ctrl.completed = false;
  	$ctrl.error = false;
  	MyInfoService.getFavouriteItem($ctrl.user.short_name).then(function (response){
		$ctrl.completed = true;
		$ctrl.user.favourite = response;
		MyInfoService.setUserInformation($ctrl.user);
    },function (error) {
        $ctrl.error = true;
    });
  };

}


})();
