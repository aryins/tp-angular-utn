import { Component, signal, input, effect, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Message } from '../../models/mensaje-model';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./chat-window.html",
  styleUrl: "./chat-window.css"
})
export class ChatWindow{
  private chatService = inject(ChatService);  
  id = input.required<string>(); 

  messages = computed(() => this.chatService.getMessages(Number(this.id())));
  messageControl = new FormControl('', { nonNullable: true, validators: [Validators.required] });

  sendMessage() {
    const contactId = Number(this.id());
    const userText = this.messageControl.value;

    if (this.messageControl.invalid) return;


    this.chatService.addMessage(contactId, { 
      text: userText, sender: 'user', timestamp: new Date() 
    });

    this.messageControl.reset();

    setTimeout(() => {
      this.chatService.addMessage(contactId, { 
        text: `Soy un bot, recibí tu mensaje: "${userText}"`, 
        sender: 'app', 
        timestamp: new Date() 
      });
    }, 1500);
  }
}
