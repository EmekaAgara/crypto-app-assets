import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
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
import { Provider } from "react-redux";
import ContactScreen from "./screens/ContactScreen";
import EngagementScreen from "./screens/EngagementScreen";
import Pay from "./screens/Pay";
import TechSchoolScreen from "./screens/TechSchoolScreen";
import Unfollowers from "./screens/Unfollowers";
import Gaming from "./screens/Gaming";

export default function App() {
  const Stack = createStackNavigator();
  return (
    // <Provider store={store}>
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
            name="TechSchoolScreen"
            component={TechSchoolScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Unfollowers"
            component={Unfollowers}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="EngagementScreen"
            component={EngagementScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="ContactScreen"
            component={ContactScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Gaming"
            component={Gaming}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Pay"
            component={Pay}
            options={{
              headerShown: true,
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
    // </Provider>
  );
}
