import { View, TextInput, Button, StyleSheet } from "react-native";


const AddProduct = ({onChangeText, onAddProduct, productTitle}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='completame'
                onChangeText={(title) => onChangeText(title)}
                value = {productTitle}
            />
            <Button
                onPress={() => onAddProduct()}
                title='Agregar'
                color={"#000"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: "row",
        width: "85%",
    },
    textInput: {
        borderWidth: 3,
        width: "75%",
        marginRight: 10,
        marginTop: 15,
        padding: 10,
    }
})

export default AddProduct;