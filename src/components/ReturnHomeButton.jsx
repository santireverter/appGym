import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const ReturnHomeButton = ({goHome}) => {
    return (
    <Pressable 
        style={styles.container}
        onPress={()=> {goHome("Home")}}
    >
        <Text style={styles.text}>Return Home</Text>
    </Pressable>
    )
}

export default ReturnHomeButton

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
        color: colors.background,
    }
})