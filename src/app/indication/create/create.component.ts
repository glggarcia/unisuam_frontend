import { Component, OnInit } from '@angular/core';
import { Indication } from 'src/app/models/indication.model';
import { IndicationService } from 'src/app/services/indication.service';
import { Router } from '@angular/router';
import { FormBuilder, Validator, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  indication: Indication = {
    nome: '',
    email: '',
    telefone: '',
    cpf: 0
  };

  createForm: FormGroup;
  
  submitted = false;

  constructor(
    private indicationService: IndicationService, 
    private router: Router,
    private formBuilder: FormBuilder) {

      this.createForm = this.formBuilder.group({
        nome: ['', Validators.required],
        email: ['', Validators.required, Validators.email],
        cpf: ['', Validators.required, Validators.minLength]
      })
    }

  ngOnInit(): void {
  }

  saveIndication(): void {
    const data = {
      nome: this.indication.nome,
      email: this.indication.email,
      telefone: this.indication.telefone,
      cpf: this.indication.cpf
    };

    this.indicationService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.router.navigate(['']);
        },
        error: (e) => console.log(e)
      });
  }

  newIndication(): void {
    this.submitted = false;
    this.indication = {
      nome: '',
      email: '',
      telefone: '',
      cpf: 0
    }
  }

}
