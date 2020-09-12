(function () {
  'use strict';

  angular.module('ShoppingListApp', [])
  .controller('ShoppingListController', ShoppingListController)
  .provider('ShoppingListService', ShoppingListServiceProvider)
  .config(Config);

  Config.$inspect = ['ShoppingListServiceProvider'];
  function Config (ShoppingListServiceProvider) {
    ShoppingListServiceProvider.defaults.maxItems = 2;
  }

  // LIST #1 - controller
  ShoppingListController.$inject = ['ShoppingListService'];
  function ShoppingListController(ShoppingListService) {
    var list = this;

    // Use factory to create new shopping list service
    var shoppingList = ShoppingListService;

    list.items = shoppingList.getItems();

    list.itemName = "";
    list.itemQuantity = "";

    list.addItem = function () {
      try {
        shoppingList.addItem(list.itemName, list.itemQuantity);
      } catch (error) {
        list.errorMessage = error.message;
      }
    };

    list.removeItem = function (itemIndex) {
      shoppingList.removeItem(itemIndex);
    };
  }

// If not specified, maximum items assumed unlimited
  function ShoppingListService (maxItems) {
    //Just to declare this
    var service = this;

    //List of shopping items
    var items = [];

    service.addItem = function (itemName, itemQuantity) {
      if ((maxItems === undefined) ||
          (maxItems !== undefined) && (items.length < maxItems)) {
        var item = {
          name: itemName,
          quantity: itemQuantity
        };
      items.push(item);
      }
      else {
        throw new Error("Max items (" + maxItems + ") reached.");
      }
    };

    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    };

    service.getItems = function () {
      return items;
    };
  }

  function ShoppingListServiceProvider() {
    var provider = this;

    provider.defaults = {
      maxItems: 5
    };

    provider.$get = function () {
      var shoppingList = new ShoppingListService(provider.defaults.maxItems);
      return shoppingList;
    };

  }

})();
