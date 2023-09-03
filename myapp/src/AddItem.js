import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'
import BottonInput from './BottonInput';
import TextInputAdd from './TextInputAdd';

const AddItem = ({ text, setText, addItem }) => {
    return (
        <View style={styles.addContainer}>

            {/* Input del add */}

            <TextInputAdd text={text} setText={setText} />

            {/* Botton del add */}

            <BottonInput addItem={addItem} />

        </View>
    )
}

const styles = StyleSheet.create({

    addContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
})

export default AddItem