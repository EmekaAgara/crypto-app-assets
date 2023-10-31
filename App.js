import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./screens/Welcome";
import SplashScreen from "./screens/SplashScreen";
import SplashScreen1 from "./screens/SplashScreen1";
import SplashScreen2 from "./screens/SplashScreen2";
import SplashScreen3 from "./screens/SplashScreen3";
import SplashScreen4 from "./screens/SplashScreen4";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import { Provider } from "react-redux";
import { store } from "./store";
import ContactScreen from "./screens/ContactScreen";
import EngagementScreen from "./screens/EngagementScreen";
import Pay from "./screens/Pay";
import TechSchoolScreen from "./screens/TechSchoolScreen";
import Unfollowers from "./screens/Unfollowers";
import CameraScreen from "./screens/CameraScreen";
import RecProductDetails from "./screens/RecProductDetails";
import Gaming from "./screens/Gaming";
import ArProductsScreen from "./screens/ArProductsScreen";
import ArProductDetails from "./screens/ArProductDetails";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
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
              name="SplashScreen2"
              component={SplashScreen2}
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
              name="SplashScreen4"
              component={SplashScreen4}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Welcome"
              component={Welcome}
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
              name="RecProductDetails"
              component={RecProductDetails}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="CameraScreen"
              component={CameraScreen}
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
              name="ArProductsScreen"
              component={ArProductsScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="ArProductDetails"
              component={ArProductDetails}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Cart"
              component={Cart}
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
    </Provider>
  );
}
