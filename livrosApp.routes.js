angular.module('livrosApp')
.config(['$routeProvider', '$locationProvider', function config($routeProvider, $locationProvider) {
    $routeProvider
    
    .when('/login', {
      name: 'login',
      template: '<tela-login></tela-login>'
    })
    
    // .when('/home', {
    //   name: 'home',
    //   template: '<h1>Home Template</h1>' 
    // })
    
    .when('/cadastro-usuario', {
      name: 'cadastro-usuario',
      template: '<cadastro-usuario></cadastro-usuario>'
    })
    
    .when('/anuncio', {
      name: 'anuncio',
      template: '<cadastro-anuncio></cadastro-anuncio>'
    })
    
    .otherwise('/login')
  }]);