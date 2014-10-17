define(['angular', '../module'], function(angular){
    angular
	.module('base')
	.controller('logincontroller', function(){
        this.message = 'This is login controller';
    })
});