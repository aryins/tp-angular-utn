import { Routes } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';
import { ChatWindow } from './components/chat-window/chat-window';

export const routes: Routes = [
  {
    path: 'chats',
    component: Sidebar,
    children: [
      {
        path: ':id', 
        component: ChatWindow 
      }
    ]
  },
  { path: '', redirectTo: 'chats', pathMatch: 'full' }
];