define(['angularAMD', 'ngRoute'], function(angularAMD){
    var app =  angular.module('myApp', ['ngRoute']);
	 angularAMD.bootstrap(app);
	return app;
});