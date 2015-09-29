angular.module('oldmenTest', 
    [
        'oldmenTest.controllers', 
        'ui.bootstrap', 
        'ui.select', 
        'ngSanitize', 
        'ui.router'
    ]
)

.config(function(uiSelectConfig, $stateProvider, $urlRouterProvider) {
  
    uiSelectConfig.theme = 'bootstrap';
    uiSelectConfig.resetSearchInput = true;
    uiSelectConfig.appendToBody = false;

    $urlRouterProvider
    .otherwise('/');

    $stateProvider

    .state('home', {
        url: '/'
    })
    .state('regionState',{
        url: '/{regionName}'
    })
    .state('regionState.countryState',{
        url: '/{countryName}'
    })
    ;


});
