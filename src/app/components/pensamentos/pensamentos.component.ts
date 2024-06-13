import { Component, OnInit } from '@angular/core';
import { PensamentoService } from './pensamento.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pensamentos',
  templateUrl: './pensamentos.component.html',
  styleUrls: ['./pensamentos.component.css']
})
export class PensamentosComponent implements OnInit {

  pensamento = {
    conteudo: '',
    autoria: '',
    modelo:  '1'
  }

  constructor(
    private service: PensamentoService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  criarPensamento(){

    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(["/listarPensamento"])
    })

  }

  cancelar(){
    this.router.navigate(["/listarPensamento"])
  }
}
