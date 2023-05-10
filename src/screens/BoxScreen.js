import react from "react";
import { View, Text, StyleSheet } from "react-native"

const BoxScreen = () => {
    return(
        <View>
            <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
        <View style={styles.viewStyle}>
            <Text style={styles.textFourStyle}>Child #4</Text>
            <Text style={styles.textFiveStyle}>Child #5</Text>
            <Text style={styles.textSixStyle}>Child #6</Text>
        </View>
        <View style={styles.viewStyle}>
            <Text style={styles.textSevenStyle}>Child #7</Text>
            <Text style={styles.textEightStyle}>Child #8</Text>
            <Text style={styles.textNineStyle}>Child #9</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        height: 200,
        borderWidth: 3,
        borderColor: 'black',
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        alignSelf: 'flex-start',
        flex: 1
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        alignSelf: 'center',
        flex: 1
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        alignSelf: 'flex-end',
        flex: 1
    },
    textFourStyle: {
        borderWidth: 3,
        borderColor: 'red',
        left: 16
    },
    textFiveStyle: {
        borderWidth: 3,
        borderColor: 'red',
        bottom: 12,
        top: 8
    },
    textSixStyle: {
        borderWidth: 3,
        borderColor: 'red',
        top: 20
    },
    textSevenStyle: {
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'red'
    },
    textEightStyle: {
        borderWidth: 3,
        borderColor: 'red',
        fontSize: 24,
        backgroundColor: 'blue',
        ...StyleSheet.absoluteFillObject
    },
    textNineStyle: {
        borderWidth: 3,
        borderColor: 'red'
    }
});

export default BoxScreen