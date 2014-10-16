require.config({
paths:{
    'angular'    :'../components/angular/angular',
	'ngRoute' : '../components/angular/angular-route',
    'angularAMD': '../components/requirejs/angularAMD',
},
shim:{
     'angular': {
         exports:'angular'
     },
	'angularAMD': ['angular'],
	'ngRoute' : ['angular']
},
 deps:[]
});
require(['maincontroller'])