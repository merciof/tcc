function Livro(titulo,autor,preco){
   this._titulo = titulo;
   this._autor = autor;
   this._preco = preco;

   //acessivel apenas dentro da função Livro
   let gerar = function gerar () {
     //window.console.log(this._titulo + ', ' + this._autor + ', ' + this._preco + '.');
   }

   this.exibir = function exibir() {
     //gerar();
     window.console.log(this._titulo + ', ' + this._autor + ', ' + this._preco + '.');
   }
}
