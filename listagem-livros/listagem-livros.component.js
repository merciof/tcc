angular.module('listagemLivros').component('listagemLivros', {

  templateUrl: 'listagem-livros/listagem-livros.template.html',

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

    let idLivro = 4;
    let autor = 'Tanembaum';
    let preco = 50;
    let titulo = 'Java Como Programar';

    
    function writeUserData(idLivro,autor,preco,titulo){
      firebase.database().ref('livros' + idLivro).set({
        autor: autor,
        preco: preco,
        titulo: titulo
      });
    }
    
  
    this.arrayLivros = [];

    
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

       } */


       this.arrayLivros = arrayLivros.slice();

       console.log(arrayLivros.slice());

       console.log(this.arrayLivros);

    });

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
