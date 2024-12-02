import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Alert, Linking, Text,SafeAreaView, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';

import MyDrawer from './Drawer/drawer';

import MyStack from './Stack/MyStack';

import { NavigationContainer } from '@react-navigation/native';

import React, { useState,useRef, useEffect } from 'react';
import { EndPoint } from './Constant/links';
//import * as Application from 'expo-application';
import AwesomeAlert from 'react-native-awesome-alerts';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners';

export default function App({navigation}) {



  const [userToken, setUserToken] = useState('');
  //const Stack = createStackNavigator();

  useEffect(() => {
    // Listen for the 'updateUserToken' event
    const tokenUpdateListener = EventRegister.addEventListener('updateUserToken', (token) => {
      setUserToken(token);
    });

    // Cleanup the listener when the component unmounts
    return () => {
      EventRegister.removeEventListener(tokenUpdateListener);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
    
      
     <NavigationContainer>
          <MyDrawer />
     </NavigationContainer>
      

      
      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
