import { Component, signal, input, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChatService } from '../../services/chat.service'; // Asegúrate de crear este servicio
import { Message } from '../../models/mensaje-model';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./chat-window.html",
  styleUrl: "./chat-window.css"
})
export class ChatWindow {
  private chatService = inject(ChatService);
  
  // Recibe el ID directamente de la URL (/chats/:id)
  id = input.required<string>(); 

  // Obtenemos los mensajes del servicio reactivamente basados en el ID actual
  messages = computed(() => this.chatService.getMessages(Number(this.id())));

  messageControl = new FormControl('', { nonNullable: true, validators: [Validators.required] });

  sendMessage() {
    if (this.messageControl.invalid) return;

    const contactId = Number(this.id());
    const text = this.messageControl.value;

    // 1. Guardar mensaje del usuario en el servicio
    this.chatService.addMessage(contactId, { 
      text, 
      sender: 'user', 
      timestamp: new Date() 
    });

    this.messageControl.reset();

    // 2. Respuesta automática del bot
    setTimeout(() => {
      this.chatService.addMessage(contactId, { 
        text: `Bot dice: Recibí "${text}"`, 
        sender: 'app', 
        timestamp: new Date() 
      });
    }, 1000);
  }
}