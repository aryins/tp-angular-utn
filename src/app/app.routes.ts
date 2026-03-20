import { Routes } from '@angular/router';

export const routes: Routes = [

{ 
    path: 'chats', 
    loadComponent: () => import('./components/sidebar/sidebar').then(m => m.Sidebar),
    children: [
      {
        path: ':id',
        loadComponent: () => import('./components/chat-window/chat-window').then(m => m.ChatWindow)
      }
    ]
  },
  { path: '', redirectTo: 'chats', pathMatch: 'full' }

]

;
