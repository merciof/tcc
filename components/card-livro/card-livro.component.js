angular.module('cardLivro').component('cardLivro', {
    templateUrl: 'components/card-livro/card-livro.template.html',
    controller: function CardLivroController($scope) {
        $scope.livros = [{

            "nome": "Java Como Programar",
            "edicao": "sexta",
            "sinopse": "blablabla",
            "autor": "Deitel",
            "estado": "semi novo"
        }, {

            "nome": "Java Como Programar 2",
            "edicao": "sexta",
            "sinopse": "blablabla",
            "autor": "Deitel",
            "estado": "semi novo"
        }, {

            "nome": "Java Como Programar 3",
            "edicao": "sexta",
            "sinopse": "blablabla",
            "autor": "Deitel",
            "estado": "semi novo"
        }, {

            "nome": "Java Como Programar 4",
            "edicao": "sexta",
            "sinopse": "blablabla",
            "autor": "Deitel",
            "estado": "semi novo"
        }];
    }
});