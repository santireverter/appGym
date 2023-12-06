import { View, FlatList, StyleSheet } from "react-native"
import CardProduct from "./CardProduct";

const ProductList = ({products, onOpenModal}) => {
    return(
        <View>
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

})

export default ProductList;