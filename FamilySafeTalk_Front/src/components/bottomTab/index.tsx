import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Conversas from "../talks";
import Contatos from "../contact";
import SeeContact from "../seeContact";
import AddContact from "../../screens/addContact";
import Responsavel1 from "../../screens/Responsavel_1";
import Responsavel3 from "../../screens/Responsavel_3";
import Responsavel4 from "../../screens/Responsavel_4";
import {
  ContatoStackNavigator,
  ConversasStackNavigator,
} from "../../routes/app/stack.routes";
import Preferences from "../../screens/preferences";
import ListBlocks from "../../screens/listBlocks";
import FriendshipRequestList from "../../screens/friendshipRequest";
import { useAuth } from "../../contexts/auth";
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();
  const {user} = useAuth();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 13, fontFamily: "Dosis_400Regular" },
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

        {
          user.role == 1 && <Tab.Screen
            name="Dependentes"
            component={Responsavel4}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Feather name="user" size={size} color={color} />
              ),
            }}
          />
        }

        <Tab.Screen
          name="Configurações"
          //Voltar SeeContact depois
          component={FriendshipRequestList}
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
