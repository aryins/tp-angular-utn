import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="login-container">
      <form [formGroup]="loginForm" (ngSubmit)="onLogin()">
        <h2>Iniciar Sesión</h2>
        <input formControlName="email" type="email" placeholder="Email">
        <input formControlName="password" type="password" placeholder="Contraseña">
        <button type="submit" [disabled]="loginForm.invalid">Ingresar</button>
      </form>
    </div>
  `,
  styleUrls: ['./login.css']
})
export class Login {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onLogin() {
    if (this.loginForm.valid) {
      // Simulación de login exitoso
      this.router.navigate(['/chats']); // Redirige a la lista de chats [cite: 67]
    }
  }
}