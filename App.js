import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/SplashScreen";
import SplashScreen1 from "./screens/SplashScreen1";
import SplashScreen3 from "./screens/SplashScreen3";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import Development from "./screens/Development";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="SplashScreen1"
            component={SplashScreen1}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="SplashScreen3"
            component={SplashScreen3}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Development"
            component={Development}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
