import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShownAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
