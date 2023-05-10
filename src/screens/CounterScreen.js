import react, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const STEP = 2;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const setCounter = (type, payload) => {
    dispatch({
      type: type,
      payload: payload
    })

  }

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter("INCREMENT", STEP);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter("DECREMENT", STEP);
        }}
      />
      <Text style={styles.smText}>Current Count : </Text>
      <Text style={styles.bigText}>{state}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  smText: {
    fontSize: 16,
    marginTop: 24,
    alignSelf: "center",
  },
  bigText: {
    fontSize: 32,
    marginTop: 8,
    alignSelf: "center",
  },
});

export default CounterScreen;
