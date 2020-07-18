(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function foundItemsDirective() {
  var ddo = {
    templateUrl: 'templates/foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    }
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowItDown = this;

  // get matched menu items from menu search service
  narrowItDown.searchItems = function () {
    narrowItDown.loader = true;
    narrowItDown.error = false;
    narrowItDown.found = [];
    if (narrowItDown.searchTerm) {
      MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm)
      .then(function (items) {
        narrowItDown.loader = false;
        if (items.length > 0) {
          narrowItDown.found = items;
        }else{
          narrowItDown.error = true;
        }
      });
    }else{
      narrowItDown.loader = false;
      narrowItDown.error = true;
    }
  };

  narrowItDown.removeItem = function (itemIndex) {
    narrowItDown.found.splice(itemIndex, 1);
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function (result) {
        // process result and only keep items that match
        var foundItems = result.data.menu_items;
        var matchedItems = [];
        for (var i = 0; i < foundItems.length; i++) {
          if (foundItems[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
            matchedItems.push(foundItems[i]);
          }
        }
        // return processed items
        return matchedItems;
      }, function (error) {
        // return errors with $http request
        console.log("$http error fetching menu_items.json")
      });
  };

}

})();
