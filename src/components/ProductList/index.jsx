import { View, FlatList, StyleSheet } from "react-native"
import CardProduct from "./CardProduct";

const ProductList = ({products, onOpenModal}) => {
    return(
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={products.id}
                renderItem={({item})=> <CardProduct
                                            item = {item}
                                            onOpenModal = {onOpenModal} 
                                        />
                    }
            />
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        width: "80%",
        flexDirection: "column",
    }
})

export default ProductList;