import react from "react";

import { View, Button, Text,StyleSheet } from "react-native"

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return <View>
        <Text style={{marginBottom: 8}}>{color}</Text>
        <Button onPress={ () => { onIncrease() }} title={`Increase ${color}`}/>
        <Button onPress={ () => { onDecrease() }} title={`Decrease ${color}`}/>
    </View>
}

const styles = StyleSheet.create({})

export default ColorCounter