import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  FlatList,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import AddItem from './src/AddItem';
import ListItem from './src/ListItem';
import CustonModal from './src/CustonModal';

export default function App() {

  //Logica de la aplicacion

  const initialList = [
    { id: 1, text: 'Harina' },
    { id: 2, text: 'Azucar' },
    { id: 3, text: 'Cereales' },
  ]

  const [text, setText] = useState('');

  const [list, setList] = useState(initialList);

  const [isModalVisible, setModalVisible] = useState(false);

  const addItem = () => {

    list.push({
      id: Math.random(),
      text: text,
    })

    setList(list);
    setText('');
  };

  const clearList = () => {
    setList([]);
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>


      <View style={styles.modalCenterView}>
        <CustonModal isModalVisible={isModalVisible} clearList={clearList} setModalVisible={setModalVisible}/>
      </View>

      {/* Imagen superior */}
      <Image

        style={styles.imagen}

        // URI: Identificador Uniforme de recursos, son formar estandar de refenciar recursos como paginas web, imagenes y archivos de internet

        source={{
          uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/6159500-lista-de-compras-icone-cor-planejamento-compras-na-loja-adicionando-produtos-ao-trole-mercadoria-e-consumismo-lista-de-verificacao-escrevendo-comercio-e-marketing-digital-ilustracao-isolada-vetor.jpg'
        }}

      />

      <Text style={styles.titulo} >Lista de compras</Text>

      <AddItem text={text} setText={setText} addItem={addItem} />      

      <View style={styles.listContainer}>
        
        {/* Lista Optimizada */}

        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListItem item={item}/>
          )}
        />

      </View>
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Ionicons name="trash" size={45} color="red" />
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    marginTop: 20,
    fontSize: 30,
    borderBottomWidth: 3,
    borderColor: '#FFAD14',
  },

  imagen: {
    marginTop: 75,
    height: 75,
    width: 75,
  },


  button: {
    marginTop: 15,
    marginLeft: 5,
  },
  
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

});
