import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/login/index";
import Register from "../screens/cadastro/cadastro1/index";
import Register2 from "../screens/cadastro/cadastro2/index";
import Register3 from "../screens/cadastro/cadastro3/index";

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register2"
          component={Register2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register3"
          component={Register3}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthRoutes;