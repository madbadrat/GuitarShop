import { Modal as RNModal, TouchableWithoutFeedback, View, Text } from "react-native"
import { Styles } from "./consts/styles";

export function Modal({ visible, closeModal }) {
    return (
        <RNModal
            animationType="fade"
            transparent={true}
            // visible={modalVisible}
            visible={visible}
            onRequestClose={closeModal}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={Styles.modalOverlay}>
                    <View style={Styles.modalContent}>
                        <Text style={Styles.modalText}>Сначала нужно войти</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </RNModal>
    )
}
