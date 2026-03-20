import { Injectable, signal } from '@angular/core';
import { Message } from '../models/mensaje-model';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private messagesByContact = signal<Record<number, Message[]>>({});

  getMessages(contactId: number) {
    return this.messagesByContact()[contactId] || [];
  }

  addMessage(contactId: number, message: Message) {
    this.messagesByContact.update(state => {
      const currentMessages = state[contactId] || [];
      return {
        ...state,
        [contactId]: [...currentMessages, message]
      };
    });
  }
}