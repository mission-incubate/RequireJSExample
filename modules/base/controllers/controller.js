define(['angular', '../module'], function(angular){
    angular
	.module('base')
	.controller('basecontroller', function(){
        this.message = 'This is base controller';
    })
	.controller('logincontroller', function(){
        this.message = 'This is login controller';
    })
});