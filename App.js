import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";

import Home from "./src/components/home";

export default function App() {
  return (
      <SafeAreaView style={{flex: 1}}>
        <Home />
      </SafeAreaView>
  );
}
