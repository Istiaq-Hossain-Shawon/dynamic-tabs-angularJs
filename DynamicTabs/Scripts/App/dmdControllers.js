
tabsApp.controller('DMDTabsCtrl', ['$scope', 'projTabsService', function ($scope, projTabsService) {
      $scope.getTabs = function () {
          return projTabsService.tablist();
      };

      $scope.addTab = function (tabTitle, tabContent) {
          if(tabTitle !== '') {
              projTabsService.addTab(tabTitle, tabContent);
          }
      };

      $scope.deleteTab = function (id) {
          projTabsService.deleteTab(id);
      };

      $scope.resetForm = function() {
          $scope.tabTitle = '';
      };
      projTabsService.addTab("Test", "<test></test>", "html");
}]);


