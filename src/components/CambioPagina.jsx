import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const CambioPagina = ({changePage}) => {
    return (
    <View style={styles.container}>
        <Pressable onPress={()=> {changePage("Categories")}}>
            <Text style={styles.text}>Elegir Categoria de ejercicios</Text>
        </Pressable>
    </View>
    )
}

export default CambioPagina

const styles = StyleSheet.create({
    container:{
        width: '85%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary,
        marginTop: 15,
        borderRadius: 5,
        elevation: 5,
        backgroundColor: colors.button,
    },
    text:{
        fontFamily: 'Lato',
        color: colors.background
    }
})