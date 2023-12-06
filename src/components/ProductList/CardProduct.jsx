import { View, Text, Button, StyleSheet } from "react-native"

const CardProduct = ({item, onOpenModal}) => {
    return(
        <View style={styles.container}>
            <View
                style={styles.card}
            >
                <Text>El producto que ingreso es:</Text>
                <Text>Nombre de Producto: {item.title}</Text>
            </View>
            <View style={styles.buttonContainer}>
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
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
        padding: 15,
        shadowColor: "#000",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    buttonContainer: {
        marginTop: 20,
        right: 35,
        top: 18,
    },
})

export default CardProduct;