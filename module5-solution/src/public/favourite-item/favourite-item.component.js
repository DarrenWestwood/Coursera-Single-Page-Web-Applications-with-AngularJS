(function () {
"use strict";

angular.module('public')
.component('favouriteItem', {
  templateUrl: 'src/public/favourite-item/favourite-item.html',
  bindings: {
    menuItem: '<'
  },
  controller: MenuItemController
});


MenuItemController.$inject = ['ApiPath'];
function MenuItemController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
