import react, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 4;

const SquareScreen = () => {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);

  const setColor = (color, change) => {
    const colorMap = {
      red: [red, setRed],
      green: [green, setGreen],
      blue: [blue, setBlue]
    };
  
    if (colorMap.hasOwnProperty(color)) {
      const [currentColor, setNewColor] = colorMap[color];
      const newColor = currentColor + change;
      setNewColor(Math.max(0, Math.min(newColor, 255)));
    }
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
