(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);


MyInfoService.$inject = ['$http', 'ApiPath'];
function MyInfoService($http, ApiPath) {
  var service = this;
  var myInfo = {};

  service.setUserInformation = function (user) {
    myInfo = user;
  };

  service.getUserInformation = function () {
    if (Object.entries(myInfo).length === 0){
      return false;
    }else{
      return myInfo;
    }
  };

  service.getFavouriteItem = function (short_name) {
    return $http.get(ApiPath + '/menu_items/'+short_name+'.json').then(function (response) {
        return response.data;
      });
  };

}



})();
