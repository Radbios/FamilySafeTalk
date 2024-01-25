import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { Conversas } from "../talks";
import { Contatos } from "../contact";
import SeeContact from "../seeContact";
import { red300 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14, fontFamily: "Dosis_400Regular"},
          tabBarItemStyle: { width: 100 },
          tabBarStyle: { backgroundColor: "#a0c4ff", height: 57, marginBottom: 1 },
          tabBarInactiveTintColor: "black",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#a0c4ff" },
          headerStatusBarHeight: 30,
          headerTitleStyle: {fontSize: 20, fontFamily: "Dosis_400Regular"}
        }}
      >
        <Tab.Screen
          name="Conversas"
          component={Conversas}
          options={{
            tabBarIcon: ({ size = 150, color }) => (
              <Feather name="message-square" size={size} color={color} />
            ),
            headerRight: () => (
              <FontAwesome name="bell" size={23} color={"#E80A51"} 
              style={{
                marginRight: 25, 
                marginTop: 4,
                backgroundColor: "#FFAFCC",
                borderRadius: 50,
                padding: 8
              }}
              onPress={() => {}}
              />
            )
          }}
        />

        <Tab.Screen
          name="Contatos"
          component={Contatos}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="users" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Configurações"
          component={SeeContact}
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

export default BottomTabNavigator;
