import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChatService } from '../../services/chat.service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="chat-history">
      @for (msg of activeChat()?.mensajes; track msg.timestamp) {
        <div [class]="'message ' + msg.sender">
          {{ msg.text }}
        </div>
      }
    </div>

    <div class="input-area">
      <input [formControl]="messageInput" placeholder="Escribe un mensaje...">
      <button (click)="onSend()" [disabled]="messageInput.invalid">Enviar</button>
    </div>
  `
})
export class ChatWindow {
  chatService = inject(ChatService);
  messageInput = new FormControl('', { 
    nonNullable: true, 
    validators: [Validators.required] 
  });

  // Supongamos que obtenemos el ID de la ruta [cite: 25]
  chatId = 1; 

  onSend() {
    if (this.messageInput.valid) {
      this.chatService.mandarMensaje(this.chatId, this.messageInput.value);
      this.messageInput.reset(); // Limpia el input tras enviar [cite: 17]
    }
  }

  activeChat() {
    return this.chatService.chats().find(c => c.id === this.chatId);
  }
}