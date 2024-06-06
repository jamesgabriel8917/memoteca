import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamentos',
  templateUrl: './pensamentos.component.html',
  styleUrls: ['./pensamentos.component.css']
})
export class PensamentosComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'aprendendo Angular',
    autoria: 'Dev',
    modelo:  ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
