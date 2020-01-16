//angular
import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControlName, FormControl } from '@angular/forms';

//componentes reativos
import { Observable, fromEvent, merge } from 'rxjs';

//componentes externos
import {CustomValidators} from 'ng2-validation';

//utilidades
import { Organizador } from '../models/organizador';
import { GenericValidator } from 'src/app/utils/generic.form.validator';


@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.css']
})
export class InscricaoComponent implements OnInit, AfterViewInit {


  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[]; //Retorna a coleção de elementos do form

  inscricaoForm: FormGroup;
  organizador: Organizador;
  validationMessages: { [key: string]: {[key: string]: string}};
  displayMessage: {[key: string]: string} = {};
  genericValidator: GenericValidator;

  constructor(private fb: FormBuilder) {

    this.validationMessages = {
      nome: {
        required: 'O nome é requerido',
        minLength: 'O nome precisa ter no mínimo 2 caracteres',
        maxLength: 'O nome precisa ter no máximo 150 caracteres'
      },
      cpf: {
        required: 'Informe o CPF',
        rangeLength: 'CPF deve conter 11 caracteres'
      },
      email: {
        required: 'Informe o e-mail',
        email: 'Email invalido'
      },
      senha: {
        required: 'Informe a senha',
        minlength: 'A senha deve possuir no mínimo 6 caracteres'
      },
      senhaConfirmacao: {
        required: 'Informe a senha novamente',
        minlength: 'A senha deve possuir no mínimo 6 caracteres',
        equalTo: 'As senhas devem ser iguais'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);

   }

  ngOnInit() {

    let senha = new FormControl('',[Validators.required, Validators.minLength(6)]);
    let senhaConfirmacao = new FormControl('',[Validators.required, Validators.minLength(6), CustomValidators.equalTo(senha)]);

    this.inscricaoForm = this.fb.group({
        nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
        cpf: ['', [Validators.required, CustomValidators.rangeLength([11,11])]],
        email: ['', [Validators.required, CustomValidators.email]],
        senha: senha,
        senhaConfirmacao: senhaConfirmacao 
    });
  }

  adicionarOrganizador(){
    
    this.displayMessage = this.genericValidator.processMessages(this.inscricaoForm);
    let org = null;

    if(this.inscricaoForm.valid && this.inscricaoForm.dirty){
      org = Object.assign({},this.organizador, this.inscricaoForm.value);
      
      //POSTERIORMENTE CHAMA O WEB API PARA SALVAR O ORG
      } 

    }

    ngAfterViewInit() {
      let controlBlurs: Observable<any>[] = this.formInputElements 
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')); //Observa o evento 'blur' de qualquer item do form

      merge(...controlBlurs).subscribe(value => {
        this.displayMessage = this.genericValidator.processMessages(this.inscricaoForm);
      });//os tres pontos é um 'operador' que tem a função de aplicar o que se vai fazer a todos os itens de uma coleção (o controlBlurs no caso)
    }

}
