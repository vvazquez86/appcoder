import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ListItem = ({ item }) => {
    return (
        <View>
            <Text style={styles.list}>- {item.text} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        fontSize: 20,
        marginVertical: 2,
        marginLeft: 4,
        fontWeight: 'bold'
    },

    listContainer: {
        width: 250,
        backgroundColor: '#FDF9F2',
        borderWidth: 1,
        borderColor: 'grey',
        padding: 5,
        justifyContent: 'flex-start'
    },
})

export default ListItem;