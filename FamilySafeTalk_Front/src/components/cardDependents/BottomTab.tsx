import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
import { Conversas } from './conversas';
import { Contatos } from './contatos';
import { AddContact } from './Add_Contact/addContact';
import SeeContact from "./See_Contact/seeContact";
//import { Image } from "react-native";
const Tab = createBottomTabNavigator();

export function BottomTabNavigator () {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarLabelStyle: { fontSize: 14 },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: '#a0c4ff' },
        tabBarInactiveTintColor: 'black',
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: '#a0c4ff'},
        headerStatusBarHeight: 30
      }}>
        <Tab.Screen
          name="Conversas"
          component={Conversas}
          options={{
            tabBarIcon:({ size=150, color }) => <Feather name="message-square" size={size} color={color}/> 
          }}
        />


        <Tab.Screen
          name="Contatos"
          component={Contatos}
          options={{
            tabBarIcon:({ size, color }) => <Feather name="users" size={size} color={color}/>
          }} 
        />


        <Tab.Screen
          name="Configurações"
          component={SeeContact}
          options={{
            tabBarIcon:({ size, color }) => <Feather name="settings" size={size} color={color}/>
          }} 
        />

      </Tab.Navigator>

    </NavigationContainer>
  );
};

export default BottomTabNavigator;