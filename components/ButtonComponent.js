import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonComponent = (props) => {
    return (
        <TouchableOpacity onPress={props.onPressHandler}>
            <View style={{...styles.btn, ...props.style}}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "grey",
        padding: 9
    },
    text: {
        color: "white",
        textAlign: "center",
        fontSize: 17,
    }
})

export default ButtonComponent
