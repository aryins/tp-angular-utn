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
  userService: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (users: any[]) => {
        this.usuarios = users;
      },
      error: () => {
        console.error("Error al cargar usuarios:");
      }   
    });
  }

  enviar() {
    if (this.form.valid) {
      this.usuarios.push(this.form.value);
      next: () => {
        this.usuarios.push(this.form.value);
    }
  }

  this.form.reset(); 
}
}