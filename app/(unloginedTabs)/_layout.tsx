import { Modal } from "@/components/Modal";
import { LoginScreenTabs } from "@/components/Tabs";
import { useState } from "react";
import { View } from "react-native";

export default function TabLayout() {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    return (
        <View style={{ flex: 1 }}>
            <LoginScreenTabs openModal={openModal} />

            <Modal visible={modalVisible} closeModal={closeModal} />

        </View >
    )
}
