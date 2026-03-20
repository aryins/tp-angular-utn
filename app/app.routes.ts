import { Routes } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';
import { ChatWindow } from './components/chat-window/chat-window';

export const routes: Routes = [
  {
    path: 'chats',
    component: Sidebar, // El sidebar siempre visible
    children: [
      {
        path: ':id', // El id que cambia en la URL
        component: ChatWindow // Se carga a la derecha
      }
    ]
  },
  { path: '', redirectTo: 'chats', pathMatch: 'full' }
];