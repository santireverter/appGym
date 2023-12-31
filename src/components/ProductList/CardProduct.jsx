import { View, Text, Button, StyleSheet } from "react-native"

const CardProduct = ({item, onOpenModal}) => {
    return(
        <View style={styles.container}>
            <View
                style={styles.card}
            >
                <Text style={styles.text}>Ejercicio: {item.title}</Text>
                <Button
                    title='X'
                    onPress={() => onOpenModal(item)}
                />
            </View>
        </View>
    )
}

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
    text:{
        fontFamily: "Lato",
    }
})

export default CardProduct;