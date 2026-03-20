import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Contacto } from '../../models/contacto-model';

@Component({
  
  selector: 'app-sidebar',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  contacts = signal<Contacto[]>([
    { id: 1, nombre: 'Angular Bot', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1', estado: 'online' }
  ]);

  contactForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  addContact() {
    if (this.contactForm.valid) {
      const newContact: Contacto = {
        id: Date.now(),
        nombre: this.contactForm.value.nombre!,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()}`,
        estado: 'offline',
        ultimaVez: 'Recién'
      };

     this.contacts.update(prev => [...prev, newContact]);
      this.contactForm.reset();
    }
  }


}
