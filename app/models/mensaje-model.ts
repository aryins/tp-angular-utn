export interface Message {
  text: string;
  sender: 'user' | 'app';
  timestamp: Date;
}
