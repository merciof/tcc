angular.module('cadastroUsuario').component('cadastroUsuario', {
    templateUrl: 'components/cadastro-usuario/cadastro-usuario.template.html',
    controller: function CadastroUsuarioController($scope, $log) {
        
        var ref = firebase.database().ref();

        var refUsuarios = ref.child('usuarios');
        
        $scope.inserirUsuario = function inserirUsuario() {
            
            refUsuarios.push({
                nome: $scope.nome,
                email: $scope.email,
                curso: $scope.periodo,
                periodo: $scope.periodo,
                senha: $scope.senha
            });
            
            window.alert('Cadastro realizado com sucesso!');
            
        }
    }
});