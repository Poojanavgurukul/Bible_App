import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BibleContextProvider from "./contexts/bible";
import BookContextProvider from "./contexts/books";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home/Home";
import Bible from "./components/Bible/Bible";
const Stack = createStackNavigator();
export default function App() {
  return (
    <BibleContextProvider>
      <BookContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Bible" component={Bible} />
          </Stack.Navigator>
        </NavigationContainer>
      </BookContextProvider>
    </BibleContextProvider>
  );
}
