import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  public usuario = {
    nombre: null,
    apellido: null,
    correo: null
  };

  constructor() {

   }

  ngOnInit() {
  }

  public guardar(forma: NgForm) {

    console.log('ngForm', forma);
    console.log('Valor form', forma.value);

    console.log('Usuario', this.usuario);

  }
}
