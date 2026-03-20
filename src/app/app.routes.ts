import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import {Login} from './views/home/login/login';
import { ChatWindow } from './components/chat-window/chat-window';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { 
    path: 'chats', 
    component: Home, 
    children: [
      { path: ':id', component: ChatWindow } // /chats/:id [cite: 69]
    ]
  }
]; 