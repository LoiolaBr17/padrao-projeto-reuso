import { Notification } from '../notification/Notification';

export abstract class NotificationFactory {
  abstract createNotification(): Notification;

  notifyUser(message: string): void {
    const notification = this.createNotification();
    notification.send(message);
  }
}
