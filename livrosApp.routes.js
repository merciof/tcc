angular.module('livrosApp')
.config(['$routeProvider', function config($routeProvider) {
    $routeProvider
    .when('/login', {
      template: '<tela-login></tela-login>'
    })
    .when('/home', {
      template: '<header-home></header-home>' + '<main role="main"><jumbotron-home></jumbotron-home>' 
                + '<card-livro></card-livro></main>'  + '<footer-home></footer-home>'
    }).when('/cadastro', {
      template: '<cadastro-usuario></cadastro-usuario>'
    })
    .otherwise('/login')
  }]);