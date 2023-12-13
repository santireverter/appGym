import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import ejerciciosPreCharged from '../data/products.json'
import CardProduct from '../components/ProductList/CardProduct'
import { colors } from '../global/colors'
import CardPreCharged from '../components/CardPreCharged'

const Ejercicios = () => {
    return (
        <View style={styles.container}>
            <Header title='Ejercicios'/>
            <FlatList
                data={ejerciciosPreCharged}
                keyExtractor={item => item.id}
                renderItem={({item}) => <CardPreCharged item={item}/>}
            />
        </View>
    )
}

export default Ejercicios

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        height: "100%",
        width: "100%",
    }
})