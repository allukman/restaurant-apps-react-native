import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 4;

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        ...state,
        [action.payload.color]: Math.max(
          0,
          Math.min(state[action.payload.color] + action.payload.change, 255)
        ),
      };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 255,
    green: 255,
    blue: 255,
  });
  const {red, green, blue} = state;

  const setColor = (color, change) => {
    dispatch({
      type: "CHANGE_COLOR",
      payload: { color, change },
    });
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      />

      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        color="Green"
      />

      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        color="Blue"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          alignSelf: "center",
          marginTop: 24,
        }}
      />

      <View style={styles.container}>
        <Text style={styles.text}>Red : {red}</Text>
        <Text style={styles.text}>Green : {green}</Text>
        <Text style={styles.text}>Blue : {blue}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 20,
  },
});

export default SquareScreen;