import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Organizador } from '../models/organizador';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html'
})
export class InscricaoComponent implements OnInit {

  inscricaoForm: FormGroup;
  organizador: Organizador;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.inscricaoForm = this.fb.group({
        nome: ''
    });
  }

  adicionarOrganizador(){
    let org = Object.assign({},this.organizador, this.inscricaoForm.value);

  }

}
