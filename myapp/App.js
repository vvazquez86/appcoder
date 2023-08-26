import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Imagen superior */}
      <Image 
      
      style={styles.imagen}

      // URI: Identificador Uniforme de recursos, son formar estandar de refenciar recursos como paginas web, imagenes y archivos de internet

      source={{uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/6159500-lista-de-compras-icone-cor-planejamento-compras-na-loja-adicionando-produtos-ao-trole-mercadoria-e-consumismo-lista-de-verificacao-escrevendo-comercio-e-marketing-digital-ilustracao-isolada-vetor.jpg'
      }}
      
      />
      
      <Text style={styles.titulo} >Lista de compras</Text>
      
      {/* Add item */}
      <View style={styles.addContainer}>

        {/* Input del add */}
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Escriba aqui un item' />
        </View>

        {/* Botton del add */}
        <Pressable style={styles.button} onPress={() => console.log('Boton presionado desde el celu')}>
          <Ionicons name="add-circle-outline" size={45} color="#FFAD14" />
        </Pressable>

      </View>
    <View style={styles.listContainer}>
      <Text style={styles.list}>- Harina</Text>
      <Text style={styles.list}>- Huevos</Text>
      <Text style={styles.list}>- Cereal</Text>      
    </View>

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

  button:{
    marginTop: 15,
    marginLeft: 5,    
  },

  addContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,     
  },

  list:{
    fontSize: 20,
    marginVertical: 2,
    marginLeft: 4, 
    fontWeight: 'bold'   
  },

  listContainer:{
    width: 250,
    backgroundColor: '#FDF9F2',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    justifyContent: 'flex-start'
  },

  imagen:{
    marginTop: 20,
    height: 75,
    width: 75,
  }
});
