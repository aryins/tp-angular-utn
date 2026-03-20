import { Component, signal, input, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

interface Message {
  text: string;
  sender: 'user' | 'app';
  timestamp: Date;
}

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./chat-window.html",
  styleUrl: "./chat-window.css"
})
export class ChatWindow{
  id = input<string>(); 

  messages = signal<Message[]>([]);
  messageControl = new FormControl('', { nonNullable: true, validators: [Validators.required] });

  sendMessage() {
    if (this.messageControl.invalid) return;

    const userText = this.messageControl.value;
    

    this.messages.update(prev => [...prev, { text: userText, sender: 'user', timestamp: new Date() }]);
    this.messageControl.reset();

    setTimeout(() => {
      this.messages.update(prev => [...prev, { 
        text: `Soy un bot, recibí tu mensaje: "${userText}"`, 
        sender: 'app', 
        timestamp: new Date() 
      }]);
    }, 1500);
  }
}