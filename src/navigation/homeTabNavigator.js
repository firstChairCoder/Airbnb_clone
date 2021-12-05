import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/home";
import { colors } from "../../assets/colors/colors";

import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import ExploreNavigator from "./exploreNavigator";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.gray,
        headerShown: false,
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 5
        },
      }}
    >
      <Tab.Screen
        name={"Explore"}
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name={"search"} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Saved"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name={"heart-o"} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Airbnb"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"airbnb"} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Messages"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={"message-square"} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name={"user"} size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
