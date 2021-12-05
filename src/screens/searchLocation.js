import React from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";

import search from "../utils/search";
import Result from "../components/result";

const SearchLocation = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput style={styles.input} placeholder={"Where are you going?"} />
      </View>

      <FlatList
        data={search}
        renderItem={({ item }) => <Result text={item.description} />}
        // ItemSeparatorComponent={<View style={{borderWidth: StyleSheet.hairlineWidth}} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  inputWrapper: {
    marginTop: 30,
    height: 40,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#ede9e8",
    padding: 10,
  },
  input: {
    fontSize: 18,
  },
});

export default SearchLocation;
