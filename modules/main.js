require.config({
packages: [
    'modules/base',
  ],
paths:{
	'angularAMD': '../components/requirejs/angularAMD',
    'angular'    :'../components/angular/angular',
    'ui.router' : '../components/angularuirouter/angular-ui-router'
},
shim:{
     'angular': {
         exports:'angular'
     },
	'angularAMD': ['angular'],
	'ui.router' : ['angular']
},
waitSeconds: 15,
 deps:[]
});
require(['angular', 'maincontroller','base/main'], function(angular){
	angular.element( document ).ready( function() {
		angular.bootstrap( document, [ 'myApp' ] );
	});
})