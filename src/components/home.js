import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
// import Fontisto from 'react-native-vector-icons/Fontisto’

import { colors } from "../../assets/colors/colors";

const Home = (props) => {
  return (
    <View>
      
      <ImageBackground
        style={{
          height: 400,
          width: "100%",
          justifyContent: "center",
          resizeMode: "cover",
        }}
        source={require("./../../assets/images/wallpaper.jpg")}
      >
        <Text
          style={{
            fontSize: 80,
            fontWeight: "600",
            color: colors.white,
            width: "70%",
            marginLeft: 25,
          }}
        >
          Go Near
        </Text>
        <TouchableOpacity
          style={{
            height: 30,
            width: 170,
            borderRadius: 10,
            backgroundColor: colors.white,
            margin: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => console.warn("Explore clicked")}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Explore nearby stays
          </Text>
        </TouchableOpacity>
      </ImageBackground>

      <Pressable
      
        style={{
            
        //   zIndex: 100,
          width: Dimensions.get("window").width - 30,
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
        }}
        onPress={() => console.warn("Search bar pressed.")}
      >
          <Fontisto name={"search"} size={20} color={"orange"} />
        <Text style={{ fontSize: 18, fontWeight: "bold", color: colors.black, marginLeft: 15 }}>
          Where are you going?
        </Text>
        
      </Pressable>

    </View>
  );
};

export default Home;
