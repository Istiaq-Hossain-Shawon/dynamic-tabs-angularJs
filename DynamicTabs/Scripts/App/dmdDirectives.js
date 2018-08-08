tabsApp.directive('apptabs', function () {
        return {
            restrict:"E",
            scope:{
                tablist:'=',
                ondelete:'&'
            },
            templateUrl: "views/tabs-directive.html",
            controller:function ($scope, $attrs) {
                $scope.deleteTab = function (id) {
                	$scope.ondelete({id:id});
                }
            }
        };
    })


tabsApp.directive('dashboard', function () {
        return {
            restrict:"E",
            scope:{
                tablist:'=',
                ondelete:'&'
            },
            templateUrl: "views/dashboard-directive.html",
            link:function () {

            },
            controller:function ($scope, $attrs) {
                $scope.deleteTab = function (id) {
                $scope.ondelete({id:id});
                }
            }
        };
})

tabsApp.directive('test', function () {
    return {
        restrict: "E",
        scope: {
            tablist: '=',
            ondelete: '&'
        },
        templateUrl: "views/Test.html",
        link: function () {

        },
        controller: function ($scope, $attrs) {
            $scope.deleteTab = function (id) {
                $scope.ondelete({ id: id });
            }
        }
    };
})



tabsApp.directive('projectlist', ['projTabsService', function(projTabsService){
	return {
		restrict:"E",
		scope:{},
		templateUrl: "views/projectlist-directive.html",
		controller:function ($scope, $attrs) {
			$scope.openSite = function (id) {
				projTabsService.addTab("Site :" + id, "sites.html");
			}
			$scope.editProject = function (projName, projectId) {
			  var projectDetailsTpl = "<editproject projid=" + projectId + "></editproject>";
				projTabsService.addTab("Site :" + id, "sites.html");
			}
			$scope.viewProjectDetails = function (projName, projectId) {
        var projectDetailsTpl = "<projectDetails projid=" + projectId + "></projectDetails>";
				projTabsService.addTab(projName, projectDetailsTpl);
			}
		}
	};
}])
tabsApp.directive('siteslist', function () {
        return {
            restrict:"E",
            scope:{
                tablist:'=',
                ondelete:'&'
            },
            templateUrl: "views/siteslist-directive.html",
            controller:function ($scope, $attrs) {
                $scope.deleteTab = function (id) {
                $scope.ondelete({id:id});
                }
            }
        };
})

tabsApp.directive('compile', ['$compile', function ($compile) {
  return function(scope, element, attrs) {
      scope.$watch(
        function(scope) {
          return scope.$eval(attrs.compile);
        },
        function(value) {
          element.html(value);
          $compile(element.contents())(scope);
        }
    );
}}]);
