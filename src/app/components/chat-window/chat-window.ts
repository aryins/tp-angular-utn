import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChatService } from '../../services/chat.service';


@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="chat-history">
      @for (msg of activeChat()?.mensages; track msg.timestamp) {
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

  chatId = 1; 

  onSend() {
    if (this.messageInput.valid) {
      this.chatService.mandarMensaje(this.chatId, this.messageInput.value);
      this.messageInput.reset(); 
    }
  }

  activeChat() {
    return this.chatService.chats().find(c => c.id === this.chatId);
  }
}