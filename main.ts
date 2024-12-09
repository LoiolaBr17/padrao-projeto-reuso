import { EmailNotificationFactory } from "./factory/EmailNotificationFactory";
import { SMSNotificationFactory } from "./factory/SMSNotificationFactory";
import { PushNotificationFactory } from "./factory/PushNotificationFactory";

function sendNotifications() {
  const emailFactory = new EmailNotificationFactory();
  const smsFactory = new SMSNotificationFactory();
  const pushFactory = new PushNotificationFactory();

  emailFactory.notifyUser("Olá via e-mail!");
  smsFactory.notifyUser("Olá via SMS!");
  pushFactory.notifyUser("Olá via push notification!");
}

sendNotifications();
