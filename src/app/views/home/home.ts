import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Sidebar, RouterOutlet], // Importa el Sidebar [cite: 23]
  template: `
    <div class="home-layout">
      <aside class="sidebar-container">
        <app-sidebar></app-sidebar>
      </aside>

      <main class="chat-content">
        <router-outlet></router-outlet> 
        </main>
    </div>
  `,
  styles: [`
    .home-layout {
      display: flex; /* Uso de Flexbox según consigna [cite: 80, 130] */
      height: 100vh;
    }
    .sidebar-container {
      width: 30%;
      border-right: 1px solid #ddd;
    }
    .chat-content {
      width: 70%;
    }
    @media (max-width: 768px) {
      .home-layout { flex-direction: column; } /* Responsive [cite: 77, 131] */
    }
  `]
})
export class Home {}