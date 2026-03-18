import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  form: FormGroup;
  usuarios: any[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]]
    });
  }

  enviar() {
    if (this.form.valid) {
      this.usuarios.push(this.form.value);
      this.form.reset();
    }
  }
}
