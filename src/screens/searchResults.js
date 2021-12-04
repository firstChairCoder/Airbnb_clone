//import liraries
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { colors } from "../../assets/colors/colors";
import Post from "../components/post";
import Feed from "../utils/feed";

// create a component
const SearchResults = () => {
  return (
    <View>
      <FlatList data={Feed} renderItem={({ item }) => <Post post={item} />} />
    </View>
  );
};

//make this component available to the app
export default SearchResults;
