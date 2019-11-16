import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NotificationsAndroid} from 'react-native-notifications';

export const registerDevice = () => {
    NotificationsAndroid.setRegistrationTokenUpdateListener(async (deviceToken) => {
        console.log('Push-notifications registered!', deviceToken);
        await AsyncStorage.setItem('$leppiFCMToken', deviceToken);
    });
};

export const addListeners = () => {
    // On Android, we allow for only one (global) listener per each event type.
    NotificationsAndroid.setNotificationReceivedListener((notification) => {
        console.log("Notification received on device in background or foreground", notification.getData());
    });
    NotificationsAndroid.setNotificationReceivedInForegroundListener((notification) => {
        console.log("Notification received on device in foreground", notification.getData());
    });
    NotificationsAndroid.setNotificationOpenedListener((notification) => {
        console.log("Notification opened by device user", notification.getData());
    });
};
