/**
 * @format
 */

import {AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import {name as appName} from './app.json';
import { Amplify,Notifications  } from 'aws-amplify';
import awsExports from './src/aws-exports';

import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);
Amplify.configure(awsExports);
Notifications.Push.enable();



const myAsyncNotificationReceivedHandler = async (notification) => {
  console.log(" hojaa re", notification)
};
Notifications.Push.onNotificationReceivedInBackground(
  myAsyncNotificationReceivedHandler
);
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
AppRegistry.registerComponent(appName, () => App);
