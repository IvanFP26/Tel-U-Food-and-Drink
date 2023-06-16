import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Splash, Activity, Payment, Account } from '../pages';
import { BottomNavigator } from '../components/'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator BottomNavigator={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Activity" component={Activity} />
            <Tab.Screen name="Payment" component={Payment} />
            <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    )
  }

const Router = () => {
  return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
        </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})