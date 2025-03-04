import { TouchableOpacity, View, Text } from "react-native"
import CreateIconWhite from "@/assets/icons/create-icon-white";
import { Styles } from "./consts/styles";

export function CreateTabNotActive({ openModal, ...props }) {
    return (
        <TouchableOpacity
            {...props}
            style={Styles.bottomBarItem}
            onPress={openModal}
        >
            <View style={Styles.iconWithText}>
                <View style={Styles.iconWrapper}>
                    <CreateIconWhite />
                </View>
                <Text style={Styles.tabText}>Создать гитару</Text>
            </View>
        </TouchableOpacity>
    )
}
