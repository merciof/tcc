angular.module('livrosApp')
.config(['$routeProvider', '$locationProvider', function config($routeProvider, $locationProvider) {
    $routeProvider
    
    .when('/login', {
      name: 'login',
      template: '<tela-login></tela-login>'
    })
    
    .when('/home', {
      name: 'home',
      template: '<header-home></header-home>' + '<main role="main"><jumbotron-home></jumbotron-home>' 
                + '<card-livro></card-livro></main>'  + '<footer-home></footer-home>' 
    })
    
    .when('/cadastro-usuario', {
      name: 'cadastro-usuario',
      template: '<cadastro-usuario></cadastro-usuario>'
    })
    
    .when('/cadastro-anuncio', {
      name: 'cadasro-anuncio',
      template: '<cadastro-anuncio></cadastro-anuncio>'
    })
    
    .otherwise('/login')
  }]);