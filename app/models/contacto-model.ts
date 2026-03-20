export interface Contacto {
  id: number;
  nombre: string;
  avatar: string;
  estado: 'online' | 'offline';
  ultimaVez?: string;
}
