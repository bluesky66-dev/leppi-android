import React from 'react';
import firebase from '@react-native-firebase/app'
import AsyncStorage from '@react-native-community/async-storage';

export const getToken = async () => {
    let fcmToken = await AsyncStorage.getItem('$leppiFCMToken');
    console.log('====== fcmToken', fcmToken);
    if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
        console.log('====== fcmToken', fcmToken);
        if (fcmToken) {
            await AsyncStorage.setItem('$leppiFCMToken', fcmToken);
        }
    }
   firebase.messaging().onTokenRefresh(async (fcmToken) => {
        console.log('New FCM Token:', fcmToken);

        await AsyncStorage.setItem('$leppiFCMToken', fcmToken);
    });
}

export const requestPermission = async () => {
    firebase
        .messaging()
        .requestPermission()
        .then(() => {
            getToken();
        })
        .catch(error => {
            console.warn(`${error} permission rejected`);
        });
}

export const checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        getToken();
    } else {
        requestPermission();
    }
};

export const notificationListener = async () => {
    console.log('firebase.messaging().onMessag');
    const unsubscribe = firebase.messaging().onMessage(async (remoteMessage) => {
        console.log('FCM Message Data:', remoteMessage.data);
        // Update a users messages list using AsyncStorage
        const currentMessages = await AsyncStorage.getItem('messages');
        const messageArray = JSON.parse(currentMessages);
        messageArray.push(remoteMessage.data);
        await AsyncStorage.setItem('messages', JSON.stringify(messageArray));
    });
}

export const createChannel = () => {
    firebase.messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        // Update a users messages list using AsyncStorage
        const currentMessages = await AsyncStorage.getItem('messages');
        const messageArray = JSON.parse(currentMessages);
        messageArray.push(remoteMessage.data);
        await AsyncStorage.setItem('messages', JSON.stringify(messageArray));
    });
};
