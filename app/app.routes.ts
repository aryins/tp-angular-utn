import { Routes } from '@angular/router';
import { ChatWindow } from './components/chat-window/chat-window';
import { Sidebar } from './components/sidebar/sidebar'; 

export const routes: Routes = [

{ 
    path: 'chats', 
    component: Sidebar,
    children: [
      {
        path: ':id',
        component:  ChatWindow
      }
     ]
  },
  { path: '', redirectTo: 'chats', pathMatch: 'full' }

]
