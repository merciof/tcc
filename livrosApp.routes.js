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
    }).when('/cadastro', {
      name: 'cadastro',
      template: '<cadastro-usuario></cadastro-usuario>'
    })
    .otherwise('/login')
  }]);