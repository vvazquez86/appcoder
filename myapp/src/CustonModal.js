import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import React from "react";

const CustonModal = ({ isModalVisible, clearList, setModalVisible }) => {
    return (
        <View>
            <Modal transparent={false} visible={isModalVisible}>

                <View style={styles.modalCenterView}>

                    <View style={styles.modalStyle}>
                        <Text style={styles.textModal}> ¿Estas seguro de borrar la lista? </Text>

                        <View style={styles.modalBottonsContainer}>
                            <Pressable style={styles.modalBottons} onPress={() => clearList()}>
                                <Text> SI </Text>
                            </Pressable>

                            <Pressable style={styles.modalBottons} onPress={() => setModalVisible(false)}>
                                <Text> NO </Text>
                            </Pressable>
                        </View>
                    </View>

                </View>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalCenterView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
    
      modalStyle: {
        margin: 20,
        backgroundColor: '#ECB64B',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
      },
    
      textModal: {
        fontWeight: 'bold',
        fontSize: 18,
      },
    
      modalBottonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
      },
    
      modalBottons:{
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 20
      },
    
})

export default CustonModal;