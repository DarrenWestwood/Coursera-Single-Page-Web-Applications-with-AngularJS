(function () {
'use strict';

angular.module('data')
.service('MenuAppService', MenuAppService);


MenuAppService.$inject = ['$http', 'ApiBasePath']
function MenuAppService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function () {
    return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      }).then(function (result) {
        return result.data;
      }, function (error) {
        console.log("$http error fetching categories.json")
      });
  };

  service.getItemsForCategory = function (categoryShortName) {
    return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      }).then(function (result) {
        return result.data;
      }, function (error) {
        console.log("$http error fetching menu_items.json")
      });
  };

}

})();
