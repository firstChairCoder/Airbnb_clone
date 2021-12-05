import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../assets/colors/colors";

const Guests = (props) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.mainText}>Adults</Text>
          <Text style={styles.subText}>Ages 13 or above</Text>
        </View>

        <View style={styles.btnWrapper}>
          <Pressable
            style={styles.btn}
            onPress={() => setAdults(Math.max(0, adults - 1))}
          >
            <Text style={styles.btnText}>-</Text>
          </Pressable>
          <Text style={styles.num}>{adults}</Text>

          <Pressable style={styles.btn} onPress={() => setAdults(adults + 1)}>
            <Text style={styles.btnText}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.mainText}>Children</Text>
          <Text style={styles.subText}>Ages 2 to 12</Text>
        </View>

        <View style={styles.btnWrapper}>
          <Pressable
            style={styles.btn}
            onPress={() => setChildren(Math.max(0, children - 1))}
          >
            <Text style={styles.btnText}>-</Text>
          </Pressable>
          <Text style={styles.num}>{children}</Text>

          <Pressable
            style={styles.btn}
            onPress={() => setChildren(children + 1)}
          >
            <Text style={styles.btnText}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.mainText}>Infants</Text>
          <Text style={styles.subText}>Ages 0 to 2</Text>
        </View>

        <View style={styles.btnWrapper}>
          <Pressable
            style={styles.btn}
            onPress={() => setInfants(Math.max(0, infants - 1))}
          >
            <Text style={styles.btnText}>-</Text>
          </Pressable>
          <Text style={styles.num}>{infants}</Text>

          <Pressable style={styles.btn} onPress={() => setInfants(infants + 1)}>
            <Text style={styles.btnText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Guests;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    borderBottomColor: colors.lightGray,
  },
  mainText: {
    marginBottom: 2,
    fontWeight: "700",
  },
  subText: {
    color: colors.gray,
  },
  btnWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  btnText: {
    fontSize: 14,
  },
  num: {
    marginHorizontal: 15,
    fontSize: 16,
  },
});
