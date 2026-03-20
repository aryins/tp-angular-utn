import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Form } from './components/form/form';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [Header, Footer, Form, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  logged=true
  rol="editor"
  nombre: string= "Juan"
  apellido: string= "Perez"
  edad=18
}
