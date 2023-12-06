import {Modal, Text, Button, StyleSheet} from "react-native"


const DeleteModal = ({visible, onDelete, onClose}) => {
    return(
        <Modal
            visible = {visible} 
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
    )
}

const styles = StyleSheet.create({
    
})

export default DeleteModal;