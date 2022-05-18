import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

const InputComponent = (props) => {
    return (
        <TextInput 
        {...props}
        style={{ ...styles.input, ...props.style }} placeholder={props.textPlaceholder}
        onChangeText={props.onChangeHandler}
        value={props.inputValue}
  
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: Colors.secondary,
        borderWidth: 1,
        height: 40,
        marginVertical: 5,
    }
})

export default InputComponent
