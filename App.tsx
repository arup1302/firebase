/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import messaging from "@react-native-firebase/messaging";
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
