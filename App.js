import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";

// import Home from "./src/components/home";
// import Post from "./src/components/post";
import SearchResults from "./src/screens/searchResults";

// import Feed from "./src/utils/feed";

// const post1 = Feed[1];

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Home /> */}
      {/* <Post post={post1} /> */}

      <SearchResults />
    </SafeAreaView>
  );
}
