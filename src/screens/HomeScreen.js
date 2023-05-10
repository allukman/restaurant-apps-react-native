import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        style={styles.marginbutton}
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        style={styles.marginbutton}
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        style={styles.marginbutton}
        title="Go to List Image Demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        style={styles.marginbutton}
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        style={styles.marginbutton}
        title="Go to Color Demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        style={styles.marginbutton}
        title="Go to Square Color Demo"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        style={styles.marginbutton}
        title="Go to Text Demo"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        style={styles.marginbutton}
        title="Go to Box Demo"
        onPress={() => navigation.navigate("Box")}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  marginbutton: {
    marginHorizontal: 12,
    marginVertical: 8,
  },
});

export default HomeScreen;
