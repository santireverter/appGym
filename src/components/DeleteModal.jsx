import {Modal, View, Text, Button, StyleSheet} from "react-native"


const DeleteModal = ({visible, onDelete, onClose}) => {
    return(
        <View style={styles.containerModal}>
            <Modal
                visible = {visible}
                style= {styles.modal}
            >
                <Text>Desea eliminar este ejercicio?</Text>
                <Button
                    title='Eliminar'
                    onPress={()=> onDelete()}
                />
                <Button
                    title='Cancelar'
                    onPress={()=> onClose()}
                />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    containerModal:{
        width: "50%",
        height: "50%",
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
    modal:{
        height: "50%",
        width: "50%",
    }
})

export default DeleteModal;