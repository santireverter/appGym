import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import uuid from 'react-native-uuid';
import AddProduct from './src/components/AddProduct';
import DeleteModal from './src/components/DeleteModal';
import ProductList from './src/components/ProductList';

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
      <AddProduct
        onChangeText = {setNewProductTitle}
        onAddProduct = {handlerAddProduct}
        productTitle = {newProductTitle}
      />
      <ProductList
        products = {products}
        onOpenModal = {handlerOpenModal}
      />
      <DeleteModal
        visible = {modalVisible}
        onDelete = {handlerDeleteProduct}
        onClose = {handlerCloseModal}
      />
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
  }
});
