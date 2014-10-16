require.config({
paths:{
    'angular'    :'../components/angular/angular'
},
shim:{
    'angular': {
        exports:'angular'
    }
}
});

//Include all modules
require(['controllers/MainCtrl'])