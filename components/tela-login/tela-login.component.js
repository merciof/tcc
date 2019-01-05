angular.module('telaLogin').component('telaLogin',{
    templateUrl: 'components/tela-login/tela-login.template.html',
    controller: function TelaLoginController($scope, $location) {
         
         $scope.goHome = function goHome() {
             
            $location.path('/home'); 
            
        } 
    }
});