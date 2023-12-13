import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardCategories = ({item}) => {
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.card}
            >
                <Text style={styles.text}>{item}</Text>
            </Pressable>
        </View>
    )
}

export default CardCategories

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    card:{
        width: "90%",
        borderWidth: 2,
        backgroundColor: "#ECF0F1",
        borderColor: "#ECF0F1",
        borderRadius: 10,
        marginTop: 20,
        marginHorizontal: "5%",
        padding: 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        gap: 50,
        flexWrap: "wrap",
        elevation: 7,
    },
    text:{
        fontFamily: "Lato",
        fontSize: 15
    }
})