import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from "../../assets/colors/colors";
import Entypo from "react-native-vector-icons/Entypo";

const Result = ({ text }) => {
  return (
    <View style={styles.searchItemWrapper}>
      <View style={styles.icon}>
        <Entypo name={"location-pin"} size={20} color={colors.orange} />
      </View>
      <Text style={styles.resultText}>{text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  searchItemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.lightGray,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  resultText: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
  },
});

export default Result;
