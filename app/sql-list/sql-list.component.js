'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('sqlList').
  component('sqlList', {
    templateUrl: 'sql-list/sql-list.template.html',
    controller: function SqlListController($http) {
      var self = this;
      self.order = 'name';

      $http.get('items/items.json').then(function(response) {
        self.items = response.data;
      });
    }
  });
