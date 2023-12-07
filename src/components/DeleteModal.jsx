import {Modal, View, Text, Button, StyleSheet} from "react-native"


const DeleteModal = ({visible, onDelete, onClose}) => {
    return(
        <View style={styles.containerModal}>
            <Modal
                visible = {visible}
                animationType='fade'
                transparent={true}
            >
                <View style={styles.container}>
                    <Text style={styles.text}>Desea eliminar este ejercicio?</Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            title='Eliminar'
                            onPress={()=> onDelete()}
                        />
                        <Button
                            title='Cancelar'
                            onPress={()=> onClose()}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    containerModal:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        justifyContent: 'space-around',  
        backgroundColor : "#f6f6f6",   
        height: 300 ,  
        width: '80%',  
        borderRadius:10,  
        borderWidth: 2,  
        borderColor: '#ECF0F1',    
        marginTop: 120,  
        marginLeft: 40,
        elevation: 2,
    },
    text:{
        fontSize: 18,
        paddingLeft: 25,
        paddingRight: 25,
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})

export default DeleteModal;