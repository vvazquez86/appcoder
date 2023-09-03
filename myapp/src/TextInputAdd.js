import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

const TextInputAdd= ({ text, setText }) => {
    return (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Escriba aqui un item'

            value={text}
            onChangeText={(value) => setText(value)}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 7,
        fontSize: 16,
        width: 190,
      },
    
      inputContainer: {
        marginTop: 15,
        borderWidth: 1.1,
        borderColor: 'black',
        marginRight: 10,
      },
})


export default TextInputAdd;