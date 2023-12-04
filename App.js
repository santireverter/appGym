import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TextInputComponent, View } from 'react-native';
import uuid from 'react-native-uuid';

export default function AppGym() {

const [newProductTitle, setNewProductTitle] = useState("");
const [products, setProducts] = useState([]);
const [selectedProduct, setSelectedProduct] = useState({});
const [modalVisible, setModalVisible] = useState(false);

const handlerAddProduct = () =>{

  const newProduct = {
    id: uuid.v4(),
    title: newProductTitle
  }
  setProducts(current => [...current, newProduct])
  setNewProductTitle("");
};

const handlerDeleteProduct = () =>{
  setProducts(current => current.filter(product => product.id ==! selectedProduct.id));
  setModalVisible(false);
}

const handlerOpenModal = (item) =>{
  setModalVisible(true);
  setSelectedProduct({item});
};

const handlerCloseModal = () =>{
  setModalVisible(false);
};

  return (
    <View style={styles.container}>
      <Text>Hola, Coder!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='completame'
          onChangeText={(title) => setNewProductTitle(title)}
          value = {newProductTitle}
        />
        <Button
          onPress={() => handlerAddProduct()}
          title='Agregar'
          color={"#000"}
        />
      </View>
      <FlatList
        data={products}
        keyExtractor={products.id}
        renderItem={({item})=> <View
                                  style={styles.textInput}
                                >
                                  <Text>Nombre de Producto: {item.title}</Text>
                                  <Text>ID del producto: {item.id}</Text>
                                  <Button
                                    title='X'
                                    onPress={() => handlerOpenModal(item)}
                                  />
                                </View>
                    }
      />
      <Modal
        visible = {modalVisible} 
      >
        <Text>Desea eliminar este ejercicio?</Text>
        <Button
          title='Eliminar'
          onPress={()=> handlerDeleteProduct()}
        />
        <Button
          title='Cancelar'
          onPress={()=> handlerCloseModal()}
        />
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'top',
    marginTop: 50,
  },
  inputContainer:{
    flexDirection: "row",
    width: "85%",
  },
  textInput: {
    borderWidth: 3,
    width: "75%",
    marginRight: 10,
    marginTop: 15,
    padding: 10,
  }
});
