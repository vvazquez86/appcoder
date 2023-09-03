import { StyleSheet, Pressable } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

const BottonInput= ({ addItem }) => {
    return (
        <Pressable style={styles.button} onPress={() => addItem()}>
          <Ionicons name="add-circle-outline" size={45} color="#FFAD14" />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 15,
        marginLeft: 5,
      },
})


export default BottonInput;