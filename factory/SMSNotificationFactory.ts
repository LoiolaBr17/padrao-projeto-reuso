import { NotificationFactory } from "./NotificationFactory";
import { SMSNotification } from "../notification/SMSNotification";
import { Notification } from "../notification/Notification";

export class SMSNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new SMSNotification();
  }
}
