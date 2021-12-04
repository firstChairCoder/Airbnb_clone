import React from "react";
import { View } from "react-native";

import { colors } from "../../assets/colors/colors";

const Dot = () => (
  <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: colors.gray, alignSelf: 'center', flexDirection: 'row' }} />
);

export default Dot;
