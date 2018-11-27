angular.module('livrosApp',['headerHome', 
'footerHome',
'cardLivro',
'jumbotronHome',
'ngRoute'])
.config(['$routeProvider', function config($routeProvider) {
    $routeProvider
    .when('/', {
      template: '<header-home></header-home>' + '<footer-home></footerHome>'
    })
    .when('/home', {
      template: '<card-livro></card-livro>'
    }).otherwise('/')
  }]);