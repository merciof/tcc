angular.module('livrosApp',['headerHome', 'ngRoute']).config(['$routeProvider', function config($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'components/header-home/header-home.template.html'
    })
    .when('/home', {
      template: '<card-livro></card-livro>'
    }).otherwise('/')
  }]);