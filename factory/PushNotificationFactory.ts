import { NotificationFactory } from "./NotificationFactory";
import { PushNotification } from "../notification/PushNotification";
import { Notification } from "../notification/Notification";

export class PushNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new PushNotification();
  }
}
