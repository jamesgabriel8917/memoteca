import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Hi lorena',
      autoria: 'Nay',
      modelo: 'modelo2'
    },
    {
      conteudo: 'I love dick',
      autoria: 'Nay',
      modelo: 'modelo1'
    },
    {
      conteudo: 'I love eugvcuerc iurbycuy ierycbieyr ehfvbf ivervbirv iurvbiurvb iubvirvb itubvirtbvi itbvirtbvi itbuvirtbvi 4ibvirtbvi ibvirtbvi rivbirbvi ribvirbv ribvirbvi ivbirbv ibvirbv c ircybuieurc rfneriunfckejrnc ierbcierbciericnercikj erciunericuer ceorucniercneiorc oeurcneurncuenrocierc oeurnco oercuerncoiec eirbciercierccolate',
      autoria: 'Nay',
      modelo: 'modelo3'
    },
    {
      conteudo: 'I love dick',
      autoria: 'Nay',
      modelo: 'modelo1'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
