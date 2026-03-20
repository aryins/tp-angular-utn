export interface Mensaje {
  text: string;
  sender: 'user' | 'app';
  timestamp: Date;
}

export interface Chat {
  id: number;
  contactName: string;
  avatar: string;
  status: 'online' | 'offline' | string;
  mensages: Mensaje[];
}