import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { BibleContext } from "../../contexts/bible";
import { BookContext } from "../../contexts/books";
import { globalStyles } from "../../Styles/globalStyle";

export default function Home({ navigation }) {
  const { bookNames } = useContext(BookContext);
  const { setBookCode } = useContext(BibleContext);
  const onPress = (book_code) => {
    setBookCode(book_code);
    navigation.navigate("Chapter", {
      book_code: book_code,
    });
  };
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={bookNames}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => onPress(item.book_code)}>
            <View>
              <Text style={globalStyles.listItem}>{item.long}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
