import React from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";

import { colors } from "../../assets/colors/colors";
import search from "../utils/search";
import Entypo from "react-native-vector-icons/Entypo";

const SearchLocation = (props) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <View
        style={{
          marginTop: 30,
          height: 40,
          width: "100%",
          borderRadius: 20,
          backgroundColor: "#ede9e8",
          padding: 10,
        }}
      >
        <TextInput
          style={{ fontSize: 18}}
          placeholder={"Where are you going?"}
        />
      </View>

      <FlatList
        data={search}
        renderItem={({ item }) => (
          <View style={{flexDirection: "row", alignItems: "center", paddingVertical: 15}}>
            <View style={{width: 40, height: 40, borderRadius: 8, backgroundColor: "#d7d7d7", alignItems: "center", justifyContent: "center", marginRight: 10}}>
              <Entypo name={"location-pin"} size={20} color={colors.orange} />
            </View>
            <Text style={{fontSize: 16, fontWeight: "600", lineHeight: 20}}>{item.description}</Text>
          </View>
        )}
        // ItemSeparatorComponent={<View style={{borderWidth: StyleSheet.hairlineWidth}} />}
      />
    </View>
  );
};

export default SearchLocation;
