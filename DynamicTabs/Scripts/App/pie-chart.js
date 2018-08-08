
tabsApp.controller('ProductsCtrl', ['$scope', 'projTabsService','$http', function ($scope, projTabsService,$http) {

    $scope.items = []

    $scope.getItems = function() {
        $http({ method: 'GET', url: '/api/products', headers: { 'X-Parse-Application-Id': 'XXXXXXXXXXXXX', 'X-Parse-REST-API-Key': 'YYYYYYYYYYYYY' } })
            .success(function(data, status) {
                $scope.items = data;
                console.log($scope.items);
            })
            .error(function(data, status) {
                alert("Error");
            })
    }

    
}]);