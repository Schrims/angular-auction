'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('itemList').
  component('itemList', {
    templateUrl: 'item-list/item-list.template.html',
    controller: function ItemListController($http) {
      var self = this;
      self.order = 'name';

      $http.get('items/items.json').then(function(response) {
        self.items = response.data;
      });
    }
  });
