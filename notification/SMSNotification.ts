import { Notification } from "./Notification";

export class SMSNotification implements Notification {
  send(message: string): void {
    console.log(`Enviando SMS: ${message}`);
  }
}
