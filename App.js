import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Signup from './screens/Signup';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator defaultScreenOptions={Login} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Log In" component={Login} />
            <Stack.Screen name="Sign Up" component={Signup} />
        </Stack.Navigator>
    );
};

const ChatStack = () => {
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*import { useContext } from "react";

import { Context } from "./functions/context";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

import "./app.css";

function App() {
  const { user } = useContext(Context);

  if (user) {
    return <ChatsPage />;
  } else {
    return <AuthPage />;
  }
}

export default App;*/