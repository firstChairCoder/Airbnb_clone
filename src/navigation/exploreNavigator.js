import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import SearchResults from "../screens/searchResults";

const Stack = createStackNavigator();

const ExploreNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Home"}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      
      <Stack.Screen
        name={"Results"}
        component={SearchResults}
        options={{
          title: "Search your destination",
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
