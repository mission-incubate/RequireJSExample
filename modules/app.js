define(['angularAMD', 'angular','ui.router'], function(angularAMD){
    var app =  angular.module('myApp', ['ui.router'])
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
		$urlRouterProvider.otherwise('/');

		$stateProvider
		    .state("/", {
			 url: "/",
			 templateUrl: 'modules/base/views/index.htm'
			 // controller: 'LoginController'
		 })
    }]);
	return app;
});

