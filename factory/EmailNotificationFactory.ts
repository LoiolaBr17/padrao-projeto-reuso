import { NotificationFactory } from "./NotificationFactory";
import { EmailNotification } from "../notification/EmailNotification";
import { Notification } from "../notification/Notification";

export class EmailNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new EmailNotification();
  }
}
