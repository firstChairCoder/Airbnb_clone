//import liraries
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { colors } from "../../assets/colors/colors";
import Dot from "./dot";
import Heart from "../../assets/svg/heart";

// create a component
const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: post.image }}
        resizeMode="cover"
      />

      <Text style={styles.bedText} numberOfLines={2}>
        1 bed <Dot /> 1 bedroom
      </Text>

      <Text style={styles.description}>
        Entire flat <Dot /> Puerto de la Cruz Bonito estudio con vistas en el
        Taor...
      </Text>

      <Text style={styles.textWrapper}>
        <Text style={styles.oldPrice}>$43 </Text>
        <Text style={styles.newPrice}>$36</Text> / night
      </Text>

      <Text
        style={styles.totalPrice}
      >
        $247 total
      </Text>

      <Heart style={styles.heart} />
    </View>
  );
};

const styles = StyleSheet.create({
  heart: {
    position: "absolute",
    right: 30,
    top: 10,
  },
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    borderRadius: 10,
  },
  bedText: {
    marginVertical: 8,
    color: colors.gray,
  },
  description: {
    fontSize: 18,
    lineHeight: 25,
  },
  textWrapper: {
    fontSize: 18,
  },
  oldPrice: {
    color: colors.gray,
    textDecorationLine: "line-through",
    marginVertical: 8,
  },
  newPrice: {
    fontWeight: "700",
  },
  totalPrice: {
    fontSize: 16,
    textDecorationLine: "underline",
    color: colors.gray,
  }
});

export default Post;
