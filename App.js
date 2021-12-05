import React from "react";
import { Text, View, SafeAreaView, StyleSheet, StatusBar } from "react-native";

import Router from "./src/navigation/router";

export default function App() {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <Router />
    </>
  );
}
