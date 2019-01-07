angular.module('cadastroUsuario').component('cadastroUsuario', {
    templateUrl: 'components/cadastro-usuario/cadastro-usuario.template.html',
    controller: function CadastroUsuarioController($scope, $log, $location) {
        
        var ref = firebase.database().ref();

        var refUsuarios = ref.child('usuarios');
        
        $scope.inserirUsuario = function inserirUsuario() {
            
            refUsuarios.push({
                nome: $scope.nome,
                email: $scope.email,
                curso: $scope.curso,
                periodo: $scope.periodo,
                senha: $scope.senha
            });
            
            $location.path('/tela-login');
            
            window.alert('Cadastro realizado com sucesso!');
            
        }
    }
});