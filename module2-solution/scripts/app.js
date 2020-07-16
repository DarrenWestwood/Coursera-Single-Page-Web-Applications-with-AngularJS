(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var toBuy = this;
	toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

	toBuy.checkOffItem = function (itemIndex) {
		ShoppingListCheckOffService.checkOffItem(itemIndex);
	};
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var alreadyBought = this;

	alreadyBought.items = ShoppingListCheckOffService.getItemsAlreadyBought();
}

function ShoppingListCheckOffService() {
	var service = this;

	// List of items to buy
	var itemsToBuy = [{
			name: 'bread',
			quantity: 10
		},{
			name: 'milk',
			quantity: 20
		},{
			name: 'cheese',
			quantity: 5
		},{
			name: 'ice cream',
			quantity: 6
		},{
			name: 'cookies',
			quantity: 12
		}];
	// List of items to already bought
	var itemsAlreadyBought = [];

	service.checkOffItem = function (itemIndex) {
		service.addItemToAlreadyBought(itemIndex);
		service.removeItemFromToBuy(itemIndex);
	};

	service.addItemToAlreadyBought = function (itemIndex) {
		itemsAlreadyBought.push(itemsToBuy[itemIndex]);
	};

	service.removeItemFromToBuy = function (itemIndex) {
		itemsToBuy.splice(itemIndex, 1);
	};

	service.getItemsToBuy = function () {
		return itemsToBuy;
	};

	service.getItemsAlreadyBought = function () {
		return itemsAlreadyBought;
	};
}

})();