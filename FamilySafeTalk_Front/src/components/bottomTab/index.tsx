import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Conversas from "../talks";
import Contatos from "../contact";
import SeeContact from "../seeContact";
import AddContact from "../../screens/addContact";
import {
  ContatoStackNavigator,
  ConversasStackNavigator,
} from "../../routes/app/stack.routes";
import Preferences from "../../screens/preferences";
import ListBlocks from "../../screens/listBlocks";
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14, fontFamily: "Dosis_400Regular" },
          tabBarItemStyle: { width: 100 },
          tabBarStyle: {
            backgroundColor: "#a0c4ff",
            height: 57,
            marginBottom: 1,
          },
          tabBarInactiveTintColor: "black",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#a0c4ff" },
          headerStatusBarHeight: 1,
          headerTitleStyle: { fontSize: 20, fontFamily: "Dosis_400Regular" },
        }}
      >
        <Tab.Screen
          name="ConversasNavigator"
          component={ConversasStackNavigator}
          options={{
            headerTitle: "Conversas",
            tabBarLabel: "Conversas",
            tabBarIcon: ({ size = 150, color }) => (
              <Feather name="message-square" size={size} color={color} />
            ),
            headerRight: () => (
              <FontAwesome
                name="bell"
                size={23}
                color={"#E80A51"}
                style={{
                  marginRight: 25,
                  marginTop: 4,
                  backgroundColor: "#FFAFCC",
                  borderRadius: 50,
                  padding: 8,
                }}
                onPress={() => {}}
              />
            ),
          }}
        />

        <Tab.Screen
          name="ContatoNavigator"
          component={ContatoStackNavigator}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="users" size={size} color={color} />
            ),
            tabBarLabel: "Contatos",
            headerTitle: "Contatos",
          }}
        />

        <Tab.Screen
          name="Configurações"
          //Voltar SeeContact depois
          component={ListBlocks}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
