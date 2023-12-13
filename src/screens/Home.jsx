import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import uuid from 'react-native-uuid';
import Header from '../components/Header'
import AddProduct from '../components/AddProduct';
import ProductList from '../components/ProductList';
import DeleteModal from '../components/DeleteModal';
import CambioPagina from '../components/CambioPagina';

const Home = ({changePage}) => {

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
            <Header title='Home' style={styles.header}/>
                <AddProduct
                    onChangeText = {setNewProductTitle}
                    onAddProduct = {handlerAddProduct}
                    productTitle = {newProductTitle}
                />
                <ProductList
                    products = {products}
                    onOpenModal = {handlerOpenModal}
                />
                <CambioPagina changePage={changePage}/>
                <DeleteModal
                    visible = {modalVisible}
                    onDelete = {handlerDeleteProduct}
                    onClose = {handlerCloseModal}
                />
        </View>

    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        height: "100%",
        width: "100%",
    },
})