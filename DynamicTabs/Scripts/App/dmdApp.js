var tabsApp = angular.module('tabsApp', ['ui.bootstrap']);
tabsApp.service('projTabsService', function () {
    //tablist = [{id:0, title:"Dashboard", content:"<dashboard></dashboard>", contentType:"html", active: true}];
    tablist = [];
    return {
        tablist:function () {
            return tablist;
        },
        addTab:function (tabTitle, tabContent, tabContentType) {
            var currentIndex = tablist.length ;
            if(!tabContentType){
              tabContentType= 'html';
            }
            tablist.push({
                id:currentIndex, title:tabTitle, content:(tabContent), contentType:tabContentType, active: true
            });
        },
        deleteTab:function (id) {
          var oldTabs = tablist;
          tablist = [];
          angular.forEach(oldTabs, function (tab) {
            if (tab.id !== id) tablist.push(tab);
          });
        }
    };

});


tabsApp.service('getData', function () {
    url= null;
    return {
        getData:function (url, params) {
			return "/partials";
        }
    };
});

