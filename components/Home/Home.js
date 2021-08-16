import React from "react";
import { View, Text } from "react-native";
import BibleContextProvider from "../../contexts/bible";
import { globalStyles } from "../../Styles/globalStyle";
import Bible from "../Bible/Bible";

export default function Home() {
  return (
    <View>
      <Text style={globalStyles.heading}>Home</Text>
      <BibleContextProvider>
        <Bible />
      </BibleContextProvider>
    </View>
  );
}
