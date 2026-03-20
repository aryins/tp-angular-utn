import { Injectable, signal } from '@angular/core';
import { Chat, Mensaje } from '../modelos/interface.chat';

@Injectable({ providedIn: 'root' })
export class ChatService {
  chats = signal<Chat[]>([
    {
        id: 1,
      contactName: 'Aiden Chavez',
      avatar: 'assets/avatar1.jpg',
      status: 'online',
      mensajes: []
    }
  ]);

  mandarMensaje(chatId: number, text: string) {
    const nuevoMensaje: Mensaje = {
      text,
      sender: 'user', 
      timestamp: new Date()
    };

   
    this.updateChatHistory(chatId, nuevoMensaje);

    setTimeout(() => {
      this.generateAutoResponse(chatId);
    }, 1500);
  }

  private generateAutoResponse(chatId: number) {
    const autoReply: Mensaje = {
      text: '¡Hola! Recibí tu mensaje. ¿En qué más puedo ayudarte?',
      sender: 'app',
      timestamp: new Date()
    };

    this.updateChatHistory(chatId, autoReply);
  }

  private updateChatHistory(chatId: number, mensaje: Mensaje) {
    this.chats.update(currentChats => 
      currentChats.map(chat => 
        chat.contactName === ' '
          ? { ...chat, mensajes: [...chat.mensajes, mensaje] } 
          : chat
      )
    );
  }
}