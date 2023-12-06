import { View, Text, Button, StyleSheet } from "react-native"

const CardProduct = ({item, onOpenModal}) => {
    return(
        <View
            style={styles.textInput}
        >
            <Text>Nombre de Producto: {item.title}</Text>
            <Text>ID del producto: {item.id}</Text>
            <Button
                title='X'
                onPress={() => onOpenModal(item)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 3,
        width: "75%",
        marginRight: 10,
        marginTop: 15,
        padding: 10,
    }
})

export default CardProduct;