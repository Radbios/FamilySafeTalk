import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from 'react-native';
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
  ConfiguraçõesStackNavigator,
  ContatoStackNavigator,
  ConversasStackNavigator,
  DependenteStackNavigator,
} from "../../routes/app/stack.routes";
import Preferences from "../../screens/preferences";
import ListBlocks from "../../screens/listBlocks";
import FriendshipRequestList from "../../screens/friendshipRequest";
import { useAuth } from "../../contexts/auth";
import Cadastro2 from "../../screens/cadastro/cadastro2";
import Cadastro3 from "../../screens/cadastro/cadastro3";
import { useIsCurrentScreen } from "../../utils/context";
import cardAudio from "../cardAudio";
import Configuration from "../../screens/configuration";
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();
  const {user} = useAuth();

  const {
    selectedCurrentScreen,
    setSelectedCurrentScreen
  } = useIsCurrentScreen()
  
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
        <>
        {console.log(`teste: `, selectedCurrentScreen)}
        </>
      <Tab.Screen
          name="ConversasNavigator"
          component={ConversasStackNavigator}
          options={{
            headerTitle: "Conversas",
            tabBarLabel: "Conversas",
            headerShown: selectedCurrentScreen !== "Chat",
            tabBarStyle: {
              display: selectedCurrentScreen !== "Chat" ? "flex" : "none",
              backgroundColor: "#a0c4ff",
            },
            tabBarIcon: ({ color }) => (
              <Image
                source={require('../../../assets/message.png')}
                style={{ width: 33, height: 27, tintColor: color }}
              />
            ),
            headerRight: () => (
              <FontAwesome
                name="bell"
                size={23}
                color={"#E80A51"}
                style={{
                  marginRight: 25,
                  marginTop: 4,
                  borderRadius: 50,
                  padding: 8,
                  /* backgroundColor: "#FFAFCC", */
                }}
                onPress={() => {console.log('Ícone clicado!');}}
              />
            ),
          }}
        />

        <Tab.Screen
          name="ContatoNavigator"
          component={ContatoStackNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require('../../../assets/people.png')}
                style={{ width: 33, height: 27, tintColor: color }}
              />
            ),
            tabBarLabel: "Contatos",
            headerTitle: "Contatos",
          }}
        />

        {
          user.role == 1 && <Tab.Screen
            name="DependenteNavigator"
            component={DependenteStackNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <Image
                  source={require('../../../assets/escalator_warning.png')}
                  style={{ width: 33, height: 27, tintColor: color }}
                />
              ),
              tabBarLabel: "Dependentes",
              headerTitle: "Dependentes",
            }}
          />
        }

        <Tab.Screen
          name="ConfiguraçõesNavigator"
          //Voltar SeeContact depois
          component={ConfiguraçõesStackNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require('../../../assets/settings.png')}
                style={{ width: 33, height: 27, tintColor: color }}
              />
            ),
              tabBarLabel: "Configurações",
              headerTitle: "Configurações",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
