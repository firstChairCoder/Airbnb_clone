import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Fontisto from "react-native-vector-icons/Fontisto";

import { colors } from "../../assets/colors/colors";

const Home = (props) => {
  const windowWidth = useWindowDimensions().width;
  const navigation = useNavigation()

  const myStyle = () => {
    return StyleSheet.create({
      width: windowWidth - 20,
    });
  };
  // console.log(myStyle())

  return (
    <View>
      <ImageBackground
        style={styles.imageBg}
        source={require("./../../assets/images/wallpaper.jpg")}
      >
        <Text style={styles.mainText}>Go Near</Text>

        <TouchableOpacity
          style={styles.exploreBtn}
          onPress={() => console.warn("Explore clicked")}
        >
          <Text style={styles.btnText}>Explore nearby stays</Text>
        </TouchableOpacity>
      </ImageBackground>

      <Pressable
        style={[myStyle(), styles.search]}
        onPress={() => navigation.navigate("Location")}
      >
        <Fontisto name={"search"} size={20} color={colors.orange} />
        <Text style={styles.searchText}>Where are you going?</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBg: {
    height: 400,
    width: "100%",
    justifyContent: "center",
    resizeMode: "cover",
  },
  mainText: {
    fontSize: 80,
    fontWeight: "600",
    color: colors.white,
    width: "70%",
    marginLeft: 25,
  },
  exploreBtn: {
    height: 30,
    width: 170,
    borderRadius: 10,
    backgroundColor: colors.white,
    margin: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  search: {
    //   zIndex: 100,
    // width: myStyle,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 1,
    position: "absolute",
    top: 30,
    flex: 1,
    elevation: Platform.OS === "android" ? 25 : 0,
  },
  searchText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black,
    marginLeft: 15,
  },
});

export default Home;
