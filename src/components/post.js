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

      <Text style={styles.bedText} >
        {post.bed} bed <Dot /> {post.bedroom} bedroom
      </Text>

      <Text style={styles.description} numberOfLines={2}>
        {post.type} <Dot /> {post.title}
      </Text>

      <Text style={styles.textWrapper}>
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.newPrice}>${post.newPrice}</Text> / night
      </Text>

      <Text
        style={styles.totalPrice}
      >
        ${post.totalPrice} total
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
