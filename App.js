import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import BibleContextProvider from "./contexts/bible";
import BookContextProvider from "./contexts/books";
import { globalStyles } from "./Styles/globalStyle";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home/Home";
import Chapter from "./components/Bible/ Chapter";
const Stack = createStackNavigator();
export default function App() {
  return (
    <BibleContextProvider>
      <BookContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Chapter" component={Chapter} />
          </Stack.Navigator>
        </NavigationContainer>
      </BookContextProvider>
    </BibleContextProvider>
  );
}
