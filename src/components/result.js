import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { colors } from "../../assets/colors/colors";
import Entypo from "react-native-vector-icons/Entypo";

const Result = ({ text }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.searchItemWrapper}
      onPress={() => navigation.navigate("Guests")}
    >
      <View style={styles.icon}>
        <Entypo name={"location-pin"} size={20} color={colors.orange} />
      </View>
      <Text style={styles.resultText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
