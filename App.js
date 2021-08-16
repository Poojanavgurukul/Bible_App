import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import Home from "./components/Home/Home";
import { globalStyles } from "./Styles/globalStyle";

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Home />
    </View>
  );
}
