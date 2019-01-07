angular.module('cadastroAnuncio').component('cadastroAnuncio', {
    
    templateUrl: 'components/cadastro-anuncio/cadastro-anuncio.template.html',
    
    controller: function CadastroAnuncioController() {
        
        var ref = firebase.database().ref();

        var refAnuncios = ref.child('anuncios');
        
        $scope.inserirAnuncio = function inserirAnuncio() {
            
            refAnuncios.push({
                nome: $scope.nome,
                email: $scope.email,
                curso: $scope.curso,
                periodo: $scope.periodo,
                senha: $scope.senha
            });
            
            $location.path('/home');
            
            window.alert('Anuncio cadastrado com sucesso!');
            
        }    
        
    }
});