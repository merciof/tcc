angular.module('livrosApp',['headerHome', 
'footerHome',
'cardLivro',
'jumbotronHome',
'ngRoute'])
.config(['$routeProvider', function config($routeProvider) {
    $routeProvider
    .when('/', {
      template: ''
    })
    .when('/home', {
      template: '<header-home></header-home>' + '<main role="main"><jumbotron-home></jumbotron-home>' 
                + '<card-livro></card-livro></main>'  + '<footer-home></footer-home>'
    }).otherwise('/')
  }]);