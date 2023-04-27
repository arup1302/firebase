/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import messaging from "@react-native-firebase/messaging";
import { Amplify,Notifications  } from 'aws-amplify';
import {
  
  StyleSheet,
  Text,
  
  View,
} from 'react-native';


function App(): JSX.Element {
  

 
  const getFCMToken = async () => {
    try {
      const token = await messaging().getToken();
      console.log(token);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getFCMToken()

    // const myTokenReceivedHandler = () => {
    //   // Do something with the received token
    // };
    
    Notifications.Push.onTokenReceived((token)=>{
      console.log(token,'Token')
    });
    
    // listener.remove(); // Remember to remove the listener when it is no longer needed

  }, [])


  
  return (
    <View style={styles.backgroundStyle}>
      <Text style={{ color: "black", fontWeight:'900', }}> Notification Alert project</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    justifyContent: 'center',
    alignItems: "center",
  height:"100%",
    width: "100%",
    //
  
  },

});

export default App;
