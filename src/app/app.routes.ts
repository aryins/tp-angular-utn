import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'chats', pathMatch: 'full' },
  { 
    path: 'chats', 
    loadComponent: () => import('./components/sidebar/sidebar')
      .then(m => m.Sidebar) 
  },
  { 
    path: 'chats/:id', 
    loadComponent: () => import('./components/chat-window/chat-window')
      .then(m => m.ChatWindow) 
  },
  { 
    path: 'nuevo', 
    loadComponent: () => import('./components/chat-form/chat-form')
      .then(m => m.ChatForm) 
  }
];