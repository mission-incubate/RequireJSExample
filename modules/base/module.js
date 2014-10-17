define(['angular', 'ui.router'], function(angular){
// Warning: index.html ng-app value should be same as MODULE_NAME
//var MODUEL_NAME = 'base';
// Make sure to include the `ui.router` module as a dependency
var BaseModule = angular.module('base', ['ui.router'])
.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {

        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }])
	.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider
        //.when('/c?id', '/contacts/:id')
        //.when('/user/:id', '/contacts/:id')
        .otherwise('/login');
		  
		$stateProvider
		    .state("login", {
			 url: "/login",
			 templateUrl: 'modules/base/views/login/login.htm'
			 // controller: 'LoginController'
		 })
		    .state("home", {
			  abstract: true,
			  url: "/home",
			  templateUrl: 'Html/home/home.htm'
		  })
    }]);
	return BaseModule;
});
