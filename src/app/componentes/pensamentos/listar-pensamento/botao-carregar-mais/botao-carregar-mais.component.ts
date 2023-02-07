import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  templateUrl: './botao-carregar-mais.component.html',
  styleUrls: ['./botao-carregar-mais.component.css']
})
export class BotaoCarregarMaisComponent implements OnInit {

  //Este imput serve para poder receber informações da classe pai
  @Input() haMaisPensamentos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
