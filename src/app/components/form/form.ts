import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  form: FormGroup;
  usuarios: any[] = [];

  // INYECTAMOS el UsersService aquí:
  constructor(private fb: FormBuilder, private userService: UsersService) {
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
      this.form.reset();
    }
  }
}