import React, { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "./src/page/cadastro";
import Login from "./src/page/login";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="cadastro">
      <Stack.Screen
        name="cadastro"
        component={Cadastro}
        options={{
            headerShown: false,
          }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
            title: "Território 2",
            headerStyle: { backgroundColor: "#FFE4A6" },
            headerTintColor: "#8D6E63",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 35,
              fontFamily: 'Fredoka_600SemiBold',
            },
          }}
      />
    </Stack.Navigator>
  </NavigationContainer>
 );

}

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  }

});