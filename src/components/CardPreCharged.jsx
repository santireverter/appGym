import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardPreCharged = ({item}) => {
    return (
        <View style={styles.container}>
            <View
                style={styles.card}
            >
                <Text>{item.title}</Text>
            </View>
        </View>
    )
}

export default CardPreCharged

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
        padding: 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        gap: 50,
        flexWrap: "wrap",
        elevation: 7,
    },
})