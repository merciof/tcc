angular.module('listagemLivro').component('listagemLivro', {

  templateUrl: 'listagem-livro/listagem-livro.template.html',

  controller: function ListagemLivrosController($scope) {

    this.teste = 'teste';

    $scope.phones = [
        {
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.',
            age: '1'
          }, {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.',
            age: '2'
          }, {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.',
            age: '3'
          }
    ];

    /* //obtém referência para o nó 'livros'
    const ref = firebase.database().ref('livros');

    //método que adiciona um objeto como filho do nó 'livros'
    const result = ref.push({
      autor: 'Deitel',
      preco: '50',
      titulo: 'Java Como Programar'
    });

    //loga o objeto retornado pelo método push
    console.log(result); */
    
    //this.arrayLivros = [];

    
    // $scope.arrayLivros.push({
    //   titulo: 'Sistemas Distribuidos',
    //   autor: 'Tanenbaum',
    //   preco: '50'
    // });



  /*   firebase.database().ref('livros').on('value', function snapshot(s) {

        let arrayLivros = [];
        let livros = s.val();
        
        for(let key in livros) {
          let obj = {};
          obj.autor = livros[key].autor;
          obj.titulo = livros[key].titulo;
          obj.preco = livros[key].preco;
          arrayLivros.push(obj);

       }


       this.arrayLivros = arrayLivros.slice();

       console.log(arrayLivros.slice());

       console.log(this.arrayLivros);

    });*/

    // //este código é executado antes que os dados tenham sido recebidos do servidor
    // this.arrayLivros = arrayLivros.slice();
    //
    // console.log(arrayLivros.slice());
    //
    // console.log(this.arrayLivros);

    //console.log($scope.phones);
    //this._arrayLivros = $scope.arrayLivros.slice();


  }
});
