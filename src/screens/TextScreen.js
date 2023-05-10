import react, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My Name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 16,
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
  },
});

export default TextScreen;
