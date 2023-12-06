import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";


const AddProduct = ({onChangeText, onAddProduct, productTitle}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder='Ingrese un producto'
                onChangeText={(title) => onChangeText(title)}
                value = {productTitle}
            />
            <Pressable
                style={styles.button}
                onPress={() => onAddProduct()}
            >
                <Text style={styles.text}>Agregar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-around",
        width: "85%",
        height: "auto",
        marginTop: 15,
    },
    textInput: {
        borderWidth: 2,
        borderRadius: 5,
        width: "80%",
        height: 50,
        paddingLeft: 10,
    },
    button: {
        borderWidth: 2,
        borderColor: "transparent",
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingTop: 12,
        alignSelf: "stretch",
        backgroundColor: "#2296f3",
    },
    text: {
        color: "white",
        fontWeight: "bold",
    }

})

export default AddProduct;