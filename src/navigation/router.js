import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import SearchLocation from "../screens/searchLocation";
import Guests from "../screens/guests";
import HomeTabNavigator from "./homeTabNavigator";

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"Location"}
          component={SearchLocation}
          options={{
            title: "Search your destination",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name={"Guests"}
          component={Guests}
          options={{ title: "How many guests?", headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
