angular.module('listagemLivros').component('listagemLivros', {

  templateUrl: 'listagem-livros/listagem-livros.template.html',

  controller: function ListagemLivrosController() {

    firebase.database().ref('livros').on('value', function snapshot(s) {
        window.console.log(s.val());
    });
  }
});
