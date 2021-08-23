import React, { useContext } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { BookContext } from "../../contexts/books";

export default function BookCodes() {
  const { bookNames } = useContext(BookContext);
  return (
    <View>
      <FlatList
        data={bookNames}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPess={() =>
              // navigation.navigate("chapter", { book_code: item.book_code })
              console.log("hh")
            }
          >
            <Text>
              {index}
              {item.long}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
