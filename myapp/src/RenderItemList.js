import { View, StyleSheet, TextInput } from "react-native";
import React from "react";


const RenderItemList= ({ item }) => {
    return (
        <View style={styles.inputContainer}>
          <ListItem item={item}/>
        </View>
    )
}

const styles = StyleSheet.create({
    
})


export default RenderItemList;