import { PensamentoService } from './../pensamento.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from './pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
    favorito: false
  }

  //Para se comunicar com componente filho, como propriedade de entrada
  @Input() listaFavoritos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito(): string {
    if (this.pensamento.favorito == false) {
      return 'inativo'
    }
    return 'ativo'
  }

  atualizarFavorito() {
    //Para usar este metodo é necessario inserir o componente no construtor
    this.service.mudarFavorito(this.pensamento).subscribe(() => {
      //Dessa forma o componente pai se comunica com o filho e remove o pensamento sem o like de favorito
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1)
    });
    //Para ter certeza que o botao esta funcionando
    console.log(this.pensamento.favorito)
  }

}
