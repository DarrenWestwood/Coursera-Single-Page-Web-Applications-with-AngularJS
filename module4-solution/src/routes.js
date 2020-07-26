(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // If no URL matches, redirect to home
  $urlRouterProvider.otherwise('/');

  // Setup states
  $stateProvider
  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })
  // Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      categories: ['MenuAppService', function (MenuAppService) {
        return MenuAppService.getAllCategories();
      }]
    }
  })
  // Items page
  .state('items', {
    url: '/items/{categoryId}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: "ItemsController as items",
    resolve: {
      items: ['$stateParams', 'MenuAppService', function ($stateParams, MenuAppService) {
        return MenuAppService.getItemsForCategory($stateParams.categoryId);
      }]
    }
  });

}

})();
