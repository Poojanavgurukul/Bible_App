import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import { BibleContext } from "../../contexts/bible";
import { globalStyles } from "../../Styles/globalStyle";
export default function Bible() {
  const { data } = useContext(BibleContext);
  const bible = data.chapterContent && data.chapterContent.contents;
  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={bible}
        renderItem={({ item }) => (
          <View style={globalStyles.subContainer}>
            <Text style={globalStyles.subHeading}>{item.verseNumber}</Text>
            <Text style={globalStyles.para}>: {item.verseText}</Text>
          </View>
        )}
      />
    </View>
  );
}
