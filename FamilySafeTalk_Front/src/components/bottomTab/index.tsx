import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Conversas from "../talks";
import Contatos from "../contact";
import SeeContact from "../seeContact";
import AddContact from "../../screens/addContact";
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  // Defina a navegação para as abas Configurações
  function ConfiguracoesStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="AddContact"
          component={AddContact}
        />
        <Stack.Screen
          name="SeeContact"
          component={SeeContact}
        />
      </Stack.Navigator>
    );
  }

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
          name="Conversas"
          component={Conversas}
          options={{
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
          component={ConfiguracoesStack}
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
